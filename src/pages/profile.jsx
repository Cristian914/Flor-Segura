import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Você não está logado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 p-8">
      {/* Ícone de usuário bonitinho e centralizado */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-red-500 mx-auto mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
      </svg>

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-red-500 text-center">Meu Perfil</h2>

        <p><strong>Nome:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Telefone:</strong> {user.phone || "Não informado"}</p>
        <p><strong>Endereço:</strong> {user.address || "Não informado"}</p>
        <p><strong>CPF:</strong> {user.cpf || "Não informado"}</p>

    
      </div>
    </div>
  );
};

export default Profile;
