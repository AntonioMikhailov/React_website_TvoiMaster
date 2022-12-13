import React from 'react'
import img from '../../../data/images'
 
import Form from '../../../components/Form/Form'

export default function S1About() {
  return (
    <section className="about-1">
    <div className="container">
      <h1 className="a1-title">Кто мы</h1>
      <h4 className="a1-text">Компания Твой Мастер — это команда мастеров всех профилей. У нас оптимальные расценки на
        услугу «муж на час», мелкий ремонт, в Москве и Московской области.

        <p> Выполняем любой домашний ремонт, чиним бытовую технику любой модели и типа, работаем быстро и аккуратно —
          Вы и&nbsp;Ваша семья не почувствуете ни малейшего неудобства.</p>
      </h4>
      <div className="a1-row">
        <div className="a1-left">
          <div className="a1-left__image"><img src={img.about_sec_1} alt="#"/></div>
          <h4 className="a1-left__text">Домашнее хозяйство, даже в небольшой квартире-студии, требует постоянного
            внимания. В доме всегда есть что исправить или починить: крючки могут оторваться, полки или карниз —
            упасть, а замок — заесть. Для решения таких проблем не обязательно отрываться от работы или тратить
            выходной на мелкие, но трудозатратные операции. Не понадобится и помощь дорогостоящих мастеров-строителей
            — достаточно воспользоваться специальной услугой «муж на час» компании Твой Мастер — в Москве и Московской
            области их профессионально оказывает наша компания.
            <p>Напоминаем: сервис «муж на час» — услуги, котрые мы оказываем круглосуточно по цене гораздо более
              низкой, чем полноценный ремонт, который ждет вас, если запустить проблему и не обращать внимания на
              неисправные розетки, сломавшиеся петли межкомнатных дверей или текущий кран. С нами вы экономите —
              расценки на услугу «муж на час» и мелкий ремонт у нас одни из самых конкурентоспособных в столице.</p>
          </h4>
        </div>
        <div className="a1-right">
          <div className="a1-right__formRow">
            <h3 className="a1-right__title">Есть вопросы?</h3>
            <h4 className="a1-right__text">Наши мастера ответят Вам в течение 5 минут</h4>
            <Form
             stylesInput={ 'a1-right__input'}
             stylesTextArea={'a1-right__textarea'}
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