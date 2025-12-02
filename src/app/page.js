"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const dataFormatura = new Date("2025-12-15T00:00:00");

  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const diferenca = dataFormatura - agora;

      if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor(
          (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutos = Math.floor(
          (diferenca % (1000 * 60 * 60)) / (1000 * 60)
        );
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        setTempoRestante({ dias, horas, minutos, segundos });
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // ===== CARROSSEL DE FUNDO =====
  const imagens = ["/foematura1.jpg", "/formatura2.jpg", "/amifos.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const trocar = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 5000); // troca a cada 5 segundos

    return () => clearInterval(trocar);
  }, []);

  return (
    <main
      className="h-screen w-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${imagens[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Máscara escura para leitura */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4 drop-shadow-lg">
          Contagem Regressiva - Julia Lene 6A Informática 🎓
        </h1>

        <h2 className="text-lg md:text-2xl mb-8">
          Faltam{" "}
          <span className="font-bold">{tempoRestante.dias}</span> dias,{" "}
          <span className="font-bold">{tempoRestante.horas}</span> horas,{" "}
          <span className="font-bold">{tempoRestante.minutos}</span> minutos e{" "}
          <span className="font-bold">{tempoRestante.segundos}</span> segundos
          para a nossa formatura!
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Após a formatura quero cursar{" "}
          <span className="font-semibold text-green-300">História</span> na{" "}
          <span className="font-semibold text-green-400">UFMS</span> e um dia me
          tornar uma <span className="font-semibold text-green-300">excelente professora!</span>
        </p>
      </div>
    </main>
  );
}
