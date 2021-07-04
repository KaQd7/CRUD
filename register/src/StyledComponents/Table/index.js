import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import { Table, TableContainer, TableHeader, HeaderItem, TableContent, TableItem, Text, Global, TableRow, TextHeader, Button, DeleteButton, Buttons } from './Table.style'

const Index = () => {

    const [users, setUsers] = useState([
        {
            user: "",
            email: "",
            password: "",
            _id: ""
        }
    ])

    useEffect(() =>{
        fetch('/users').then(res => {
            if(res.ok){
                return res.json();
            }
        })
        .then(jsonRes => setUsers(jsonRes))
        .catch(err => console.log(err));
    }, [users]);

    function deleteUser(id){
        if (window.confirm('Do you want to delete this user?')) {
            axios.delete('/deleteUser/' + id);
            console.log('Deleted item with id ' + id);
        }

    }

    const [isEdit, setInEdit] = useState({
        status: false,
        rowKey: ""
    });

    const [updateUser, setUpdateUser] = useState({
        user: "",
        email: "",
        password: "",
        id: "",
    });

    const onEdit = ({_id, currentUserName, currentUserEmail, currentUserPass}) => {
        setInEdit({
            status: true,
            rowKey: _id
        })

        const currentUser = {
            user: currentUserName,
            email: currentUserEmail,
            password: currentUserPass,
            id: _id
        }

        console.log(currentUserName + " " + currentUserEmail + " " +  currentUserPass + " " + _id);
        

        setUpdateUser(currentUser);
    }

    const onCancel = () => {
        // reset the inEditMode state value
        setInEdit({
            status: false,
            rowKey: null
        })
        // reset the unit price state value
        setUpdateUser(null);
    }

    const onSave = ({id}) => {

        axios.put("/updateUser/" + id, updateUser);
        alert("Item updated");
        console.log("item with id " + id + " updated")

        setInEdit({
            status: false,
            rowKey: null
        })
    }

    function onChangeField(event){
        const{ name, value } = event.target;
        setUpdateUser((prevInput) => {
            return{
                ...prevInput,
                [name]: value,
            }
        })

        console.log(updateUser)
    };


    return (
        <Global>
            <TableContainer>
            
                <Table>
                    <TableHeader>
                        <HeaderItem><TextHeader>User</TextHeader></HeaderItem>
                        <HeaderItem><TextHeader>Email</TextHeader></HeaderItem>
                        <HeaderItem><TextHeader>Password</TextHeader></HeaderItem>
                        <HeaderItem><TextHeader>Action</TextHeader></HeaderItem>
                    </TableHeader>
                    {users && users.map((user, i) => {
                        return(
                            <TableContent>
                                <TableRow key={user._id}>
                                    <TableItem index={i}>
                                        <Text>
                                            {
                                                isEdit.status && isEdit.rowKey === user._id ? (
                                                    <input value={updateUser.user}
                                                        name="user"
                                                        onChange={onChangeField}
                                                    />
                                                ) : (
                                                    user.user
                                                )
                                            }
                                        </Text>
                                    </TableItem>
                                    <TableItem index={i}>
                                        <Text>
                                            {
                                                isEdit.status && isEdit.rowKey === user._id ? (
                                                    <input value={updateUser.email}
                                                        name="email"
                                                        onChange={onChangeField}
                                                    />
                                                ) : (
                                                    user.email
                                                )
                                            }
                                        </Text>
                                    </TableItem>
                                    <TableItem index={i}>
                                        <Text>
                                            {
                                                isEdit.status && isEdit.rowKey === user._id ? (
                                                    <input value={updateUser.password}
                                                        name="password"
                                                        onChange={onChangeField}
                                                    />
                                                ) : (
                                                    user.password
                                                )
                                            }
                                        </Text>
                                    </TableItem>
                                    <TableItem index={i}>
                                        <Buttons>
                                            {
                                                isEdit.status && isEdit.rowKey === user._id ? (
                                                    <React.Fragment>
                                                        <Button onClick={() => onSave({id: user._id})}>
                                                            Save
                                                        </Button>

                                                        <Button onClick={() => onCancel()}>
                                                            Cancel
                                                        </Button>
                                                    </React.Fragment>

                                                ) : (
                                                    <React.Fragment>
                                                        <Button onClick={() => onEdit({_id: user._id, currentUserName: user.user, currentUserEmail: user.email, currentUserPass: user.password })}>Edit</Button>
                                                        <Button onClick={() => deleteUser(user._id)}>Delete</Button>
                                                    </React.Fragment>
                                                )
                                            }
                                        </Buttons>
                                    </TableItem>
                                </TableRow>
                            </TableContent>
                        )
                    })}
                </Table>
            
            </TableContainer>
        </Global>
        
    )
}

export default Index
