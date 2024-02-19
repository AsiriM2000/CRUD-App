import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    },[]);

    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/updateUser/'+id, {name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="col-6 bg-white rounded-3 p-3">
            <h4>Update User</h4>
            <form onSubmit={Update}>
                <div class="form-group mt-1">
                    <label for="exampleInputName">Name</label>
                    <input type="text" class="form-control" id="exampleInputName" placeholder="Enter Name" 
                    value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>

                <div class="form-group mt-1">
                    <label for="exampleInputEmail">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter Email" 
                    value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div class="form-group mt-1">
                    <label for="exampleInputAge">Age</label>
                    <input type="text" class="form-control" id="exampleInputAge" placeholder="Enter Age" 
                    value={age}  onChange={(e)=> setAge(e.target.value)}/>
                </div>

                <button type="submit" class="btn btn-warning mt-3">Update</button>
            </form>
        </div>
    </div>
    )
}

export default UpdateUser;