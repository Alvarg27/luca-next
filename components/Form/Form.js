import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telefono: '',
    email: '',
    servicio: '',
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

    setIsSent(true);

    /* emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrors({});
          setIsSent(true);
          // Reset the form data after successful submission
          setFormData({
            name: '',
            telefono: '',
            email: '',
            servicio: '',
          });
        },
        (error) => {
          console.log(error.text);
        }
      ); */
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center font-monument">
        Contáctanos
      </h2>

      {isSent ? (
        <div className="mb-4 p-4 border border-green-500 bg-green-100 text-base text-green-800 rounded flex items-center">
          <svg
            className="h-6 w-6 mr-2 text-green-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          <div>
            <p className="font-bold">¡Gracias por tu mensaje!</p>
            <p>Nos pondremos en contacto contigo en breve.</p>
          </div>
        </div>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-100 shadow-xl rounded px-12 pt-6 pb-8 mb-4 border border-teal-500"
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
              Nombre y Apellido<span className="text-red-500">*</span>
              :
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
              ¿Qué servicio deseas
              <span className="text-red-500">*</span>?
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="servicio"
              type="text"
              name="servicio"
              value={formData.servicio}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-teal-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
