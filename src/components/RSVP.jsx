import React, { useState } from "react";
import { Send, Check } from "lucide-react";

export const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "1",
    dietary: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mgvglwln", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          attendance: "",
          guests: "1",
          dietary: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      alert("Si è verificato un errore. Riprova o contattaci direttamente.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-cream to-[#F0EBE3] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-christmas-green text-center mb-4">
          Conferma la Tua Presenza
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-12"></div>

        {submitted && (
          <div className="bg-christmas-green text-white p-4 rounded-xl mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-christmas-green" />
            </div>
            <p>
              Grazie! Abbiamo ricevuto la tua conferma. Non vediamo l'ora di
              festeggiare con te! 💐
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-christmas-green font-medium mb-2">
              Nome e Cognome *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-christmas-green focus:outline-none transition-colors bg-cream"
            />
          </div>

          <div>
            <label className="block text-christmas-green font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-christmas-green focus:outline-none transition-colors bg-cream"
            />
          </div>

          <div>
            <label className="block text-christmas-green font-medium mb-2">
              Confermi la presenza? *
            </label>
            <select
              name="attendance"
              value={formData.attendance}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-christmas-green focus:outline-none transition-colors bg-cream"
            >
              <option value="">Seleziona...</option>
              <option value="Sì, ci sarò!">Sì, ci sarò!</option>
              <option value="Purtroppo non posso">Purtroppo non posso</option>
            </select>
          </div>

          <div>
            <label className="block text-christmas-green font-medium mb-2">
              Numero di ospiti (incluso te)
            </label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-christmas-green focus:outline-none transition-colors bg-cream"
            />
          </div>

          <div>
            <label className="block text-christmas-green font-medium mb-2">
              Esigenze alimentari o allergie
            </label>
            <textarea
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              rows="3"
              placeholder="Lascia vuoto se non ci sono esigenze particolari"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-christmas-green focus:outline-none transition-colors bg-cream resize-none"
            />
          </div>

          <div>
            <label className="block text-christmas-green font-medium mb-2">
              Un messaggio per noi (facoltativo)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Condividi con noi un pensiero speciale..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-christmas-green focus:outline-none transition-colors bg-cream resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-christmas-green text-white py-4 rounded-full font-medium hover:bg-christmas-red transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 text-lg"
          >
            <Send className="w-5 h-5" />
            Invia Conferma
          </button>
        </form>
      </div>
    </section>
  );
};
