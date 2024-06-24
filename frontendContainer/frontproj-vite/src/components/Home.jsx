import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import '../components/Homies.css'
const Home = () => {

    const [clients,setClients] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async () => {
            const result = await axios.get("http://localhost:8080/getallclient")
            setClients(result.data);
    }


    const deleteClient = async (id) =>{
        await axios.delete(`http://localhost:8080/getclient/${id}`)
        loadClients()
    };

    return(
        <div className="container">
            <div className="py-4" >
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client,index) => (
                            <tr>
                            {/* index+1 increasing a no# while it added another database it means autoIncrement */}
                            <th scope="row" key={index}>{index + 1}</th> 
                                <td>{client.name}</td>
                                <td>{client.username}</td>
                                <td>{client.email}</td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={`/viewclient/${client.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/editclient/${client.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={() => deleteClient(client.id)}>Delete</button>
                            </td>
                            </tr>       
                        ))}
                    
                    </tbody>
                </table>
            </div>
        
        </div>


    );
}
export default Home