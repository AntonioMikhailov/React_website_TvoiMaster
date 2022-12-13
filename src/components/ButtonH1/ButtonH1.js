import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ButtonH1({link_1, link_2}) {
  return (
     <>
         <div className="h1-button__section">
       <div className="button-container h1-btn__container">
         <div className="button-row">
           <NavLink to={link_1} className="h1__buttonLeftOne btnOne">сделать заказ</NavLink>
           <NavLink to={link_1} className="h1__buttonLeftTwo btnTwo">сделать заказ</NavLink>
         </div>
       </div>
       <div className="button-container h1-btn__container">
         <div className="button-row">
           <NavLink to={link_2} className="h1__buttonRightOne btnOne">узнать больше</NavLink>
           <NavLink to={link_2} className="h1__buttonRightTwo btnTwo">узнать больше</NavLink>
         </div>
       </div>
     </div>
     </>
   
  )
}
