import React, { useState, useEffect } from "react";

const Registrocarro = () => {
  const [carroData, setCarroData] = useState({
    modelo: "",
    placa: "",
    renavam: "",
    ano: "",
    cor: "",
    documento: "",
    motoId: "", // necessário para vincular ao motorista
  });

  const [motoristaLogado, setMotoristaLogado] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setCarroData((prev) => ({ ...prev, motoId: user.id }));
        setMotoristaLogado(user);
      } catch (error) {
        console.warn("❌ Erro ao carregar dados do motorista:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarroData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!carroData.motoId) {
      alert("⚠️ Você precisa estar logado como motorista para cadastrar um carro.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/carro/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carroData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Cadastro do carro concluído!");
        window.location.href = "/";
      } else {
        alert("❌ Erro ao cadastrar o carro: " + data.message);
      }
    } catch (error) {
      console.error("❌ Erro de rede:", error);
      alert("Erro de rede ao cadastrar o carro.");
    }
  };

  if (!motoristaLogado) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-red-600">
          Você precisa estar logado como motorista para acessar esta página.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-black mb-6">
          Cadastro do carro
        </h2>

        <input
          type="text"
          name="modelo"
          placeholder="Modelo do carro"
          value={carroData.modelo}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md bg-red-100 placeholder-amber-950"
          required
        />

        <div className="flex gap-2 mb-3">
          <input
            type="text"
            name="placa"
            placeholder="Placa"
            value={carroData.placa}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded-md bg-red-100 placeholder-amber-950"
            required
          />
          <input
            type="text"
            name="renavam"
            placeholder="Renavam"
            value={carroData.renavam}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded-md bg-red-100 placeholder-amber-950"
            required
          />
        </div>

        <div className="flex gap-2 mb-3">
          <input
            type="number"
            name="ano"
            placeholder="Ano"
            value={carroData.ano}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded-md bg-red-100 placeholder-amber-950"
            required
          />
          <input
            type="text"
            name="cor"
            placeholder="Cor"
            value={carroData.cor}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded-md bg-red-100 placeholder-amber-950"
            required
          />
        </div>

        <input
          type="text"
          name="documento"
          placeholder="Documento do carro (ex: PDF ou nº)"
          value={carroData.documento}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md bg-red-100 placeholder-amber-950"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-300"
        >
          Finalizar cadastro
        </button>
      </form>
    </div>
  );
};

export default Registrocarro;
