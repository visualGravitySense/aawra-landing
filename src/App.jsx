import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

function App() {

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
            <button className="cta-button">Попробовать бесплатно</button>
          </a>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Наши преимущества</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <img src="/icons/time-saving.svg" alt="Экономия времени" />
              <h3>Экономия времени</h3>
              <p>Ваши клиенты записываются без лишних звонков.</p>
            </div>
            <div className="feature-card">
              <img src="/icons/clients.svg" alt="Привлечение клиентов" />
              <h3>Привлечение клиентов</h3>
              <p>Система помогает находить новых клиентов легко.</p>
            </div>
            <div className="feature-card">
              <img src="/icons/analytics.svg" alt="Аналитика" />
              <h3>Аналитика</h3>
              <p>Отслеживайте рост вашего бизнеса в реальном времени.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <h2>Тарифы</h2>
          <div className="pricing-table">
            <div className="pricing-plan">
              <h3>Бесплатный</h3>
              <p>Для старта вашего салона</p>
              <ul>
                <li>Онлайн-запись</li>
                <li>Напоминания клиентам</li>
              </ul>
              <button>Попробовать</button>
            </div>
            <div className="pricing-plan premium">
              <h3>Премиум</h3>
              <p>Все функции без ограничений</p>
              <ul>
                <li>Онлайн-запись</li>
                <li>Напоминания клиентам</li>
                <li>Аналитика и отчёты</li>
                <li>Маркетинговые инструменты</li>
              </ul>
              <button>Выбрать</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Отзывы клиентов</h2>
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
      </section>
      
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
    </div>
  );
}

export default App;
