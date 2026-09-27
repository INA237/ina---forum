 "use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { nom: "Direction", texte: "Bienvenue sur le forum officiel INSTITUT DES NATIONS !" },
  ]);
  const [nom, setNom] = useState("Direction");
  const [texte, setTexte] = useState("");

  function publier() {
    if (texte.trim() === "") return;
    setMessages([{ nom, texte }, ...messages]);
    setTexte("");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER BLEU ET JAUNE INA */}
      <div className="bg-[#0a1931] border-b-8 border-yellow-400">
        <div className="max-w-3xl mx-auto p-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-[#0a1931] font-black text-2xl">INA</div>
          <div>
            <h1 className="text-white text-3xl font-black tracking-wider">INSTITUT DES NATIONS</h1>
            <p className="text-yellow-400 font-bold">Excellence - Discipline - Réussite | Forum officiel</p>
          </div>
        </div>
      </div>

      {/* FORMULAIRE */}
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-t-4 border-yellow-400">
          <input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Ton nom"
            className="w-full border p-3 rounded-lg mb-3 font-bold"
          />
          <textarea
            value={texte}
            onChange={(e) => setTexte(e.target.value)}
            placeholder="Ton message pour l'INA..."
            className="w-full border p-3 rounded-lg mb-3 h-24"
          />
          <button
            onClick={publier}
            className="w-full bg-[#0a1931] hover:bg-blue-900 text-white font-black py-3 rounded-lg uppercase tracking-widest"
          >
            PUBLIER
          </button>
        </div>

        {/* MESSAGES */}
        <div className="space-y-3">
          {messages.map((m, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-400">
              <p className="font-black text-[#0a1931]">{m.nom}</p>
              <p className="text-gray-700">{m.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );