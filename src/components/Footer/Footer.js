import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../data/icons'
import {serviceLink, contactsLink, UpitemContacts} from './dataFooter'
export default function Footer() {
 return (
 <>
    <section className="home-9">
      <div className="container">
        <div className="h9-row">
          {
            UpitemContacts.map((item, i)=> { 
             return ( 
              <a key={i} href={item.link} className="h9-item">
              <div className="h-9__itemRow">
                <div className="h-9-itemRow__left"><img src={item.icon} alt="#"/></div>
                <div className="h-9-itemRow__right">{item.text}</div>
              </div>
            </a>
              )})  
          }
        </div>
      </div>
    </section>
 <footer className="footer">
    <div className="container">
      <div className="footer-row">
        <div className="footer-column">
          <div className="footer-logo"><img src={icon.logo_inv} alt="logo"/></div>
          <h3 className="footer-title">купон на скидку</h3>
          <h4 className="footer-text">Получите скидку на установку межкомнатныx дверей и окон при заказе на сумму 12 000
            рублей</h4>
          <div className="button-container footer-button__container">
            <div className="button-row">
              <a href=" " className="footer__buttonOne btnOne">получить купон</a>
              <a href=" " className="footer__buttonTwo btnTwo">получить купон</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">услуги</h3>
          <ul>
          {
            serviceLink.map((item, i)=> { 
             return ( 
              <li key={i} className="footer-services"><NavLink to={item.link}>{item.text}</NavLink></li>
              )})  
          }
            {
}
          </ul>
        </div>
        <div className="footer-column">
  <h3 className="footer-title">контакты</h3>
  <ul>
    {
      contactsLink.map((item, i)=> { 
       return ( 
        <li key={i} className={item.styles}><a href=" ">{item.text}</a></li>
        )})  
    }
    {
}
  </ul>
          <div className="footer-socialRow">
            <a href=" " className="footer__socialItem">&#xe911;</a>
            <a href=" " className="footer__socialItem">&#xe908;</a>
            <a href=" " className="footer__socialItem">&#xe906;</a>
            <a href=" " className="footer__socialItem">&#xe90a;</a>
          </div>
        </div>
      </div>
      <a href="email:zakaz@tochka-focusa.ru" className="footer-copyright">Дизайн и верстка сайта: Студия дизайна
        <span>"Точка-Фокуса"</span> 2020</a>
    </div>
  </footer>
</>
)
}
