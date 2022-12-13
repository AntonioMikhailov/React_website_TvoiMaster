import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function ButtonH2({link, text, stylesContainer='h3-button__container',  stylesButton='h2__buttonOne'}) {
 

  return (
    <div className={`button-container ${stylesContainer}`}>
    <NavLink to={link} className="button-row">
      <div   className={`${stylesButton} btnOne`}>{text}</div>
      <div   className={`${stylesButton} btnTwo`}>{text}</div>
    </NavLink>
  </div>
)
}
