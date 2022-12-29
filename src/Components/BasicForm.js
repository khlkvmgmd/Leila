import React from 'react'
import { Form } from 'react-bootstrap'
import './BasicForm.css'

export const BasicForm = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Введите фамилию</Form.Label>
        <Form.Control placeholder="Ввод" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Выбор имени</Form.Label>
        <Form.Select>
          <option>Leila</option>
          <option>Masha</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this"  />
      </Form.Group>
    </>
  )
}
