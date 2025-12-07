import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export const Gift = () => {
  const [copied, setCopied] = useState(false);
  const iban = "IT03X0306940074100000090198";
  const accountHolder = "Federico Cuozzo";

  const copyIban = () => {
    const cleanIban = iban.replace(/\s/g, "");
    navigator.clipboard.writeText(cleanIban).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="bg-gradient-to-br from-gold/20 via-cream to-gold/10 py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-christmas-red/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-christmas-green">
          Il Vostro Regalo
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-12"></div>

        <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-12 max-w-2xl mx-auto text-charcoal">
          La vostra presenza è il regalo più grande che potremmo desiderare. Se
          desiderate contribuire al nostro futuro insieme, saremo grati per
          qualsiasi gesto di affetto.
        </p>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-gold/30 shadow-xl max-w-lg mx-auto">
          <div className="text-gold text-sm tracking-widest uppercase mb-2">
            Intestatario
          </div>
          <div className="text-christmas-green font-semibold text-lg mb-6">
            {accountHolder}
          </div>

          <div className="text-gold text-sm tracking-widest uppercase mb-4">
            IBAN
          </div>
          <div className="font-mono text-lg md:text-xl bg-cream/80 p-4 rounded-lg mb-6 break-all border border-gold/20">
            {iban}
          </div>
          <button
            onClick={copyIban}
            className="bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-christmas-green transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                Copiato!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copia IBAN
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
