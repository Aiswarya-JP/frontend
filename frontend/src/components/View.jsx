import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [user, setuser] = useState([])
    var navigate=useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3004/view')
            .then((response) => {
                console.log(response.data)
                setuser(response.data)
            })
    },[])   
    const delvalue = (id) => {
        console.log(id)
        axios.delete('http://localhost:3004/remove/'+id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
    }
    const updatevalue = (val) => {
        navigate("/add",{ state: { val } })
    }
  return (
      <div>
          <TableContainer>
              <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Salary</TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val)=> {
                          return (
                      <TableRow>
                                  <TableCell>{val.Name}</TableCell>
                                  <TableCell>{val.Age}</TableCell>
                                  <TableCell>{val.Department}</TableCell>
                                  <TableCell>{val.Salary}</TableCell>
                                  <TableCell>
                                      <Button variant='contained' onClick={() => { delvalue(val._id) }}>Delete</Button>&nbsp;
                                      <Button variant='contained' onClick={() => { updatevalue(val) }}>Update</Button>
                                  </TableCell>
                              </TableRow>
                          )
                      })}
                  </TableBody>
                  </Table>
              </TableContainer>
      
    </div>
  )
}

export default View
