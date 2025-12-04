import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";
import Loading from "../components/Loading";

export default function PublicoNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [nota, setNota] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [loading, setLoading] = useState(true);
  const [enviandoComentario, setEnviandoComentario] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        setErro("");
        
        // PEGAR A NOTA
        const resNota = await fetch(`http://localhost:3001/publications/${id}`);
        if (!resNota.ok) {
          throw new Error('Publicação não encontrada');
        }
        const dataNota = await resNota.json();
        setNota(dataNota);

        // PEGAR COMENTÁRIOS
        const resComentarios = await fetch(`http://localhost:3001/api/comments/${id}`);
        if (resComentarios.ok) {
          const dataComentarios = await resComentarios.json();
          setComentarios(Array.isArray(dataComentarios) ? dataComentarios : []);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setErro("Erro ao carregar a publicação. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarDados();
    }
  }, [id]);

  async function enviarComentario() {
    const token = localStorage.getItem("token");
    
    if (!token) {
      alert("Você precisa estar logada para comentar.");
      navigate("/login");
      return;
    }

    if (!novoComentario.trim()) {
      alert("Por favor, escreva um comentário antes de enviar.");
      return;
    }

    try {
      setEnviandoComentario(true);
      setErro("");
      
      const response = await fetch(`http://localhost:3001/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          note_id: parseInt(id),
          comment: novoComentario.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Erro completo do servidor:", {
          status: response.status,
          statusText: response.statusText,
          data: data
        });
        
        if (response.status === 401) {
          alert("Sua sessão expirou. Faça login novamente.");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
          return;
        }
        
        if (response.status === 500) {
          alert("Erro interno do servidor. Verifique o console do backend.");
        }
        
        throw new Error(data.error || data.message || `Erro ${response.status}: ${response.statusText}`);
      }

      // Criar objeto do comentário com os dados do usuário atual
      const novoComentarioObj = {
        id: data.id || Date.now(),
        comment: novoComentario.trim(),
        author: user?.name || "Usuário",
        created_at: new Date().toISOString(),
        ...data
      };

      // Adiciona o novo comentário na lista
      setComentarios([novoComentarioObj, ...comentarios]);
      setNovoComentario("");
      
      alert("Comentário enviado com sucesso!");
      
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
      setErro(error.message || "Erro ao enviar comentário. Tente novamente.");
    } finally {
      setEnviandoComentario(false);
    }
  }

  if (loading) return <Loading message="Carregando publicação..." />;
  
  if (erro && !nota) {
    return (
      <>
        <Navbar />
        <div className="pt-28 px-6 max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erro</h1>
          <p className="text-gray-700 mb-4">{erro}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Tentar Novamente
          </button>
        </div>
      </>
    );
  }
  
  if (!nota) return <Loading message="Carregando publicação..." />;

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">
          Comentários da Publicação 💭
        </h1>

        <div className="bg-white shadow-md rounded-2xl p-5 border border-purple-200 mb-6">
          <h3 className="text-purple-900 font-bold text-lg">{nota.author}</h3>
          <p className="text-purple-700 whitespace-pre-wrap">{nota.content}</p>
        </div>

        <h2 className="text-xl font-semibold text-purple-900 mb-2">Comentários</h2>

        {comentarios.length === 0 ? (
          <p className="text-purple-700">Nenhum comentário ainda.</p>
        ) : (
          comentarios.map((c) => (
            <div
              key={c.id}
              className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-3"
            >
              <p className="text-purple-900 font-semibold">{c.author}</p>
              <p className="text-purple-700">{c.comment}</p>
            </div>
          ))
        )}

        <div className="mt-6">
          {erro && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-3">
              <p className="text-red-700">{erro}</p>
            </div>
          )}
          
          <textarea
            value={novoComentario}
            onChange={(e) => setNovoComentario(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.ctrlKey && novoComentario.trim()) {
                e.preventDefault();
                enviarComentario();
              }
            }}
            placeholder="Escreva seu comentário... (Ctrl+Enter para enviar)"
            className="w-full p-3 border border-purple-300 rounded-xl focus:outline-purple-600 focus:border-purple-500"
            rows={3}
            disabled={enviandoComentario}
          ></textarea>

          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">
              {user?.name ? `Comentando como: ${user.name}` : "Faça login para comentar"}
            </span>
            
            <button
              disabled={!novoComentario.trim() || enviandoComentario}
              onClick={enviarComentario}
              className={`px-6 py-2 rounded-xl transition text-white font-medium
                ${
                  !novoComentario.trim() || enviandoComentario
                    ? "bg-purple-300 cursor-not-allowed"
                    : "bg-purple-700 hover:bg-purple-800"
                }`}
            >
              {enviandoComentario ? "Enviando..." : "Comentar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
