import React from 'react'
import img from '../../../data/images'

export default function S3RepSingle() {
  return (
    <section className="repair-single-3">
    <div className="container">
      <div className="rs3-row">
        <div className="rs3-left">
          <h2 className="rs3-left__title">оценка и выезд <br/>
            замерщика – бесплатно</h2>
          <h4 className="rs3-left__text">Оценка бесплатна в любом случае, собираетесь ли вы заказать косметический ремонт
            однокомнатной квартиры или косметический ремонт двухкомнатной квартиры. </h4>
          <div className="button-container rs3-button__container">
            <div className="button-row">
              <div className="rs3__buttonOne btnOne">звоните нам: (495) 123 456 78</div>
              <div className="rs3__buttonTwo btnTwo">звоните нам: (495) 123 456 78</div>
            </div>
          </div>
        </div>
        <div className="rs3-right"><img src={img.repair_single_3_2} alt="фото"/></div>
      </div>
    </div>

  </section>
  )
}
