import React, { useState, useEffect } from "react";
import { Camera, Cloud, Heart, Upload, Image, X } from "lucide-react";

export const PhotoGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [shake, setShake] = useState(false);

  const PHOTO_PASSWORD = "29dicembre2025";
  const GOOGLE_PHOTOS_ALBUM = "https://photos.app.goo.gl/xgJr6WaaBqU2dLFZ9";

  useEffect(() => {
    const authStatus = sessionStorage.getItem("photoAccess");
    if (authStatus === "granted") {
      setIsAuthenticated(true);
    }
  }, []);

  const openPhotoAlbum = () => {
    if (isAuthenticated) {
      window.open(GOOGLE_PHOTOS_ALBUM, "_blank");
    } else {
      setShowModal(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === PHOTO_PASSWORD) {
      sessionStorage.setItem("photoAccess", "granted");
      setIsAuthenticated(true);
      setShowModal(false);
      setError("");
      window.open(GOOGLE_PHOTOS_ALBUM, "_blank");
    } else {
      setError("❌ Password errata. Riprova.");
      setPassword("");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <section className="bg-gradient-to-br from-cream to-[#FFE8E8] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-christmas-green text-center mb-4">
          Condividi i Tuoi Ricordi
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-12"></div>

        <p className="text-center text-lg text-charcoal mb-12 max-w-2xl mx-auto leading-relaxed">
          Il nostro matrimonio sarà ancora più speciale con i vostri scatti!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Camera className="w-12 h-12" />,
              title: "Scatta",
              text: "Cattura i momenti speciali",
            },
            {
              icon: <Cloud className="w-12 h-12" />,
              title: "Carica",
              text: "Aggiungi le tue foto",
            },
            {
              icon: <Heart className="w-12 h-12" />,
              title: "Ricorda",
              text: "Rivivi ogni istante",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center"
            >
              <div className="text-christmas-red mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl text-christmas-green mb-2">
                {item.title}
              </h3>
              <p className="text-charcoal text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={openPhotoAlbum}
            className="bg-christmas-red text-white px-8 py-4 rounded-full font-medium hover:bg-[#D4324D] transition-all hover:scale-105 hover:shadow-xl flex items-center gap-3"
          >
            <Upload className="w-6 h-6" />
            Carica le Tue Foto
          </button>
          <button
            onClick={openPhotoAlbum}
            className="bg-white text-christmas-green border-2 border-christmas-green px-8 py-4 rounded-full font-medium hover:bg-christmas-green hover:text-white transition-all hover:scale-105 flex items-center gap-3"
          >
            <Image className="w-6 h-6" />
            Vedi Tutte le Foto
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div
            className={`bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl ${shake ? "animate-shake" : ""}`}
          >
            <button
              onClick={() => {
                setShowModal(false);
                setPassword("");
                setError("");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-charcoal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="font-serif text-3xl text-christmas-green mb-2">
                Accesso Album Foto
              </h3>
              <p className="text-charcoal">Inserisci la password dall'invito</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-center font-mono text-lg tracking-widest focus:border-christmas-green focus:outline-none"
              />
              {error && (
                <p className="text-christmas-red text-center font-medium">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-christmas-green text-white py-4 rounded-full font-medium hover:bg-christmas-red transition-all hover:scale-105"
              >
                Accedi all'Album
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
