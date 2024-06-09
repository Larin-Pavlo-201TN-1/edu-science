import React, { Component } from 'react';

import newsData from './objects/newsData';

import "./style/news.css";

export default class News extends Component {
  render() {
    return (
      <article className='news'>
        <h2>Новини</h2>
        <p className='text_section_news'>Ласкаво просимо до розділу "Новини"! Тут ви знайдете найсвіжіші та найцікавіші новини нашої навчальної лабораторії, кафедри та закладу вищої освіти. Ми ділимося досягненнями наших студентів та викладачів, анонсами подій та іншими важливими новинами. Слідкуйте за оновленнями, щоб бути в курсі всіх подій!</p>
        <section className='last_events'>
          <h3>Останні події:</h3>
          <ul class="box_news">
            {newsData.map((item, key) => (
              <li key={key}>
                <div className='news_date'>
                  <p>{item.date}</p>
                </div>
                <div className='news_body'>
                  <div className='box_img'>
                    <img src={item.image} alt="" />
                  </div>
                  <div className='news_text'>
                    <h4>{item.head}</h4>
                    <p>{item.text}</p>
                  </div></div>
              </li>
            ))}
          </ul>
        </section>
        <p className='follow_news'>Слідкуйте за новинами, щоб не пропустити жодної важливої події та завжди бути в курсі останніх досягнень нашої спільноти!</p>
      </article>
    );
  }
}