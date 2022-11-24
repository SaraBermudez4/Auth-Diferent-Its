import { useEffect, useState } from "react";

// aws
import { Authenticator, Button, Alert, PasswordField, TextField, TableHead, Table, TableBody, TableRow, TableCell } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';

// project-imports
import { createAuth, deleteAuth } from './graphql/mutations';
import { listAuths } from './graphql/queries';
import './App.css'

function App({ signOut, user }) {

  const [userApp, setUserApp] = useState({
    email: '',
    password: '',
  });

  const [users, setUsers] = useState([]);

  useEffect(() => async () => {
    setUsers(await getUsers());
  }, []);

  // Obtener usuarios
  const getUsers = async () => {
    const result = await API.graphql(graphqlOperation(listAuths))
    return result.data.listAuths.items;
  }

  // Borrar usuario
  const handleDelete = async (useDelete) => {
    await API.graphql(graphqlOperation(deleteAuth, { input: { id: useDelete.id } }))
    setUsers(await getUsers());
  }

  // Form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserApp({ ...userApp, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await API.graphql(graphqlOperation(createAuth, { input: userApp }))
    setUsers(getUsers());
  };

  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <div style={{ padding: 20 }}>
          <div>
            <Alert variation="info" > Welcome {user.username} </Alert>
            <div style={{ border: "groove grey", padding: 10, margin: "20px 0" }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  descriptiveText="Enter a valid email"
                  placeholder="Email"
                  label="Email"
                  name="email"
                  errorMessage="There is an error"
                  onChange={handleChange}
                />
                <PasswordField
                  autoComplete="new-password"
                  descriptiveText="Please enter password"
                  label="Password"
                  name="password"
                  size="small"
                  onChange={handleChange}
                />
                <Button type="submit" style={{ marginTop: 20 }}>Register</Button>
              </form>
            </div>
            <Table
              caption=""
              highlightOnHover={false}
              variation="bordered"
            >
              <TableHead>
                <TableRow>
                  <TableCell as="th">ID</TableCell>
                  <TableCell as="th">Email</TableCell>
                  <TableCell as="th">Password</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map(userData => (
                  <TableRow key={userData?.id}>
                    <TableCell>{userData?.id}</TableCell>
                    <TableCell>{userData?.email}</TableCell>
                    <TableCell>{userData?.password}</TableCell>
                    <TableCell><Button name="button-delete-user" onClick={() => handleDelete(userData)}>Delete user</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button onClick={signOut} style={{ marginTop: 20 }}>Sign out</Button>
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default App;