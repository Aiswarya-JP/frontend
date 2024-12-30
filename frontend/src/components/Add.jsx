import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [input, setinput] = useState({ Name: "", Age: "", Department: "", Salary: "" })
  var navigate = useNavigate()
  var location = useLocation()
  console.log("a", location.state)
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
      axios.put('http://localhost:3004/update/'+location.state.val._id,input)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
        })
    }
    else {
      axios.post('http://localhost:3004/add', input)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
        })
    }
  }
  useEffect(() => {
    if (location.state !== null)
      setinput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Department: location.state.val.Department,
        Salary: location.state.val.Salary
      })
  }, [])
    
  
  return (
    <div>
      <Typography variant='h3' color='error'>Details</Typography><br /><br />
      <TextField label='name' variant='outlined' name='Name' value={input.Name} onChange={inputHandler} /><br /><br /><br />
      <TextField label='age' variant='outlined' name='Age' value={input.Age} onChange={inputHandler} /><br /><br /><br />
      <TextField label='department' variant='outlined' name='Department' value={input.Department} onChange={inputHandler} /><br /><br /><br />
      <TextField label='salary' variant='outlined' name='Salary' value={input.Salary} onChange={inputHandler} /><br /><br /><br />
      <Button variant='contained' onClick={addHandler}>SUBMIT</Button>
    </div>
  )
}

export default Add
