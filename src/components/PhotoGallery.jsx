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
    <section className="bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-christmas-green mb-4">
          Condividi i Tuoi Ricordi
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-12"></div>

        <p className="font-serif text-xl md:text-2xl text-charcoal mb-6 leading-relaxed italic">
          Il nostro matrimonio sarà ancora più speciale con i vostri scatti.
        </p>

        <p className="text-base md:text-lg text-charcoal/70 mb-12 leading-relaxed">
          Catturate ogni momento della giornata e condividetelo nel nostro album
          condiviso. Ogni ricordo attraverso i vostri occhi è prezioso.
        </p>

        {/* Pulsanti eleganti */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={openPhotoAlbum}
            className="bg-christmas-green text-white px-8 py-4 rounded-full font-medium hover:bg-christmas-red transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Upload className="w-5 h-5" />
            Carica le Tue Foto
          </button>
          <button
            onClick={openPhotoAlbum}
            className="bg-white text-christmas-green border-2 border-christmas-green px-8 py-4 rounded-full font-medium hover:bg-christmas-green hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Image className="w-5 h-5" />
            Vedi Tutte le Foto
          </button>
        </div>
      </div>

      {/* Modal - INVARIATO */}
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
              className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors"
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
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-center font-mono text-lg tracking-widest focus:border-christmas-green focus:outline-none transition-colors"
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
