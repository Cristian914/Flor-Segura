import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://al-car-back-end.onrender.com/api/contacts", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      alert(
        `Mensagem cadastrada com sucesso!! Nome: ${formData.name} Email: ${formData.email}`
      );
      setFormData({ name: "", email: "", message: "" });
      window.location.href = "/";
    } catch (error) {
      if (error.response) {
        alert("Erro ao cadastrar usuário");
      } else {
        alert("Erro ao conectar ao servidor");
      }
    }
  };

  return (
    <div className="min-h-screen bg-red-300 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-10">
        <h2 className="text-4xl font-extrabold text-center text-[#7B3E00] mb-6 uppercase border-b-4 border-[#7B3E00] pb-3">
          Entre em Contato
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-[#7B3E00] font-semibold">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
              className="w-full rounded-md border border-[#B98A48] p-3 text-[#7B3E00] placeholder-[#B98A48] focus:outline-none focus:ring-2 focus:ring-[#B98A48]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-[#7B3E00] font-semibold">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu E-mail"
              required
              className="w-full rounded-md border border-[#B98A48] p-3 text-[#7B3E00] placeholder-[#B98A48] focus:outline-none focus:ring-2 focus:ring-[#B98A48]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-[#7B3E00] font-semibold">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Digite sua Mensagem..."
              required
              className="w-full rounded-md border border-[#B98A48] p-3 text-[#7B3E00] placeholder-[#B98A48] focus:outline-none focus:ring-2 focus:ring-[#B98A48]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-red-200 text-[#B98A48] font-bold uppercase hover:bg-red-300 transition-colors duration-300"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
