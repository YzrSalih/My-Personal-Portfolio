import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './components/Contact';
import './index.css'; // Tailwind stilleri için gerekli

// Eğer sayfada "contact-root" id'li bir element varsa, Contact bileşenini oraya göm.
const contactRoot = document.getElementById('contact-root');
if (contactRoot) {
  ReactDOM.createRoot(contactRoot).render(
    <React.StrictMode>
      <Contact />
    </React.StrictMode>
  );
}
