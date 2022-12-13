import React from 'react'
import img from '../../../data/images'

export default function S2About() {
  return (
    <section className="about-2">
    <div className="container">
      <div className="a2-row">
        <div className="a2-left">
          <h2 className="a2-left__title">скидки пенсионерам</h2>
          <h4 className="a2-left__text">Пенсионерам скидка 10% на общую сумму заказа. Скидка не суммируется с&nbsp;другими
            действующими акциями и предложениями.</h4>
          <div className="button-container a2-button__container">
            <div className="button-row">
              <div className="a2__buttonOne btnOne">звоните нам: (495) 123 456 78</div>
              <div className="a2__buttonTwo btnTwo">звоните нам: (495) 123 456 78</div>
            </div>
          </div>
        </div>
        <div className="a2-right"><img src={img.about_sec_2} alt="фото"/></div>
      </div>
    </div>

  </section>
  )
}
