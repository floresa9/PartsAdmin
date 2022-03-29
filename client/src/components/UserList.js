import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="phone" />
        <EmailField source="email" />
        <EditButton basePath="/customers" />
        <DeleteButton basePath="/customers" />
      </Datagrid>
    </List>
  )
}

export default UserList
