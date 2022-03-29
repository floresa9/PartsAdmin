import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="part" />
        <TextInput source="customer" />
        <TextInput source="contact" />
        <TextInput multiline label="Notes" source="notes" />
        <DateInput label="Date Entered" source="publishedAt" />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
