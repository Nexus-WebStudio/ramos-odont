import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Paula M.',
    photo: 'https://images.pexels.com/photos/3926827/pexels-photo-3926827.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    stars: 5,
    text: 'Fiz o clareamento a laser e ficou incrível! Resultado imediato, sem sensibilidade. A equipe é super atenciosa e o ambiente é muito limpo e moderno. Recomendo demais para todo mundo!',
    treatment: 'Clareamento a Laser',
  },
  {
    name: 'Carlos Eduardo S.',
    photo: 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    stars: 5,
    text: 'Fiz dois implantes e o resultado foi perfeito. Desde o primeiro atendimento me senti acolhido. O procedimento foi muito menos assustador do que eu imaginava, sem dor e com ótimo pós-operatório.',
    treatment: 'Implantes Dentários',
  },
  {
    name: 'Fernanda L.',
    photo: 'https://images.pexels.com/photos/7077368/pexels-photo-7077368.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    stars: 5,
    text: 'Coloquei lentes de contato dental e transformei meu sorriso completamente! Agora tenho muito mais confiança. O tratamento foi rápido, indolor e o resultado superou todas as minhas expectativas.',
    treatment: 'Lentes de Contato Dental',
  },
  {
    name: 'Roberto A.',
    photo: 'https://images.pexels.com/photos/12934843/pexels-photo-12934843.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    stars: 5,
    text: 'Uso os alinhadores invisíveis há 6 meses e a evolução é visível. Ninguém percebe que uso aparelho! O acompanhamento é excelente, sempre com feedback claro e personalizado a cada consulta.',
    treatment: 'Alinhadores Invisíveis',
  },
  {
    name: 'Mariana C.',
    photo: 'https://images.pexels.com/photos/14566062/pexels-photo-14566062.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    stars: 5,
    text: 'Levo minha família toda aqui há anos. Atendimento humanizado, espaço impecável e profissionais extremamente competentes. Não trocaria por nenhum outro consultório em Araraquara.',
    treatment: 'Clínica Geral',
  },
];

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    testimonials[(current) % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#0F172A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <div>
            <span className="inline-block text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">
              Depoimentos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              O que nossos pacientes dizem
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-lg">
              Avaliação média de <strong className="text-white">4.9 estrelas</strong> no Google com
              centenas de relatos reais de transformação.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/20 hover:border-teal-400 hover:bg-teal-600/10 text-white flex items-center justify-center transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/20 hover:border-teal-400 hover:bg-teal-600/10 text-white flex items-center justify-center transition-all duration-200"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${current}-${i}`}
              className={`bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-500 ${
                i === 0 ? 'ring-1 ring-teal-500/50' : ''
              }`}
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-teal-400 text-xs">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-teal-400 w-8' : 'bg-white/20 w-4'
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
