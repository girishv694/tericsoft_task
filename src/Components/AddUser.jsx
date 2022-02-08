import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../service/api';
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './All.css'


const initialValue = {
    name: "",
    email: "",
    phone: "",
    gender:"",
    date:""
   
}

const AddUser = () => {
    const [selectedDate, setselectedDate] = useState(null);
    const [user, setUser] = useState(initialValue);
    const {name, gender,dob, email, phone,date} = user;

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value,
                   date: selectedDate,
                });
       console.log(user);
    }

    const addUserDetails = async () =>{
       await addUser(user);
       history.push('/all');
    }

    const handleChange = (e) => {
        const { name, email, phone, gender } = user;
    
        setUser({
          ...user,
          [e.target.name]: e.target.value,
          date: selectedDate,
        });
      };

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add User Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
               
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
                </FormControl>
                 
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                </FormControl>
                

                <FormControl>
                <InputLabel></InputLabel>
                <DatePicker
                selected={selectedDate}
                onChange={(e) => setselectedDate(e)}
              />
           <br/>
           <br/>
              <FormControl className="green">
              Gender
             <br/>
             <br/>
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <br/>
              <br/>
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              
              </FormControl>

              <Box my={3}>
                    <Button variant="contained" onClick={() => addUserDetails() } color="primary" align="center">Add User</Button>
                    <Button onClick={()=> history.push("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
              </FormControl>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddUser;