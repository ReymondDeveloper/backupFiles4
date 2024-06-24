import axios from "axios"
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
function AddClient (){

    let nvgate = useNavigate()

    const [client ,setClient ] = useState({
        name: '',
        username:'',
        email:''
    })

    const {name,username,email} = client

    const onInputChange = (e) => {
        setClient({...client, [e.target.name] : e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault(); {/* To default nothing show object in url path && To make it clean */}
        await axios.post("http://localhost:8080/client",client)

        nvgate("/");

    }

    return(
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
                    <h2 className="text-center m-4">Register Client</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label" >Name</label>
                                <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={name} onChange={(e) => onInputChange(e)}  />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Username" className="form-label" >Username</label>
                                <input type="text" className="form-control" placeholder="Enter Your Username" name="username" value={username} onChange={(e) => onInputChange(e)}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label" >Email</label>
                                <input type="text" className="form-control" placeholder="Enter Your Email-Address" name="email" value={email} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                                </div>
                                <div className="col-auto">
                                    <Link to="/" className="btn btn-outline-danger">Cancel</Link>
                                </div>
                            </div>
                        </form>
                </div>



            </div>
        </div>
    )

}
export default AddClient