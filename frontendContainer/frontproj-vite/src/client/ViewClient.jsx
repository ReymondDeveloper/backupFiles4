import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewClient() {

    const [client,setClient] = useState({
        name:"",
        username:"",
        email:""
    })

    const {id} = useParams();

    useEffect(() => {
        loadClient();
    },[]);

    const loadClient = async () => {
        const result = await axios.get(`http://localhost:8080/getclient/${id}`);
        setClient(result.data)
    }

  return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
                    <h2 className="text-center m-4">Client Details</h2>


                    <div className='card'>
                        <div className='card-header'>
                            Details of Client id : {client.id} 
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item' >
                                    <b>Name :</b>
                                    {client.name}
                                </li>

                                
                                <li className='list-group-item' >
                                    <b>Username :</b>
                                    {client.username}
                                </li>

                                
                                <li className='list-group-item' >
                                    <b>Email :</b>
                                    {client.email}
                                </li>
                            </ul>
                        </div>
                    </div>

                   <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link> 
                </div>
            </div>
        </div>
  )
}

export default ViewClient