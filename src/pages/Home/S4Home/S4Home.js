import React from 'react'
import img from '../../../data/images'

export default function S4Home() {
  return (
    <section className="home-4">
      <div className="container">
        <div className="h4-row">
          <div className="h4-left">
            <h2 className="h4-left__title">мы позаботимся о комфорте в&nbsp;вашем доме</h2>
            <h4 className="h4-left__text">Гарантируем: качество работы и скорость выполнения. <br/> Мы всегда стремимся
              выполнять
              свою работу быстро и на высшем уровне, понимая, что люди ценят свое время и деньги. Не беспокойтесь о
              задержках или незавершенной работе - это наша гарантийная политика! </h4>
            <div className="button-container h4-button__container">
              <div className="button-row">
                <div className="h4__buttonOne btnOne">звоните нам: (495) 123 456 78</div>
                <div className="h4__buttonTwo btnTwo">звоните нам: (495) 123 456 78</div>
              </div>
            </div>
          </div>
          <div className="h4-right"><img src={img.home_sec_4} alt="#"/></div>
        </div>
      </div>
    </section>
  )
}
