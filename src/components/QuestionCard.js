import React from 'react'
import quiz from '../data/Apprentice_TandemFor400_Data.json'
import { Card, ListGroup } from 'react-bootstrap'
import './QuestionCard.css'

function QuestionCard() {
  const questions = quiz.map(data => (
    <Card>
      <Card.Title className="card-title">{data.question}</Card.Title>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>{data.correct}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  ))

  return (
    <div>{questions}</div>
  )
}

export default QuestionCard
