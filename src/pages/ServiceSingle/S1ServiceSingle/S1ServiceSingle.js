import React from 'react'
import ButtonH2 from '../../../components/ButtonH2/ButtonH2'
import Form from '../../../components/Form/Form'
import img from '../../../data/images'
export default function S1ServiceSingle() {
  const S1List = ['Самые низкие цены', 'Мастера с опытом работы от 5 лет', 'Выезд на место в течение 1 часа', 'Работаем в кредит', 'Скидки при повторном заказе', 'Гарантия на работы 2 года'     ]
  return (
    <section className="service-single-1">
      <div className="container">
        <h1 className="ss1-title">муж-умелец на час</h1>
        <h3 className="ss1-subTitle">Мастерски выполняем любую мужскую работу по дому!</h3>
        <div className="ss1-row">
          <div className="ss1-left">
            <h4 className="ss1-text">Услуга Муж на час одна из самых распространенных услуг заказываемых жителями Москвы и
              Московской области, так как никто не застрахован от бытовых поломок или переделок. Наш мастер Муж на час
              устранит любую возникшую проблему в кратчайшие сроки по минимальным ценам!
              <p> Работа нашей компании предельно прозрачна, поэтому клиентам всегда легко и просто с нами работать, а
                положительные отзывы говорят о том что мы движемся в правильном направлении! Наша задача помогать людям
                решать их бытовые проблемы, и мы с ней справляемся вот уже более 12 лет, чем очень гордимся! Звоните
                прямо сейчас и убедитесь в этом сами!</p>
            </h4>
            <div className="ss1-left__image"><img src={img.services_serSingleSec_1} alt="фото"/></div>
            <h4 className="ss1-left__text">Если Вы не нашли на сайте услугу которая Вам необходима, не отчаивайтесь, просто
              позвоните нам по телефону или заполните форму обратной связи, и наши менеджеры перезвонят Вам немедленно,
              и свяжут Вас со специалистом который оказывает нужный Вам вид услуги!
            </h4>
  <div className="ss1-leftBottom__row">
    <h2 className="ss1-leftBottom__title">У нас</h2>
    <div className="ss1-leftBottom__listRow">
      <ul>
        {
          S1List.map((item, i)=> { 
           return ( 
            <li key={i} className="ss1-left__list">{item}</li>
            )})  
        }
        {
}
      </ul>
    </div>
    <div className="ss1-left__ButtonRow">
      <div className="ss1-Button__left">от 450 руб</div>
      <div className="ss1-Button__right">
      <ButtonH2
      link={'/services/service-single'}
      text={'вызвать мужа на час'}
      stylesContainer={'ss1-button__container'}
      stylesButton={'ss1__buttonOne'}
       />
        {
}
                </div>
              </div>
            </div>
          </div>
          <div className="ss1-right">
            <div className="ss1-right__formRow">
              <h3 className="ss1-right__title">Есть вопросы?</h3>
              <h4 className="ss1-right__text">Наши мастера ответят Вам в течение 5 минут</h4>
<Form
  stylesInput={ 'ss1-right__input'}
  stylesTextArea={'ss1-right__textarea'}
  buttonText={'отправить'}
  buttonSendText={'отправлено'}
  />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
