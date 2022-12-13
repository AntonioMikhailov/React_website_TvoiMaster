import icon from "../../data/icons"

const serviceLink = [
  {link: '/services', text: 'Электрика'},
  {link: '/services', text: 'Сантехника'},
  {link: '/services', text: 'Установка дверей'},
  {link: '/services', text: 'Сборка мебели'},
  {link: '/services', text: 'Ремонт квартир'},
  {link: '/services', text: 'Покос травы'}
 ]
const contactsLink = [
{ link: '/', styles: 'footer-contacts', text: <>(495) 123 456 78, <br/> +7 (911) 123 456 78</>},
{ link: '/', styles: 'footer-workday', text: <>Пон - Птн: 8 - 20ч; <br/> Сб - Вск: 10 - 18ч;</>},
{ link: '/', styles: 'footer-adress', text: <>Москва, ул. Серышева,43</>},
{ link: '/', styles: 'footer-email', text: <>tvoidom@tvoidom.ru</>},

]

const UpitemContacts = [
{link: 'tel:8800123456' , icon : icon.home_sec_9_1, text: <>Телефон:<br/> <span>(495) 123 456 78 </span> </>  },
{link: 'https://goo.gl/maps/RQCgyH5yhXWsuk1D7' , icon : icon.home_sec_9_2, text: <>Адрес: <br/> <span>Москва, ул. Серышева,43</span></>  },
{link: 'nvoidom@tvoidom.ru' , icon : icon.home_sec_9_3, text: <>E-mail:<br/> <span>nvoidom@tvoidom.ru</span></>  },
]

export {serviceLink, contactsLink, UpitemContacts}