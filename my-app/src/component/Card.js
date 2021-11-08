import React, { useEffect, useState } from 'react'
import './Box.css'
import { Card } from 'react-bootstrap'
import axios from 'axios'

const Cards = () => {
  const [info, setinfo] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log('this is the data', data.data)
      setinfo(data.data)
    })()
  }, [])
  const cardInfo = [
    {
      image:
        'https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488',
    },
  ]

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className='box'>
        <Card.Header> The User Id {card.id}</Card.Header>
        <Card.Img
          variant='top'
          src='holder.js/100px180'
          src={cardInfo[0].image}
        />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.body}</Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return (
    <>
      <div className='grid'>{info.slice(0, 4).map(renderCard)}</div>
    </>
  )
}

export default Cards
