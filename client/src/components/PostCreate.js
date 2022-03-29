import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title="Create an Order" {...props}>
      <SimpleForm>
        <TextInput source="part" />
        <TextInput multiline source="notes" />
        <TextInput source="customer" />
        <DateInput label="Date Entered" source="publishedAt" />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
