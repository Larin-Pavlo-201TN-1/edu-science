import React, { useState } from 'react';
import { Button } from "react-bootstrap";

import Modal from '../components/tool';
import { UpMinute, MainAdvantages, PasteSliderItem } from '../components/tool';

import "./style/home.css"
import "./style/slider.css"

import advantagesData from "./objects/avantagesData.jsx"
import sliderData from "./objects/sliderData.jsx"

import courses from "./img/courses.webp"
import modern_project from "./img/modern_project.webp"
import resurses from "./img/resurses.webp";

export const Home = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <>
                <section className='img_lab'>
                    <div>
                        <h1>Сторінка навчальної лабораторії</h1>
                        <Button variant="success" onClick={() => setModalActive(true)}>Години роботи</Button>
                        </div>
                </section>

                <article className='artcl_lab_introduction'>
                    <p className='lab_introduction'>Ласкаво просимо до навчальної лабораторії, яка була організована на базі кафедри у 2009 році. Основним напрямком діяльності лібораторії є створення найсучасніших умов для навчання та досліджень. Наша лабораторія оснащена найновішим обладнанням та технологіями, що дозволяє здійснювати наукові експерименти в різних галузях.</p>
                </article>

                <article className='opportunities_advantages'>
                    <hr />
                    <h2 className='advantages_title'>Головні переваги</h2>
                    <MainAdvantages advantages={advantagesData} />
                </article>

                <article className='container_offer'>
                    <h2 className='advantages_title'>Що ми пропонуємо</h2>
                    <div className='box_container_offer'>
                        <section className='section_courses'>
                            <img src={courses} alt="Програми та курси" />
                            <div className='box_courses'>
                                <h3>Освітні програми та курси</h3>
                                <p>Наша навчальна лабораторія пропонує різноманітні освітні програми та курси, що відповідають найвищим стандартам якості. Ми забезпечуємо студентів всебічними знаннями та навичками, необхідними для успішної кар'єри. Курси включають теоретичні заняття, практичні лабораторні роботи та проекти, що дозволяють застосовувати отримані знання на практиці.</p>
                            </div>
                        </section>
                        <section className='section_courses '>
                            <img src={modern_project} alt="Програми та курси" />
                            <div className='box_courses'>
                                <h3>Інноваційні проекти та дослідження</h3>
                                <p>Ми активно підтримуємо інноваційні проекти та дослідження, спрямовані на вирішення актуальних проблем суспільства. Студенти мають можливість брати участь у реальних дослідницьких проектах, працювати з сучасним обладнанням та публікувати результати своїх робіт у наукових журналах. Це дозволяє їм здобувати цінний досвід та робити свій внесок у науковий прогрес.</p>
                            </div>
                        </section>
                        <section className='section_courses'>
                            <img src={resurses} alt="Програми та курси" />
                            <div className='box_courses'>
                                <h3>Технічна підтримка та ресурси</h3>
                                <p>Наша лабораторія оснащена найсучаснішим обладнанням та програмним забезпеченням, що забезпечує високий рівень технічної підтримки для студентів та викладачів. Ми надаємо доступ до передових ресурсів, включаючи наукові бази даних, лабораторні інструменти та спеціалізоване програмне забезпечення, що сприяє ефективному навчальному процесу та дослідженням.</p>
                            </div>
                        </section>
                    </div>
                </article>

                <article className='gallery'>
                    <h2>Галерея картинок</h2>
                    <PasteSliderItem slider_item={sliderData}/>
                </article>
            </>




            <Modal active={modalActive} setActive={setModalActive}>
                <h2 className='timetable_head'>Графік роботи</h2>
                <table>
                    <thead>
                        <tr>
                            <th><div>День тижня</div></th>
                            <th><div>Години роботи</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Понеділок</td>
                            <td><UpMinute>8:00 - 18:00</UpMinute></td>
                        </tr>
                        <tr>
                            <td>Вівторок</td>
                            <td><UpMinute>8:00 - 18:00</UpMinute></td>
                        </tr>
                        <tr>
                            <td>Середа</td>
                            <td><UpMinute>8:00 - 18:00</UpMinute></td>
                        </tr>
                        <tr>
                            <td>Четверг</td>
                            <td><UpMinute>8:00 - 18:00</UpMinute></td>
                        </tr>
                        <tr>
                            <td>П'ятниця</td>
                            <td><UpMinute>8:00 - 18:00</UpMinute></td>
                        </tr>
                        <tr className='weekend'>
                            <td>Субота</td>
                            <td>Вихідний</td>
                        </tr>
                        <tr className='weekend'>
                            <td>Неділя</td>
                            <td>Вихідний</td>
                        </tr>
                    </tbody>
                </table>
            </Modal>
        </>
    );
}