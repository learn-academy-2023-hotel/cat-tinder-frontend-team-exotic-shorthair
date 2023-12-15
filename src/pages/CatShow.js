import React from 'react'
import { NavLink, useParams } from "react-router-dom"
import { Button } from "reactstrap"

const CatShow = ({ cats, deleteCat }) => {
    const { id } = useParams()
    let currentCat = cats?.find(cat => cat.id === +id)
const handleClickDelete = () => {
  deleteCat(currentCat.id)
}

    return (
      <>
      {currentCat && (
        <div className="cats-profile">
        <img className="imgshow-css" alt={`${currentCat.name}'s profile`} src={currentCat.image} />
        <h3>{currentCat.name}'s Profile</h3>
        <h3>Enjoys: {currentCat.enjoys}</h3>
        <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
            <Button>Edit Cat Profile</Button>
          </NavLink>
        <NavLink to="/catindex">
          <Button onClick={handleClickDelete}>Delete Cat Profile</Button>
        </NavLink>
        </div>
      )}
      </>
    )
}

export default CatShow