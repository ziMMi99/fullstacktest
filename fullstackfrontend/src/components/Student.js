import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';

export default function Student() {
  const paperStyle={padding: "50px 20px", width: 600, margin: "20px auto"}
  const [name, setName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [students, setStudents] = React.useState([])

  const handleClick=(e)=> {
    e.preventDefault()
    const student={name, address}
    console.log(student)
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(() => {
      console.log("New Student added")
      setName('')
      setAddress('')
    })
  }

  React.useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
    .then(response => response.json())
    .then((result) => {
      setStudents(result);
      }
    )
    },[])
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color: "blue"}}><u>Add student</u></h1>
        <TextField id="outlined-basic" label="Student name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)} style={{ margin: "10px 0" }}/>
        <TextField id="outlined-basic" label="Student adress" variant="outlined" fullWidth value={address} onChange={(e)=>setAddress(e.target.value)} style={{ margin: "10px 0" }}/>

        <Button variant="contained" style={{ margin: "20px 0" }} onClick={handleClick}>Add student</Button>
      </Paper>
      <h1 style={{ textAlign: 'center', margin: 'auto' }}>Students</h1>

      <Paper elevation={3} style={paperStyle}>

        {students.map(student => (
          <Paper elevation={6} style={{margin: "10px", padding:"15px", textAlign:"left"}} key={student.id}>
              Id: {student.id} <br></br>
              Name: {student.name} <br></br>
              Address: {student.address} <br></br>
            </Paper>
            ))
        }
      </Paper>
    </Box>
  );
}
