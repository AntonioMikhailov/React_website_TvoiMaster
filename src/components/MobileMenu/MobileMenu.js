import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../data/icons'
import { servLink, repairLink } from '../Header/dataLinkNav'
export default function MobileMenu({isMobileActive, setMobileActive }) {
  const [isActiveOneSubMenu,  setActiveOneSubMenu] = useState(false)
  const [isActiveTwoSubMenu,  setActiveTwoSubMenu] = useState(false)
  function closeMobile() {   
    setMobileActive(false)  
    setActiveOneSubMenu(false) //  
    setActiveTwoSubMenu(false) //  
    }
  return (
  <>
  <div
    onClick={closeMobile}
  className={isMobileActive ? "background background-active " : "background" }></div>
  <div
  className={isMobileActive ? "mobile-wrapper active-wrapper " :"mobile-wrapper" }>
    <div
    className="mobile-menu">
      <NavLink end to="/" 
      className={({isActive})=> isActive ? "mobile-menu__item mobile-active" : "mobile-menu__item"}
      >Главная</NavLink>
      <NavLink to="/about"
       className={({isActive})=> isActive ? "mobile-menu__item mobile-active" : "mobile-menu__item"}
      >О нас</NavLink>
      {/* <!-- Service--> */}
      <div className="mobile-dropDownLink ">
          <NavLink to="/services"
          className={({isActive})=> isActive ? "mobile-menu__item mobile-active" : "mobile-menu__item"}
          >Услуги</NavLink>
          <div
          onClick={()=> setActiveOneSubMenu(prev => !prev)}
          className="mobile-dropDownLink__icon"><img src={icon.drop_downIcon} alt="icon"/></div>
        <div className={isActiveOneSubMenu ? "mobile-SubRow mobile-SubRow__active" : "mobile-SubRow" }>
          {
            servLink.map((item, i)=> { 
             return ( 
              <NavLink key={i}  to={item.link} className="mobile-subRow__item">{item.text}</NavLink>
              )})  
          }
        </div>
      </div>
      {/* <!-- Repair--> */}
      <div className="mobile-dropDownLink ">
          <NavLink to="/repair"
           className={({isActive})=> isActive ? "mobile-menu__item mobile-active" : "mobile-menu__item"}
          >Ремонт</NavLink>
          <div
           onClick={()=> setActiveTwoSubMenu(prev => !prev)}
          className="mobile-dropDownLink__icon padding-icon"><img src={icon.drop_downIcon} alt="icon"/></div>
        <div className={isActiveTwoSubMenu ? "mobile-SubRow mobile-SubRow__active" : "mobile-SubRow" }>
        {
            repairLink.map((item, i)=> { 
             return ( 
              <NavLink key={i}  to={item.link} className="mobile-subRow__item">{item.text}</NavLink>
              )})  
          }
      </div>
      </div>
      <NavLink to="/contacts"
       className={({isActive})=> isActive ? "mobile-menu__item mobile-active" : "mobile-menu__item"}
       >Контакты</NavLink>
    </div>
    <div
    onClick={closeMobile}
    className="mobile-close-button"><img src={icon.clouse_button} alt="icon"/></div>
  </div>
  </>
  )
}
