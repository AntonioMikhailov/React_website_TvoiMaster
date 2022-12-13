import React from 'react'
import ButtonH2 from '../../../components/ButtonH2/ButtonH2'
import Form from '../../../components/Form/Form'
import icon from '../../../data/icons'
import img from '../../../data/images'
import dataS2Repair from '../../Repaire/S2Repair/dataS2Repair'
export default function S2RepSingle() {
  return (
    <section className="repair-single-2">
    <div className="container">
      <div className="rs2-row">
        <div className="rs2-left">
          <div className="rs-leftTop__row">
            <div className="rs-leftTop__icon"><img src={icon.repair_sec_3_1} alt="фото"/></div>
            <h2 className="rs-leftTop__title">Сколько стоит косметический ремонт квартиры</h2>
          </div>
          <h4 className="rs2-text">Услуга Муж на час одна из самых распространенных услуг заказываемых жителями Москвы и
            Московской области, так как никто не застрахован от бытовых поломок или переделок. Наш мастер Муж на час
            устранит любую возникшую проблему в кратчайшие сроки по минимальным ценам!
            <p> Работа нашей компании предельно прозрачна, поэтому клиентам всегда легко и просто с нами работать, а
              положительные отзывы говорят о том что мы движемся в правильном направлении! Наша задача помогать людям
              решать их бытовые проблемы, и мы с ней справляемся вот уже более 12 лет, чем очень гордимся! Звоните
              прямо сейчас и убедитесь в этом сами!</p>
            <p>Если Вы не нашли на сайте услугу которая Вам необходима, не отчаивайтесь, просто
              позвоните нам по телефону или заполните форму обратной связи, и наши менеджеры перезвонят Вам
              немедленно,
              и свяжут Вас со специалистом который оказывает нужный Вам вид услуги!</p>
          </h4>
          <div className="rs2-leftBottom__row">
            <div className="rs2-leftBottom__listRow">
              <ul>
                {
                dataS2Repair[0].listIcon.map((item, i)=> { 
                 return ( 
                  <li key={i} className="rs2-left__list">{item}</li>
                  )})  
                }
                {
}
              </ul>
            </div>
            <div className="rs2-left__line"></div>
            <div className="rs2-left__ButtonRow">
              <div className="rs2-Button__left">от 8000 руб.м<sup>2</sup></div>
              <div className="rs2-Button__right">
              <ButtonH2
      link={'/services/service-single'}
      text={'заказать'}
      stylesContainer={'rs2-button__container'}
      stylesButton={'rs2__buttonOne'}
       />
                {
}
              </div>
            </div>
          </div>
        </div>
        <div className="rs2-right">
          <div className="rs2-right__formRow">
            <h3 className="rs2-right__title">Есть вопросы?</h3>
            <h4 className="rs2-right__text">Наши мастера ответят Вам в течение 5 минут</h4>
            <Form
   stylesInput={ 'rs2-right__input'}
   stylesTextArea={'rs2-right__textarea'}
   buttonText={'отправить'}
   buttonSendText={'отправлено'}
   />
            {
}
            {
}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
