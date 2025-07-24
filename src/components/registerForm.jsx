import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    celular: "",
    cpf: "",
    endereco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Cadastro concluído!");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-amber-900 mb-6">
          Cadastro de passageiro
        </h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2  rounded-md bg-red-100 placeholder-amber-950"
          required
        />

        <div className="flex gap-2 mb-3">
          <input
            type="tel"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleChange}
            className="w-1/2 px-4 py-2  rounded-md bg-red-100 placeholder-amber-950"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-1/2 px-4 py-2  rounded-md bg-red-100 placeholder-amber-950 "
            required
          />
        </div>

        <div className="flex gap-2 mb-3">
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={formData.endereco}
            onChange={handleChange}
            className="w-1/2 px-4 py-2  rounded-md bg-red-100 placeholder-amber-950"
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            className="w-1/2 px-4 py-2  rounded-md bg-red-100 placeholder-amber-950"
            required
          />
        </div>

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2  rounded-md bg-red-100 placeholder-amber-950"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-300"
        >
          Concluir cadastro
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
