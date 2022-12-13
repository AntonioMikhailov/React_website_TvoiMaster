import React from 'react'
import { NavLink } from 'react-router-dom'
import h5Item from './dataS5Home'

export default function S5HomeTeam() {


return (
<section className="home-5">
<div className="container">
  <h2 className="h5-title">Наша команда – это, что вам нужно</h2>
  <h4 className="h5_subtitle">Оказываем помощь в решении любых бытовых проблем. Вы можете выбрать услугу из нашего
    списка, а&nbsp;если вам потребуется другая помощь по обслуживанию, мы с радостью выполним даже
    нестандартные&nbsp;работы! </h4>
  <div className="h5-row">
    {
      h5Item.map((item, i)=> { 
       return ( 
        <NavLink key={i} to="/services" className="h5-item">
        <div className="h5-item__row">
          <div className="h5-item__icon"><img src={item.icon} alt="фото"/></div>
          <h3 className="h5-item__title">{item.title}</h3>
        </div>
        <h4 className="h5-item__text">{item.text}</h4>
      </NavLink>
        )})  
    }
 
    
  
  </div>
  <div className="button-container h5-button__container">
      <div className="button-row">
        <NavLink to="/services" className="h5__buttonOne btnOne">еще услуги</NavLink>
        <NavLink to="/services" className="h5__buttonTwo btnTwo">еще услуги</NavLink>
      </div>
    </div>
    
</div>
</section>
)
}
