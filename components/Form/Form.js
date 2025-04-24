import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const Form = () => {
  const router = useRouter();
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telefono: '',
    email: '',
    servicio: '',
    empresa: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate all fields
    const fieldsToValidate = [
      'name',
      'telefono',
      'email',
      'servicio',
      'empresa',
    ];
    const newErrors = {};

    fieldsToValidate.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Debug log to check form data before sending
    console.log("Sending form data:", formData);
    
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setErrors({});
          setIsSent(true);
          // Reset the form data after successful submission
          setFormData({
            name: '',
            telefono: '',
            email: '',
            servicio: '',
          });
          router.push(`/contacto`);
        },
        (error) => {
          console.log("Email send error:", error.text);
          // Don't navigate away if there's an error
        }
      );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center font-monument">
        Contáctanos
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-100 shadow-xl rounded px-12 pt-6 pb-8 mb-4"
      >
        {Object.keys(errors).length > 0 && (
          <div className="mb-4 text-red-500">
            {Object.keys(errors).map((key) => (
              <div key={key}>{errors[key]}</div>
            ))}
          </div>
        )}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre y Apellido<span className="text-red-500">*</span>:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="telefono"
          >
            Número de teléfono
            <span className="text-red-500">*</span>:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email<span className="text-red-500">*</span>:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="servicio"
          >
            ¿Qué servicio deseas?<span className="text-red-500">*</span>
          </label>
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleInputChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Selecciona un servicio</option>
            <option value="experiences">Experiences</option>
            <option value="event-planning">Event planning</option>
            <option value="regalos">Promocionales</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="empresa"
          >
            Empresa<span className="text-red-500">*</span>:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="empresa"
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-teal-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;