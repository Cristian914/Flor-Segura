import React, { useEffect, useState } from 'react';

const PerfilMotorista = () => {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/moto/1/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        const data = await response.json();
        setPerfil(data);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    };

    fetchPerfil();
  }, []);

  if (!perfil) return <p style={styles.loading}>Carregando...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Meu Perfil</h2>

      <p><strong>Nome:</strong> <span style={styles.text}>{perfil.name}</span></p>
      <p><strong>Email:</strong> <span style={styles.text}>{perfil.email}</span></p>
      <p><strong>Telefone:</strong> <span style={styles.text}>{perfil.phone}</span></p>
      <p><strong>Endereço:</strong> <span style={styles.text}>{perfil.address}</span></p>
      <p><strong>CPF:</strong> <span style={styles.text}>{perfil.cpf}</span></p>

      {perfil.carros && perfil.carros.length > 0 ? (
        <div style={styles.carroContainer}>
          <h3 style={styles.subTitle}>Meus Carros</h3>
          {perfil.carros.map((carro, index) => (
            <div key={index} style={styles.carroCard}>
              <p><strong>Modelo:</strong> <span style={styles.text}>{carro.modelo}</span></p>
              <p><strong>Placa:</strong> <span style={styles.text}>{carro.placa}</span></p>
              <p><strong>Ano:</strong> <span style={styles.text}>{carro.ano}</span></p>
              <p><strong>Cor:</strong> <span style={styles.text}>{carro.cor}</span></p>
              <p><strong>Renavam:</strong> <span style={styles.text}>{carro.renavam}</span></p>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noCarro}>Você ainda não cadastrou um carro.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  title: {
    color: '#d93025',
    borderBottom: '2px solid #d93025',
    paddingBottom: '8px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subTitle: {
    color: '#d93025',
    marginTop: '25px',
    marginBottom: '12px',
    fontSize: '20px',
  },
  text: {
    color: '#555',
  },
  noCarro: {
    fontStyle: 'italic',
    color: '#999',
    marginTop: '15px',
  },
  loading: {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '18px',
    color: '#d93025',
  },
  carroContainer: {
    backgroundColor: '#f9f9f9',
    padding: '15px 20px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    marginTop: '20px'
  },
  carroCard: {
    marginBottom: '15px',
    paddingBottom: '10px',
    borderBottom: '1px solid #ddd',
  }
};

export default PerfilMotorista;
