import React from 'react'
import quiz from '../data/Apprentice_TandemFor400_Data.json'
import { Card, ListGroup } from 'react-bootstrap'

function QuestionCard() {
  return (
    <Card>
      <Card.Title>map each question here</Card.Title>
      <ListGroup>
        <ListGroup.Item>map each answer here</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default QuestionCard
