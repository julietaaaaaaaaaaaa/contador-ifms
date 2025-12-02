"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const dataFormatura = new Date("2025-12-15T00:00:00"); // NOVA DATA
  const [tempo, setTempo] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = Date.now();
      const diferenca = dataFormatura - agora;

      if (diferenca <= 0) {
        clearInterval(intervalo);
        setFinalizado(true);
        return;
      }

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      setTempo({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 text-center gap-10">
      <h1 className="text-4xl font-bold">
        Contagem Regressiva - Julia Lene 6A Informática 🎓
      </h1>

      {!finalizado ? (
        <h2 className="text-2xl">
          Faltam <span className="font-bold">{tempo.dias}</span> dias,{" "}
          <span className="font-bold">{tempo.horas}</span> horas,{" "}
          <span className="font-bold">{tempo.minutos}</span> minutos e{" "}
          <span className="font-bold">{tempo.segundos}</span> segundos para a nossa formatura!
        </h2>
      ) : (
        <h2 className="text-3xl text-green-600 font-bold animate-bounce">
          🎉 Parabéns! Chegou o grande dia da nossa formatura! 🎓
        </h2>
      )}

      <p className="text-lg max-w-xl">
        Após a formatura quero cursar história na UFMS e um dia me tornar uma excelente professora!
      </p>

      {/* Galeria de imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src="/formatura1.jpg" className="rounded-lg shadow-lg max-w-xs" alt="Foto 1" />
        <img src="/formatura2.jpg" className="rounded-lg shadow-lg max-w-xs" alt="Foto 2" />
        <img src="/amigos.jpg" className="rounded-lg shadow-lg max-w-xs" alt="Foto com amigos" />
      </div>
    </main>
  );
}
