import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import beautySalonImage from './assets/beautySalon.jpg';


function App() {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qqu3vd9', // Замените на ваш service_id
      'template_3w6nbgc', // Замените на ваш template_id
      e.target,
      'OOkYd6kaV2PnokJfd' // Замените на ваш user_id
    )
    .then(
      () => setFormStatus('Ваше сообщение отправлено!'),
      () => setFormStatus('Ошибка при отправке сообщения.')
    );

    e.target.reset();
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Сделайте ваш салон доступным онлайн!</h1>
          <p>Удобный сервис для записи, продвижения и управления салоном красоты.</p>
          
          <a href="#form">
            <button className="cta-button">Подать заявку</button>
          </a>

          {/* <a href="#form">
            <button className="btn">Подать заявку</button>
          </a> */}
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
        <h2 class="advantages-title">Наши преимущества</h2>
          <div className="feature-cards">
            <div className="feature-card">
              {/* <img src="/icons/time-saving.svg" alt="Экономия времени" /> */}
              {/* <FaClock size={40} color="#333" /> */}
              <div className="icon">⌛</div>
              <h3>Экономия времени</h3>
              <p>Ваши клиенты записываются без лишних звонков.</p>
            </div>
            <div className="feature-card">
              {/* <img src="/icons/clients.svg" alt="Привлечение клиентов" /> */}
              {/* <FaUsers size={40} color="#333" /> */}
              <div className="icon">💼</div>
              <h3>Привлечение клиентов</h3>
              <p>Система помогает находить новых клиентов легко.</p>
            </div>
            <div className="feature-card">
              {/* <img src="/icons/analytics.svg" alt="Аналитика" /> */}
              {/* <FaChartLine size={40} color="#333" /> */}
              <div className="icon">📊</div>
              <h3>Аналитика</h3>
              <p>Отслеживайте рост вашего бизнеса в реальном времени.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <h2 className="advantages-title">Тарифы</h2>
          <div className="pricing-table">
            <div className="pricing-plan pro">
              <h3>Стартап</h3>
              <p>Идеально для старта вашего салона</p>
              <p className="price">10 €/мес</p>
              <a href="#form">
                <button className="btn">Подать заявку</button>
                </a>
              <p className="credit-note">Без привязки карты</p>
              <ul>
                <li>Форма онлайн-записи</li>
                <li>Напоминания клиентам</li>
                <li>Базовая поддержка</li>
              </ul>
            </div>
            <div className="pricing-plan pro">
              <h3>Про</h3>
              <p>Баланс цены и возможностей</p>
              <p className="price">50 €/мес</p>
              <a href="#form">
                <button className="btn">Подать заявку</button>
                </a>
              <p className="credit-note">Без привязки карты</p>
              <ul>
                <li>Готовый сайт для вашего салона</li>
                <li>Инструменты для аналитики</li>
                <li>Маркетинговая поддержка</li>
              </ul>
            </div>
            <div className="pricing-plan enterprise">
              <h3>Премиум</h3>
              <p>Для полного набора возможностей</p>
              <p className="price">150 €/мес</p>
              <a href="#form">
                <button className="btn">Подать заявку</button>
              </a>
            
              <p className="credit-note">Без привязки карты</p>
              <ul>
                <li>Уникальный дизайн сайта и брендинг</li>
                <li>Маркетинговые инструменты</li>
                <li>Поддержка 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      {/* <section className="testimonials">
        <div className="container">
          <h2 className="advantages-title">Примеры наших работ</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>“Сервис помог нам привлечь новых клиентов и упростить запись!”</p>
              <h4>Анна, салон "Красота и уют"</h4>
            </div>
            <div className="testimonial-card">
              <p>“Простое управление записью и аналитика – то, что нам нужно.”</p>
              <h4>Ирина, салон "Шарм"</h4>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Contact Section */}
       <section id="form" className="contact">
        <div className="container">
          <h2>Оставьте заявку</h2>
          <form onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Ваше имя" required />
            <input type="email" name="user_email" placeholder="Ваш email" required />
            <textarea name="message" placeholder="Ваш запрос"></textarea>
            <button type="submit">Отправить</button>
          </form>
          {formStatus && <p>{formStatus}</p>}
        </div>
      </section>

      {/* Кнопка для показа popup */}
      {/* <section className="portfolio">
        <div className="container">
          <h2>Примеры наших работ</h2>
          <button className="popup-button" onClick={togglePopup}>
            Посмотреть работу
          </button>
        </div>
      </section> */}

      {/* Popup с изображением */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>
              ×
            </button>
            <img src={beautySalonImage} alt="Пример работы" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
