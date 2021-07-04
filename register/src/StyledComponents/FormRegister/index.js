import React from 'react'
import {Form, FormContainer, FormFields, FormLabel, FormInput, FormButton, Button, FormTitle, Title, FormFields2} from './Form.style'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Register = () => {

    const { register, handleSubmit } = useForm();

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
                <FormFields>
                    <Title>CREATE YOUR ACCOUNT</Title>
                </FormFields>
                <FormFields>
                    <FormFields2>
                        <FormLabel>User</FormLabel>
                        <FormInput placeholder="User" {...register("user")}/>
                    </FormFields2>
                </FormFields>
                <FormFields>
                    <FormFields2>
                        <FormLabel>Email</FormLabel>
                        <FormInput placeholder="Email" type="email" {...register("email")}/>
                    </FormFields2>
                </FormFields>
                <FormFields>
                    <FormFields2>
                        <FormLabel>Password</FormLabel>
                        <FormInput placeholder="Password" type="password" {...register("password")}/>
                    </FormFields2>
                </FormFields>
                <FormFields>
                    <Button type="submit">Register</Button>
                </FormFields>
            </FormContainer>
        </Form>    
    )
}

function onSubmit(data){
    console.log(data);
    const newUser = {
        user: data.user,
        email: data.email,
        password: data.password
    }
    axios.post("/createUser", newUser);
    alert("The User has been registered");

}

export default Register;
