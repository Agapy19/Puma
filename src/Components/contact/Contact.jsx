import React, { useState } from 'react';
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css'; 
import FooterBottom from '../footer/FooterBottom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    return message.length >= 20;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate inputs in real-time
    if (name === 'email') {
      if (!validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Adresse email invalide.'
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: ''
        }));
      }
    }

    if (name === 'message') {
      if (!validateMessage(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          message: 'Le message doit comporter au moins 20 caractères.'
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          message: ''
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form before submitting
    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Adresse email invalide.'
      }));
      return;
    }

    if (!validateMessage(formData.message)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Le message doit comporter au moins 20 caractères.'
      }));
      return;
    }

    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      time: '',
      date: '',
      message: ''
    });
    setErrors({
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Addresse:</h2>
          <p><FaMapMarkerAlt /> 138 Atlantis Ln Kingsport Illinois 121164</p>
          <h2>Téléphones:</h2>
          <p><FaPhone /> 800-2345-6789</p>
          <p><FaFax /> 800-2345-6789</p>
          <h2>E-mail:</h2>
          <p><FaEnvelope /> mail@demolink.org</p>
          <a href="vcard.vcf" download>Download information as: vCard</a>
        </div>
        <div className="contact-form">
          <h2>Informations diverses:</h2>
          <p>Envoyez-nous un e-mail pour toute question ou demande de renseignements ou utilisez nos coordonnées.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-container">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Nom complet" 
                  value={formData.name} 
                  onChange={handleChange} 
                />
              </div>
              <div className="input-container">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="input-container">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Téléphone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
            </div>
            <div className="form-group">
              <input type="time" name="time" placeholder="Time" value={formData.time} onChange={handleChange} />
              <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="input-container">
              <textarea 
                name="message" 
                placeholder="Message" 
                value={formData.message} 
                onChange={handleChange} 
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <div className="form-buttons">
              <button type="submit">Envoyer</button>
              <button type="button" onClick={handleClear}>Supprimer</button>
            </div>
          </form>
        </div>
      </div>
      <FooterBottom/>
    </div>
  );
};

export default Contact;
