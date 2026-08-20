import { useState } from 'react';
import { ArrowRight, AlignCenter, Cpu, Sun, Layers, Heart } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5516999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20dispon%C3%ADveis.';

const services = [
  {
    icon: AlignCenter,
    title: 'Alinhadores Invisíveis e Ortodontia',
    short: 'Corrija o alinhamento dos seus dentes de forma discreta e eficaz.',
    desc: 'Oferecemos aparelhos transparentes de última geração e ortodontia convencional, adaptados ao seu estilo de vida e necessidades, com acompanhamento próximo em cada fase do tratamento.',
    tag: 'Popular',
    tagColor: 'bg-teal-100 text-teal-700',
    accent: 'border-teal-500',
  },
  {
    icon: Cpu,
    title: 'Implantes Dentários e Próteses',
    short: 'Recupere a função e a estética com implantes de titânio de alta performance.',
    desc: 'Realizamos implantes unitários, múltiplos e protocolo all-on-4/all-on-6, devolvendo sua capacidade mastigatória e um sorriso completo com procedimentos precisos e seguros.',
    tag: 'Alta Demanda',
    tagColor: 'bg-blue-100 text-blue-700',
    accent: 'border-blue-500',
  },
  {
    icon: Sun,
    title: 'Clareamento Dental a Laser',
    short: 'Dentes até 8 tons mais claros em uma única sessão.',
    desc: 'Nosso protocolo de clareamento a laser é seguro, rápido e eficaz. Usando géis de alta concentração ativados por LED/laser, entregamos resultados expressivos com mínima sensibilidade.',
    tag: '',
    tagColor: '',
    accent: 'border-amber-500',
  },
  {
    icon: Layers,
    title: 'Lentes de Contato e Facetas',
    short: 'Design do sorriso personalizado para um resultado natural e deslumbrante.',
    desc: 'Transforme seu sorriso com lentes ultra-finas de porcelana ou resina, corrigindo cor, forma e tamanho dos dentes sem desgaste excessivo, em procedimentos minimamente invasivos.',
    tag: 'Destaque',
    tagColor: 'bg-amber-100 text-amber-700',
    accent: 'border-amber-500',
  },
  {
    icon: Heart,
    title: 'Clínica Geral e Prevenção',
    short: 'Consultas de rotina, limpeza, restaurações e cuidado contínuo para toda a família.',
    desc: 'A prevenção é o melhor tratamento. Oferecemos check-ups completos, profilaxia, restaurações estéticas e orientação personalizada para manter sua saúde bucal em dia por anos.',
    tag: '',
    tagColor: '',
    accent: 'border-emerald-500',
  },
];

export default function Servicos() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="especialidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
            Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Tratamentos para cada necessidade
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Conte com uma equipe multidisciplinar para cuidar de todos os aspectos da sua saúde bucal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const isOpen = expanded === i;
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group relative bg-white border-2 ${isOpen ? s.accent : 'border-slate-100'} rounded-2xl p-7 hover:border-opacity-80 hover:shadow-lg transition-all duration-300`}
              >
                {s.tag && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${s.tagColor}`}>
                    {s.tag}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors duration-200">
                  <Icon size={20} className="text-teal-600" strokeWidth={1.8} />
                </div>
                <h3 className="text-[#0F172A] font-bold text-base mb-2 pr-10">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.short}</p>

                {isOpen && (
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 animate-fadeIn border-t border-slate-100 pt-4">
                    {s.desc}
                  </p>
                )}

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="text-teal-600 hover:text-teal-700 text-sm font-semibold flex items-center gap-1 transition-colors"
                  >
                    {isOpen ? 'Ver menos' : 'Saber mais'}
                    <ArrowRight size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-xl transition-colors duration-200"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-[#0F172A] rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Comece agora</p>
              <h3 className="text-white font-bold text-xl leading-snug mb-3">
                Não sabe qual tratamento é ideal para você?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nossa equipe faz uma avaliação completa e gratuita para indicar o melhor caminho para o seu sorriso.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
            >
              Agendar Avaliação Gratuita
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
