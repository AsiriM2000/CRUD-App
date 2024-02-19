import React,{useState, useEffect}  from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function User() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[]);

    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
           <div className="col-6 bg-white rounded-3 p-3 table-responsive">
                <Link to='/create'><button className="btn btn-success">Add+</button></Link>
                <table class="table table-dark mt-1">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                   return <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={`/update/${user._id}`}><button className="btn btn-warning pt-0 pb-0">Edit</button></Link>
                                            <button className="btn btn-danger pt-0 pb-0 ms-1"
                                                onClick={(e)=> handleDelete(user._id)}
                                            >
                                            Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
           </div>
        </div>
    )
}

export default User;