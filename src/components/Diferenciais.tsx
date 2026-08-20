import { Monitor, ShieldCheck, Smile, CreditCard } from 'lucide-react';

const items = [
  {
    icon: Monitor,
    title: 'Tecnologia Avançada',
    desc: 'Diagnóstico digital com equipamentos de última geração para resultados mais precisos e tratamentos mais eficazes.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: Smile,
    title: 'Tratamentos Sem Dor',
    desc: 'Técnicas modernas de anestesia e sedação consciente para que você se sinta confortável durante todo o procedimento.',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: ShieldCheck,
    title: 'Biossegurança Rigorosa',
    desc: 'Protocolos de esterilização e higiene que seguem as normas mais exigentes para total segurança do paciente.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: CreditCard,
    title: 'Condições Facilitadas',
    desc: 'Diversas opções de parcelamento e planos de pagamento para que você não adie o cuidado com o seu sorriso.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
];

export default function Diferenciais() {
  return (
    <section className="py-24 bg-slate-50" id="diferenciais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Cuidado completo com quem você ama
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Unimos tecnologia de ponta com atendimento humanizado para oferecer a melhor experiência
            odontológica de Araraquara.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <div
              key={title}
              className={`group bg-white border ${border} rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`${bg} ${color} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="text-[#0F172A] font-bold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
