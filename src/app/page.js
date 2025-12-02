"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const graduationDate = new Date("December 15, 2025 19:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = graduationDate - now;

      if (diff <= 0) {
        setTimeLeft("A formatura chegou! 🎉");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para a nossa formatura!`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">

      {/* SLIDESHOW DE FUNDO */}
      <div className="background-slideshow">
  <img src="/foto1.jpg" alt="Foto 1" />
  <img src="/foto2.jpg" alt="Foto 2" />
  <img src="/foto3.jpg" alt="Foto 3" />
</div>

<div className="background-overlay"></div>


      {/* TÍTULO */}
      <h1 className="title">
        Contagem Regressiva - Julia Lene INFO6A
      </h1>

      {/* CONTADOR */}
      <p className="counter-text">{timeLeft}</p>

      {/* TEXTO DO FUTURO */}
      <p className="future-text">
        Após a formatura quero cursar <span>História</span> na <span>UFMS</span> e um dia me tornar uma{" "}
        <span>excelente professora!</span>
      </p>
    </main>
  );
}
