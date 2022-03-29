import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="part" />
        <TextField source="customer" />
        <TextField source="contact" />
        <DateField label="Date" source="publishedAt" />
        <EditButton basePath="/parts" />
        <DeleteButton basePath="/parts" />
      </Datagrid>
    </List>
  )
}

export default PostList
