import React from "react";
import { FaHome, FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

import "./style/footer.css"

const Modal = () => {
    return (
        <footer className="bg-dark">
            <div className="container bg-dark text-center">
                <div className="row py-4 text-white">
                    <div className="col-md-8 col-sm-12">
                        <h3 className="text-warning">Де ми знаходимось</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8702.548237313622!2d34.56619314308491!3d49.57354913827513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f64cd0cbd85%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1sru!2sua!4v1717692725246!5m2!1sru!2sua" width="600" height="450" loading="lazy" title="Google Maps Location"></iframe>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3 className="text-warning mt-3">Корисні посилання</h3>
                        <div className="box_link d-flex justify-content-center align-items-center d-flex flex-column">
                            <div className="mt-3">
                                <FaHome className="me-2" size="20px" />
                                <a href="https://maps.app.goo.gl/msRRszJmLHsyqs3c9">Першотравневий проспект, 24, Полтава, Полтавська область, 36000</a>
                            </div>
                            <div className="mt-3">
                                <FaPhoneAlt className="me-2" size="20px" />
                                <a href="tel:+380675323964">+38 (067) 532-39-64</a>
                            </div>
                            <div className="mt-3">
                                <FaEnvelope className="me-2" size="20px" />
                                <a href="mailto:vstup@nupp.edu.ua">vstup@nupp.edu.ua</a>
                            </div>
                            <div className=" row mt-3  justify-content-between align-items-center box-link-img">
                                <a className="col-3" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube size="30px" /></a>
                                <a className="col-3" href="https://www.facebook.com/?locale=uk_UA" target="_blank" rel="noreferrer"><FaInstagram size="30px" /></a>
                                <a className="col-3" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaFacebook size="30px" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Modal;