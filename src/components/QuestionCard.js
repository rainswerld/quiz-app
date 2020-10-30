import React from 'react'
// import quiz from '../data/Apprentice_TandemFor400_Data.json'
import { Card, ListGroup } from 'react-bootstrap'
import './QuestionCard.css'

function QuestionCard() {
  return (
    <Card className="card-style">
      <Card.Title className="card-title">map questions here</Card.Title>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>map answer choices here</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default QuestionCard
