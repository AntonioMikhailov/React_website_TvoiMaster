import React, { useRef } from 'react'
import { useState } from 'react';
import {   NavLink, useLocation } from 'react-router-dom'
import icon from '../../data/icons'
import MobileMenu from '../MobileMenu/MobileMenu';
import { servLink, repairLink } from './dataLinkNav';
export default function Header() {
  const location = useLocation(); 
 const [isMobileActive, setMobileActive] = useState(false)
 const [isSearchActive, setSerachActive] = useState(false)
 const InputSearch = useRef()
 function searchFieldClose() { 
  InputSearch.current.value = ''
 
 }
return (
<>
<div className="header-hi">
<div className="header-hi__row"  id='toUp'>
<div className="h-hi__contactsRow">
<div className="h-hi__image"><img src={icon.clock24_icon} alt="icon"/></div>
<div className="h-hi__text">мы на связи 0-24ч</div>
</div>
<div className="h-hi__socialRow">
<a href=" " className="h-hi__socialItem">&#xe911;</a>
<a href=" " className="h-hi__socialItem">&#xe908;</a>
<a href=" " className="h-hi__socialItem">&#xe906;</a>
<a href=" " className="h-hi__socialItem">&#xe90a;</a>
</div>
</div>
</div>
{/* Bottom */}
<div className="header-bottom">
<div className="container">
<div className="header-bottom__row">
<div className="h-b__left"> <NavLink to="/" className="header-logo"><img src={icon.logo} alt="logo"/></NavLink>
</div>
<div className="h-b__right">
  <div className="h-b-right__row">
    <div className="h-b-right__item">
      <div className="h-b-itemIcon"><img src={icon.work_time} alt="icon"/></div>
      <div className="h-b-itemText">Пон - Птн: 8 - 20ч <br/>Сб - Вск: 10 - 18ч</div>
    </div>
    <div className="h-b-right__item">
      <div className="h-b-itemIcon"><img src={icon.phone} alt="icon"/></div>
      <div className="h-b-itemText">Ждем заказы:<br/>(495) 123 456 78</div>
    </div>
  </div>
</div>
</div>
</div>
</div>
{/* Header Nav */}
<section className="header">
<div className="container">
<div className="header-row">
<nav className="header-row__left">
  <NavLink data-title end to="/" className={({isActive})=> isActive ? "header-menu__item header-active" : "header-menu__item" }>Главная</NavLink>
  <NavLink data-title to="/about"  className={({isActive})=> isActive ? "header-menu__item header-active" : "header-menu__item"} >О&nbsp;нас</NavLink>
  <div to="/services" 
  className={ location.pathname === '/services' ||  location.pathname === '/services/service-single' ? "header-dropDownLink header-active" :"header-dropDownLink"}>
  <div className={ location.pathname === '/services' ||  location.pathname === '/services/service-single'   ? "header-dropDownLink__icon  header-blackIcon " : "header-dropDownLink__icon" }></div>
  <NavLink data-title   className={({isActive})=> isActive ? "header-menu__item  header-active" : "header-menu__item"}   to="/services" >Услуги</NavLink>
    {/* <!-- SubMenu --> */}
    <nav className="header-serviceSubRow">
      {
        servLink.map((item, i)=> { 
         return ( 
          <NavLink key={i} to={item.link} className={ "header-subRow__item" } >{item.text}</NavLink>
          )})  
      }
     </nav>
  </div>
{/* REPAIRE */}
  <div to="/repair" className={ location.pathname === '/repair' || location.pathname === '/repair/repair-single' ? "header-dropDownLink header-active" :"header-dropDownLink"}>
    <NavLink data-title to="/repair"  className={({isActive})=> isActive ? "header-menu__item header-active" : "header-menu__item"}>Ремонт</NavLink>
    <nav className="header-serviceSubRow">
      {
        repairLink.map((item, i)=> { 
         return ( 
          <NavLink key={i} to={item.link} className="header-subRow__item">{item.text}</NavLink>
          )})  
      }
    </nav>
    <div className={location.pathname === '/repair' || location.pathname === '/repair/repair-single' ? "header-dropDownLink__icon  header-blackIcon" : "header-dropDownLink__icon  " }></div>
  </div>
  <NavLink data-title to="/contacts" className={({isActive})=> isActive ? "header-menu__item header-active" : "header-menu__item"}>Контакты</NavLink>
</nav>
<div className="header-row__right">
  <div className={isSearchActive ? "header-row__searchRow search-show " : "header-row__searchRow" }>
    <input
    ref={InputSearch}
    type="text" className="h-search__input" placeholder="Поиск..."/>
    <div
      onClick={searchFieldClose}
    className="h-search__searchIcon"><img src={icon.search_icon} alt="icon"/></div>
    <div
     onClick={()=> setSerachActive(false)}
    className="h-search__cancelIcon"><img src={icon.cancel_search} alt="icon"/></div>
  </div>
  <div
  onClick={()=> setSerachActive(true)}
  className={isSearchActive ? "h-search__startSearchIcon search-hide" : "h-search__startSearchIcon"}><img src={icon.search_icon} alt="icon"/></div>
</div>
<div
onClick={()=> setMobileActive(true)}
className="burger-btn"><img src={icon.burger_button} alt="icon"/>
</div>
</div>
</div>
</section>
<MobileMenu
isMobileActive={isMobileActive}
setMobileActive={setMobileActive}
/>
</>
)
}
