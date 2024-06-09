import React, { Component } from 'react';

import equipmentData from "./objects/equipmentData.jsx";

import "./style/equipment.css";

export default class Equipment extends Component {
    toggleTitleVisibility = (event, visible) => {
        const target = event.currentTarget.nextElementSibling;
        if (visible) {
            target.style.opacity = '0';
            target.style.visibility = 'hidden';
        } else {
            target.style.opacity = '1';
            target.style.visibility = 'visible';
        }
    }

    render() {
        return (
            <>
                <article className='equipment_header'>
                    <h2>Обладання лабораторії</h2>
                    <p>Наша навчальна лабораторія оснащена найсучаснішим обладнанням, що забезпечує високий рівень навчального процесу та наукових досліджень. Ми постійно оновлюємо і вдосконалюємо нашу матеріально-технічну базу, щоб відповідати найвищим стандартам і вимогам сьогодення.</p>
                </article>
                <article>
                    <section className='box_equipment_img'>
                        <h3>Наукове обладнання</h3>
                        <div className='box_cart'>
                            {equipmentData.map((item, key) => (
                                <div className='cart' key={key}>
                                    <div
                                        className='cart_center'
                                        onMouseEnter={(e) => this.toggleTitleVisibility(e, true)}
                                        onMouseLeave={(e) => this.toggleTitleVisibility(e, false)}
                                    >
                                        <div className="cart_img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="cart_text">
                                            <h4>{item.head}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                    <h4 className='target'>{item.head}</h4>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className='advatagesUsing'>
                        <h3>Переваги використання</h3>
                        <ul class="older">
                            <li><p><span>Практичні навички:</span> Студенти отримують можливість працювати з найсучаснішим обладнанням, що дозволяє їм здобувати практичні навички, необхідні для майбутньої професійної діяльності.</p></li>
                            <li><p><span>Дослідження та інновації:</span> Високотехнологічне обладнання сприяє проведенню передових досліджень та розробці інноваційних проектів.</p></li>
                            <li><p><span>Професійний розвиток:</span> Робота з сучасними приладами допомагає студентам адаптуватися до вимог ринку праці та підвищити свою конкурентоспроможність.</p></li>
                        </ul>
                    </section>
                </article>
            </>
        );
    }
}
