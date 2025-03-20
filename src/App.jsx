import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import beautySalonImage from './assets/beautySalon.jpg';
import hairStudioImage from './assets/hairStudio.jpeg';
import massageServiceImage from './assets/massageService.jpg';
import serviceBeautyImage from './assets/serviceBeauty.jpg';

// import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Импортируем стили для PDF-Viewer
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css'; // Для стилей
// import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Если используете layout

const pdfUrl = './assets/pos-smart-features.pdf'; // Make sure the PDF path is correct

function App() {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const workerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };



  // Функция для открытия и закрытия pop-up
  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

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
          <h1>Умная POS-система, которая упрощает продажи и учет</h1>
          <p>Удобный сервис для записи, продвижения и управления салоном красоты. Оптимизируйте бизнес без лишних затрат!</p>
          
          <a href="#form">
            <button className="cta-button">Подать заявку</button>
          </a>

          {/* <a href="#form">
            <button className="btn">Подать заявку</button>
          </a> */}
          
        </div>
      </section>

      {/* <section className="portfolio">
        <div className="container">
          <a href="/aawra-landing/assets/pos-smart-features.pdf" download className="popup-button">
            Скачать презентацию
          </a>
        </div>
      </section> */}


      <section className="service-description">
        <div className="container">
          <h2 className="section-title">Умная система записи и управления салоном красоты</h2>
          
          <div className="service-info">
            <h3>Что это за сервис?</h3>
            <p>
              Наш сервис — это интеллектуальная система бронирования и управления расписанием 
              для салонов красоты, мастеров и клиентов. Мы интегрируем возможности AI и машинного 
              обучения, чтобы автоматизировать запись, напоминания, аналитику и управление клиентами.
            </p>
          </div>

          <div className="service-info">
            <h3>Как это работает?</h3>
            <ul className="service-list">
              <li><strong>Онлайн-запись</strong> – клиенты могут записываться через сайт или приложение в удобное время.</li>
              <li><strong>Интеграция с Google и Apple Calendar</strong> – система автоматически добавляет и обновляет записи.</li>
              <li><strong>Умное управление расписанием</strong> – AI анализирует загруженность мастеров и предлагает оптимальные слоты.</li>
              <li><strong>Автоматические напоминания</strong> – push, email и SMS-уведомления о предстоящем визите.</li>
              <li><strong>Аналитика и отчёты</strong> – отслеживание популярности услуг, частоты посещений и эффективности мастеров.</li>
              <li><strong>Гибкое управление клиентами</strong> – CRM с историей визитов, предпочтениями и программами лояльности.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Features Section */}

      <section className="features">
        <div className="container">
          <h2 className="advantages-title">Что делает сервис уникальным?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="icon">🤖</div>
              <h3>Автоматизация рутины</h3>
              <p>Экономьте время на администрирование – система делает всё за вас.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🧠</div>
              <h3>Искусственный интеллект</h3>
              <p>AI оптимизирует загрузку мастеров и предлагает удобные слоты.</p>
            </div>
            <div className="feature-card">
              <div className="icon">💰</div>
              <h3>Увеличение прибыли</h3>
              <p>Снижение отмен записей и повышение лояльности клиентов.</p>
            </div>
            <div className="feature-card">
              <div className="icon">✨</div>
              <h3>Простота использования</h3>
              <p>Интуитивно понятный интерфейс и интеграция с вашими любимыми инструментами.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <h2 className="advantages-title">Тарифные планы для сервиса (Тестовый режим)</h2>
          <p>⚠️ Обратите внимание: пока сервис работает в тестовом режиме, цены снижены. После полного запуска они увеличатся на 70% <b>для новых клиентов.</b></p>
          <div className="pricing-table">
            <div className="pricing-plan pro">
              <h3>Базовый</h3>
              <p>Идеально для старта вашего салона</p>
              <p className="price">9 €/месяц</p>
              <a href="#form">
                <button className="btn">Подать заявку</button>
                </a>
              <p className="credit-note">Без привязки карты</p>
              <ul>
                <li>Форма онлайн-записи</li>
                <li>Поддержка купонов и промокодов</li>
                <li>Базовая поддержка</li>
              </ul>
            </div>
            <div className="pricing-plan pro">
              <h3>Оптимальный</h3>
              <p>Баланс цены и возможностей</p>
              <p className="price">19 €/месяц</p>
              <a href="#form">
                <button className="btn">Подать заявку</button>
                </a>
              <p className="credit-note">Без привязки карты</p>
              <ul>
                <li>Готовый сайт для вашего салона</li>
                <li>Роли и права доступа сотрудников</li>
                <li>Маркетинговая поддержка</li>
              </ul>
            </div>
            <div className="pricing-plan enterprise">
              <h3>Премиум</h3>
              <p>Для полного набора возможностей</p>
              <p className="price">39 €/месяц</p>
              <a href="#form">
                <button className="btn">Подать заявку</button>
              </a>
            
              <p className="credit-note">Без привязки карты</p>
              <ul>
                <li>Уникальный дизайн и брендинг</li>
                <li>Маркетинговые инструменты</li>
                <li>Поддержка 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price comparisson */}
      <section className="compare">
        <div className="container">
        <h2 className="compare-title">Тарифы</h2>
        <div className="compare-table">
          <div className="compare-plan">
            <h3>Базовый</h3>
            <p className="price">9 €/месяц</p>
            <ul>
              <li>✅ Онлайн-запись клиентов</li>
              <li>✅ Календарь записей</li>
              <li>✅ Управление расписанием мастеров</li>
              <li>❌ Авто-напоминания (SMS, email, push)</li>
              <li>❌ Аналитика клиентов</li>
              <li>❌ Программы лояльности</li>
              <li>❌ Авто-поздравления с ДР</li>
              <li>❌ CRM: база клиентов</li>
              <li>✅ Профили мастеров</li>
              <li>❌ Статистика мастеров</li>
              <li>❌ Автоматический расчет стоимости услуг</li>
              <li>✅ Поддержка купонов и промокодов</li>
              <li>❌ Отчеты и аналитика доходов</li>
              <li>❌ Google/Apple Calendar синхронизация</li>
              <li>❌ WhatsApp/Telegram уведомления</li>
              <li>❌ Контроль расходов и прибыли</li>
              <li>❌ Учёт рабочего времени мастеров</li>
              <li>❌ Роли и права доступа сотрудников</li>
              <li>❌ Приоритетная поддержка 24/7</li>
              <li>❌ Индивидуальная настройка системы</li>
              <li>❌ Персональный менеджер</li>
            </ul>
          </div>

          <div className="compare-plan">
            <h3>Оптимальный</h3>
            <p className="price">19 €/месяц</p>
            <ul>
              <li>✅ Онлайн-запись клиентов</li>
              <li>✅ Календарь записей</li>
              <li>✅ Управление расписанием мастеров</li>
              <li>✅ Авто-напоминания (SMS, email, push)</li>
              <li>❌ Аналитика клиентов</li>
              <li>✅ Программы лояльности</li>
              <li>✅ Авто-поздравления с ДР</li>
              <li>✅ CRM: база клиентов</li>
              <li>✅ Профили мастеров</li>
              <li>✅ Статистика мастеров</li>
              <li>❌ Автоматический расчет стоимости услуг</li>
              <li>✅ Поддержка купонов и промокодов</li>
              <li>❌ Отчеты и аналитика доходов</li>
              <li>✅ Google/Apple Calendar синхронизация</li>
              <li>❌ WhatsApp/Telegram уведомления</li>
              <li>❌ Контроль расходов и прибыли</li>
              <li>✅ Учёт рабочего времени мастеров</li>
              <li>✅ Роли и права доступа сотрудников</li>
              <li>❌ Приоритетная поддержка 24/7</li>
              <li>❌ Индивидуальная настройка системы</li>
              <li>❌ Персональный менеджер</li>
            </ul>
          </div>

          <div className="compare-plan">
            <h3>Премиум</h3>
            <p className="price">39 €/месяц</p>
            <ul>
              <li>✅ Онлайн-запись клиентов</li>
              <li>✅ Календарь записей</li>
              <li>✅ Управление расписанием мастеров</li>
              <li>✅ Авто-напоминания (SMS, email, push)</li>
              <li>✅ Аналитика клиентов</li>
              <li>✅ Программы лояльности</li>
              <li>✅ Авто-поздравления с ДР</li>
              <li>✅ CRM: база клиентов</li>
              <li>✅ Профили мастеров</li>
              <li>✅ Статистика мастеров</li>
              <li>✅ Автоматический расчет стоимости услуг</li>
              <li>✅ Поддержка купонов и промокодов</li>
              <li>✅ Отчеты и аналитика доходов</li>
              <li>✅ Google/Apple Calendar синхронизация</li>
              <li>✅ WhatsApp/Telegram уведомления</li>
              <li>✅ Контроль расходов и прибыли</li>
              <li>✅ Учёт рабочего времени мастеров</li>
              <li>✅ Роли и права доступа сотрудников</li>
              <li>✅ Приоритетная поддержка 24/7</li>
              <li>✅ Индивидуальная настройка системы</li>
              <li>✅ Персональный менеджер</li>
            </ul>
          </div>
        </div>
        </div>
      </section>



      {/* Service Benefits */}
      <section className="features">
        <div className="container">
        <h2 className="advantages-title">Выгоды</h2>
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


      {/* PDF Presentation component */}
      <section className="testimonials">
        <div className="container">
          <h2 className="advantages-title">Презентация сервиса</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>Описание всех возможностей системы</p>
              <h4>POS система для салонов красоты</h4>

              <section className="portfolio">
                <div className="container">
                  <a href="/aawra-landing/assets/pos-smart-features.pdf" download className="popup-button">
                    Скачать презентацию
                  </a>
                </div>
              </section>

              {/* <section className="portfolio">
                <div className="container">
                <a href="aawra-landing/assets/pos-smart-features.pdf" download className="popup-button">
                  Скачать презентацию
                </a> */}

                  {/* <a href="./assets/pos-smart-features.pdf" download className="popup-button"> */}
                  {/* <a href={pdfUrl} download className="popup-button"> */}
                    {/* Скачать презентацию */}
                  {/* </a> */}
                {/* </div> */}
              {/* </section> */}

              {/* Button to trigger the pop-up */}
              {/* <section className="portfolio">
                <div className="container">
                  <button className="popup-button" onClick={togglePopup}>
                    Скачать презентацию
                  </button>
                </div>
              </section> */}

              {/* Popup with PDF */}
              {isPopupOpen && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-button" onClick={togglePopup}>
                      ×
                    </button>

                    {/* Using react-pdf viewer to render the PDF */}
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                      <div style={{ height: '80vh', overflowY: 'auto' }}>
                        <Viewer fileUrl={pdfUrl} />
                      </div>
                    </Worker>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      
      
      {/* Contact Section */}
       <section id="form" className="contact">
        <div className="container">
          <h2>Начните уже сегодня! Оставьте заявку.</h2>
          <p style={{ color: 'black' }}>Оптимизируйте свой салон и привлеките больше клиентов с помощью интеллектуальной системы!</p>
          <form onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Ваше имя" required />
            <input type="email" name="user_email" placeholder="Ваш email" required />
            <textarea name="message" placeholder="Ваш запрос"></textarea>
            <p className ="contactParagraph">В запросе укажите пакет который вас интересует:  Базовый, Оптимальный или Премиум</p>
            <button type="submit">Отправить</button>
          </form>
          {formStatus && <p>{formStatus}</p>}
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <h2 className="contact-title">Контактные данные</h2>
          <div className="contact-cards">
            <div className="contact-card">
              <a href="mailto:dmitri.gornakov@gmail.com" className="contact-link">
                <div className="icon">📧</div>
                <h3>Email</h3>
                <p>dmitri.gornakov@gmail.com</p>
              </a>
            </div>
            <div className="contact-card">
              <a href="https://t.me/visual_sense" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="icon">💬</div>
                <h3>Telegram</h3>
                <p>@visual_sense</p>
              </a>
            </div>
            <div className="contact-card">
              <a href="tel:+37258976398" className="contact-link">
                <div className="icon">📱</div>
                <h3>Телефон</h3>
                <p>+372 5897 6398</p>
              </a>
            </div>
            <div className="contact-card">
              <a href="https://wa.me/+37258976398" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="icon">☎️</div>
                <h3>WhatsApp</h3>
                <p>+372 5897 6398</p>
              </a>
            </div>
          </div>
        </div>
      </section>



    </div>
    
  );
}

export default App;
