import React from "react";

import { ReactComponent as IconeClose } from "./img/close.svg";

import "./style/modal.css";
import "./style/mainAdvantages.css"

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "model active" : "model"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <button className="modal_close" onClick={() => setActive(false)}><IconeClose /></button>
                {children}
            </div>
        </div>
    )
}
const UpMinute = ({ children }) => {
    const formatTime = (time) => {
        const [hours, minutes] = time.split(":");
        return (
            <span className="time" data-minutes={minutes}>
                {hours}
            </span>
        );
    };

    const times = children.split(" - ");
    return (
        <>
            {formatTime(times[0])} - {formatTime(times[1])}
        </>
    );
};

const MainAdvantages = ({ advantages }) => {
    return (
        <>
            <div className="container_adv">
                {advantages.map((advantage, key) => (
                    <div className="box" key={key}>
                        <div className="content">
                            <h3>{advantage.head}</h3>
                            <p>{advantage.children}</p>
                        </div>
                        <img src={advantage.image.src} alt={advantage.image.alt} />
                    </div>
                ))}
            </div>
        </>
    );
};

const PasteSliderItem = ({ slider_item }) => {
    return (
        <div className="wrapper">
            <section className="slider">
                {slider_item.map((item, key) => (
                    <div className="slider__item" key={key}>
                        <img src={item} alt="" />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Modal;
export { UpMinute, MainAdvantages, PasteSliderItem };