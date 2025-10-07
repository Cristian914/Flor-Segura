import React from "react";
import Rolex from '../assets/imagens/rolex.png';

const CardAbout = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-center bg-cover flex flex-col items-center pt-24 pb-40 px-4"
      style={{ backgroundImage: `url(${Rolex})` }}
    >
      {/* Container geral com max width e espaçamento */}
      <div className="max-w-5xl w-full space-y-10">

        {/* Título principal */}
        <h2 className="text-5xl font-extrabold text-center text-amber-950 drop-shadow-md">
          ALÔCAR
        </h2>

        {/* Sobre o app */}
        <section className="bg-red-300/50 backdrop-blur-md rounded-3xl p-8 shadow-lg text-amber-950">
          <h3 className="text-3xl font-bold mb-4">O Que É AlôCar?</h3>
          <p className="text-lg italic leading-relaxed">
            A AlôCar, como aplicativo de mobilidade, quer garantir a segurança e o conforto junto de velocidade para os passageiros, com nossa frota de motoristas. Estamos garantindo a fácil mobilidade e mantendo o ótimo atendimento.
          </p>
        </section>

        {/* História */}
        <section className="bg-red-200/40 backdrop-blur-md rounded-3xl p-8 shadow-lg text-amber-950">
          <h3 className="text-3xl font-bold mb-4">Nossa História</h3>
          <p className="text-lg leading-relaxed">
            Fundada em <strong>2025</strong>, a AlôCar nasceu da paixão por transformar o jeito que as pessoas se locomovem nas cidades. Desde então, temos crescido e inovado para entregar um serviço ágil, seguro e acessível para todos.
          </p>
        </section>

        {/* Valores e benefícios lado a lado */}
        <div className="flex flex-col md:flex-row md:space-x-8">

          {/* Valores */}
          <section className="flex-1 bg-red-300/40 backdrop-blur-md rounded-3xl p-6 shadow-lg text-amber-950 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">Nossos Valores</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Segurança acima de tudo</li>
              <li>Conforto e facilidade para o usuário</li>
              <li>Valorização dos motoristas parceiros</li>
              <li>Inovação constante para melhorar a experiência</li>
            </ul>
          </section>

          {/* Benefícios */}
          <section className="flex-1 bg-red-200/30 backdrop-blur-md rounded-3xl p-6 shadow-lg text-amber-950">
            <h3 className="text-2xl font-bold mb-3">Benefícios para você</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Motoristas avaliados e confiáveis</li>
              <li>Preços competitivos e transparência nas tarifas</li>
              <li>Suporte rápido e eficiente </li>
              <li>Facilidade para agendar suas corridas</li>
            </ul>
          </section>

        </div>
      </div>

      {/* Nossa Equipe pequena no canto inferior direito */}
      <div className="
        absolute bottom-6 right-6
        bg-red-300/50 backdrop-blur-md
        rounded-xl
        p-4
        w-48
        text-amber-900
        shadow-lg
        text-sm
        font-semibold
        "
      >
        <h4 className="text-lg mb-2 text-center font-bold">Nossa Equipe</h4>
        <ul className="grid grid-cols-2 gap-1 text-center">
          <li>Lucas</li>
          <li>Nycollas</li>
          <li>Elizeu</li>
          <li>Cristian</li>
          <li>Aybran</li>
          <li>Eduardo</li>
        </ul>
      </div>
    </div>
  );
};

export default CardAbout;
