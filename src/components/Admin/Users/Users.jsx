import Table from "../Table/Table.jsx"
import {Link} from "react-router-dom"
import './Users.css'
import { useEffect, useState } from "react"
const Users = () => {
    const [users, setUsers] = useState(null)
    const headers = [
        "First Name", "Last Name", "Email", "Status"
    ]

    useEffect(() => {
        const getUsers = async () => {
            try {
                let response = await fetch('http://localhost:8080/api/users', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })

                response = await response.json()
                
                if (response.length > 0) {
                    setUsers(response)
                } else {
                    console.log(response)
                }
            } catch (err) {
                console.log(err.error)
            }
        };

        getUsers()

    }, [])

    return (
        <div className="container-user">
            <div className="table-title">
                <p className="page-title"> Users</p>
                <Link to="/admin/users/new" className="btn btn-primary">New User</Link>
            </div>
           
           <Table  data={users} headers={headers}/>
        </div>
)}

export default Users


