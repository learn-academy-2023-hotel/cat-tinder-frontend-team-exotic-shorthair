import React from "react"
import { NavLink } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap"

const CatIndex = ({ cats }) => {
  return (
    <div className="cards-index">
      {cats?.map((cat, index) => {
        return (
          <Card className="inside-card"
            color="light"
            style={{
              width: "18rem",
            }}
            key={index}
          >
            <img className="img-css" alt="cat profile" src={cat.image} />
            <CardBody>
              <CardTitle className="card-title-css" tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="card-subtitle-css" tag="h6">
                Age: {cat.age}
              </CardSubtitle>
              <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                <Button className="button">Details</Button>
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default CatIndex