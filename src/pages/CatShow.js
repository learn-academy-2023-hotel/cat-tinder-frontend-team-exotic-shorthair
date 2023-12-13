import React from 'react'
import { NavLink, useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
    const { id } = useParams()
    let currentCat = cats?.find(cat => cat.id === +id)

    return (
      <>
      {currentCat && (
        <>
        <img alt={`${currentCat.name}'s profile`} src={currentCat.image} />
        <h3>[currentCat.enjoys]</h3>
        <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
            Edit Cat Profile
          </NavLink>
        </>
      )}
      <h3>Cat Show Page</h3>
      </>
    )
}

export default CatShow