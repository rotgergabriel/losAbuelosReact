import React from 'react';
import '../assets/styles/components/Contact.scss';

const Contact = () => (
    <section id="contact" className="contact">
            <h2 className="title">Contacto</h2>
                <div className="row">
                    <form method="POST" className="col s12" netlify>
                        <div className="row">
                            <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label for="first_name">Nombre</label>
                            </div>
                            <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Apellido</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label for="textarea1">Consulta</label>
                        </div>
                        <button className="btn waves-effect waves-light col s12" type="submit" name="action">Enviar</button>
                    </div>
                </form>
            </div>
    </section>
);

export default Contact;