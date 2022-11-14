import React, { useState } from 'react'
import {Table, Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const TablePlayer = ({player, handleEdit}) => {
    const [query, setQuery] = useState("")
    
    return (
        <div style={{
            marginRight: 150,
            marginLeft: 150
        }}>
<Form.Control type='text' placeholder='Search' className='search' onChange={(e) => setQuery(e.target.value)} style={{marginTop:20, marginBottom: 20,width:300, borderRadius:8}}/>
{/* <input type="text" placeholder='Search' className='search' onChange={(e) => setQuery(e.target.value)} style={{marginTop:20, marginBottom: 20, borderRadius:8}} /> */}
<Table striped bordered hover  size="sm" variant='dark'>
    <thead >
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th >Email</th>
            <th>Experience</th>
            <th>Level</th>
            <th>Action</th>
        </tr>
            </thead>
    <tbody >
        {player.filter((player) =>
        player.username.toLowerCase().includes(query) ||
        player.email.toLowerCase().includes(query) ||
        player.exp.toLowerCase().includes(query) ||
        player.lvl.toLowerCase().includes(query)
        )
        .map((player, index) => {
        return (
        <tr key={index} >
            <td>{index + 1}</td>
            <td>{player.username}</td>
            <td>{player.email}</td>
            <td>{player.exp}</td>
            <td>{player.lvl}</td>
            <td>
            <button className="btn btn-warning mr-2" onClick={() => handleEdit(player.id)}>Edit</button>
            </td>
        </tr>
        );
    })}
    </tbody>
</Table>
        </div>
)}

export default TablePlayer
