import React from 'react'
import icon from '../../../data/icons'
import img from '../../../data/images'

export default function S1Repair() {

  const s1List = [
    {icon: icon.repair_sec2_1, text: <>Бесплатный выезд замерщика через 15–60 минут после получения заявки. Позвоните
      нам или воспользуйтесь формой на сайте, и в кратчайший срок специалист будет у вас.</>},
    {icon: icon.repair_sec2_2, text: <>Любой ремонт квартир в Москве и МО. От установки дверей и пластиковых окон и
      небольшого косметического обновления до капитальных работ с перепланировкой и заменой труб. Работаем со
      всеми отделочными материалами. Предоставляем сервис в формате одного окна.
      Контроль качества на каждом этапе. Вы оплачиваете работы после их приема.</>},
    {icon: icon.repair_sec2_3, text: <>Лучшие и самые ответственные мастера. Все сотрудники компании квалифицированы,
      всегда вежливы и позитивны, работают чисто и предоставляют профессиональные консультации.
      Простая схема сотрудничества, минимум хлопот для заказчика. Вы оставляете нам заявку и обсуждаете фронт
      работ с мастером, который к вам приедет.</>},
    {icon: icon.repair_sec2_4, text: <>Лояльные тарифы. Ремонт квартир в Москве недорого и профессионально — это к нам.
      У нас один из самых доступных прайсов в столице и МО, мы делаем скидки при быстром заказе услуг и
      устанавливаем общую цену строго по объему требуемых работ.</>},
  ]
  return (
    <section className="repair-1">
    <div className="container">
      <h1 className="r1-title">Ремонт и отделка <br/> квартир в Москве</h1>
      <h3 className="r1-subTitle">все виды ремонта по приятным ценам</h3>
      <h4 className="r1-text">Ремонт и отделка квартир — это словно взмах волшебной палочки. Вы загадываете желание об
        идеальном ремонте квартиры своей мечты, и оно сбывается. Работа мастеров, похожа на волшебство, только вместо
        волшебных палочек у них валики, мастерки и перфораторы. Хотите, чтобы ремонтные работы оставили только
        приятные воспоминания, тогда закажите отделку под ключ.
        <p> Оставьте хлопоты профессионалам. Пока строители возьмут на себя заботы по благоустройству, займитесь
          чем-то приятным. Например, подумайте, на какой стене лучше повесить новую картину. </p>
      </h4>
      <div className="r1-image"><img src={img.repair_sec_1} alt="фото"/></div>
      <h2 className="r1-list__title">Наши отличия
      </h2>
      <ul className="r1-list__row">
        {
          s1List.map((item, i)=> { 
           return ( 
            <li key={i} className="r1-list__item">
            <div className="r1-list__left"><img src={item.icon} alt="icon"/></div>
            <div className="r1-list__right">{item.text}</div>
          </li>
            )})  
        }

       
      </ul>
    </div>

  </section>
  )
}
