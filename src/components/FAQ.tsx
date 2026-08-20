import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'A primeira consulta é demorada?',
    a: 'A consulta inicial dura em média 45 a 60 minutos. Nela, fazemos uma avaliação completa da sua saúde bucal com fotos, radiografias e exame clínico detalhado, para então apresentar um plano de tratamento personalizado com total transparência sobre prazos e valores.',
  },
  {
    q: 'Aceitam convênios ou oferecem parcelamento?',
    a: 'Trabalhamos com parcelamento em cartão de crédito em até 12x e também aceitamos planos odontológicos de grandes operadoras. Entre em contato pelo WhatsApp para verificar se o seu plano é aceito. Nosso objetivo é que o cuidado com seu sorriso caiba no seu bolso.',
  },
  {
    q: 'Os tratamentos são dolorosos?',
    a: 'Utilizamos técnicas modernas de anestesia local e, quando necessário, sedação consciente. A grande maioria dos procedimentos é realizada sem dor ou com desconforto mínimo. Nossa equipe é treinada para garantir que você se sinta seguro e confortável em cada etapa.',
  },
  {
    q: 'Quanto tempo dura um tratamento de alinhadores invisíveis?',
    a: 'O tempo varia de acordo com a complexidade do caso. Casos simples podem ser resolvidos em 4 a 6 meses, enquanto casos mais complexos podem levar de 12 a 24 meses. Na avaliação inicial, já podemos estimar o prazo específico para o seu caso com precisão.',
  },
  {
    q: 'Com que frequência devo retornar para consulta de manutenção?',
    a: 'Recomendamos revisões e limpeza profissional a cada 6 meses para a maioria dos pacientes. Para pacientes com tratamento ativo (como ortodontia ou implantes), as consultas de acompanhamento são mensais ou conforme orientação do profissional responsável.',
  },
  {
    q: 'O clareamento dental causa sensibilidade?',
    a: 'O nosso protocolo de clareamento a laser foi desenvolvido para minimizar a sensibilidade. Usamos géis dessensibilizantes antes e após o procedimento. Casos de sensibilidade leve podem ocorrer nas primeiras 48 horas, mas são temporários e facilmente manejáveis.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Perguntas e respostas
          </h2>
          <p className="mt-4 text-slate-500 text-base">
            Tudo o que você precisa saber antes de marcar sua consulta.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-teal-200 shadow-md shadow-teal-50' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`text-sm font-semibold leading-snug transition-colors ${isOpen ? 'text-teal-700' : 'text-[#0F172A]'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
