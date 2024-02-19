import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser', {name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
        
    } 

     return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="col-6 bg-white rounded-3 p-3">
                <h4>Add User</h4>
                <form onSubmit={Submit}>
                    <div class="form-group mt-1">
                        <label for="exampleInputName">Name</label>
                        <input type="text" class="form-control" id="exampleInputName" placeholder="Enter Name"
                         onChange={(e)=> setName(e.target.value)}/>
                    </div>

                    <div class="form-group mt-1">
                        <label for="exampleInputEmail">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter Email"
                         onChange={(e)=> setEmail(e.target.value)}/>
                    </div>

                    <div class="form-group mt-1">
                        <label for="exampleInputAge">Age</label>
                        <input type="text" class="form-control" id="exampleInputAge" placeholder="Enter Age"
                         onChange={(e)=> setAge(e.target.value)}/>
                    </div>

                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;