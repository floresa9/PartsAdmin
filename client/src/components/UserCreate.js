import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title="Create a Customer" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
