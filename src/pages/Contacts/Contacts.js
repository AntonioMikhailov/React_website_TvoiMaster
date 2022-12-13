import React, { useState } from 'react'
import { useRef } from 'react'
import Form from '../../components/Form/Form'
export default function Contacts() {
  const contactsLink = [
    { link: '/', styles: 'footer-contacts', text: <>(495) 123 456 78,   +7 (911) 123 456 78</>},
    { link: '/', styles: 'footer-workday', text: <>Пон - Птн: 8 - 20ч;   Сб - Вск: 10 - 18ч;</>},
    { link: '/', styles: 'footer-adress', text: <>Москва, ул. Серышева,43</>},
    { link: '/', styles: 'footer-email', text: <>tvoidom@tvoidom.ru</>},
    ]
const [ buttonValue, setButttonValue] = useState('Отправить');
    const formContacts = useRef()
    function handleFormContacts() { 
   setTimeout(() => {
    formContacts.current.reset()
    setButttonValue('отправлено')
   }, 1000);
      setTimeout(() => {
        setButttonValue('отправить')
      }, 3000);
    }
  return (
   <>
   <section className="contacts-1">
      <div className="container">
        <div className="c1-row">
          <div className="c1-left">
            <div className="c1-left__title">Свяжитесь с нами удобным способом:</div>
            <ul>
              {
                contactsLink.map((item, i)=> { 
                 return ( 
                  <li key={i} className="c1-left__list">
                  <div className={item.styles}>{item.text}</div>
                </li>
                  )})  
              }
            </ul>
            <div className="c1-left__socialRow">
              <a href=" " className="c1-left__socialItem">&#xe90d;</a>
              <a href=" " className="c1-left__socialItem">&#xe906;</a>
              <a href=" " className="c1-left__socialItem">&#xe908;</a>
              <a href=" " className="c1-left__socialItem">&#xe90a;</a>
            </div>
          </div>
          <div className="c1-right">
            <div className="c1-right__title">Вы можете связаться с нами через форму обратной связи</div>
            <h4 className="c1-right__text">Наши мастера ответят Вам в течение 5 минут</h4>
            <form ref={formContacts} className="c1-right__formRow">
              <div className="c1-right__formLeft">
              {
}
                <input type="text" className="c1-right__input" placeholder="Имя"/>
                <input type="text" className="c1-right__input" placeholder="Телефон"/>
                <input type="text" className="c1-right__input" placeholder="E mail"/>
              </div>
              <div className="c1-right__formRight">
                <textarea name="#" className="c1-right__textarea" placeholder="Текст заявки"></textarea>
              </div>  
            </form>
            <div onClick={ handleFormContacts} className="c1-right__button">
              <div className="button-container c1-button__container">
                <div className="button-row">
                  <div className="c1__buttonOne btnOne">{buttonValue} </div>
                  <div className="c1__buttonTwo btnTwo">{buttonValue}</div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
    {}
    <div className="c1-map__row">
      <div className="container">
        <iframe title='map'
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2b0f35b30b2426d72f729191a0efe808d68ef1708bf6a72ed862b0f716b77876&amp;source=constructor"></iframe>
      </div>
    </div>
    </>
  )
}
