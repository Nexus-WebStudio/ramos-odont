import { GraduationCap, Award, HeartHandshake } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, text: 'Formação em grandes centros de referência odontológica do Brasil' },
  { icon: Award, text: 'Membro de associações e conselhos regionais de odontologia' },
  { icon: HeartHandshake, text: 'Atendimento humanizado focado no bem-estar e conforto do paciente' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl shadow-slate-200">
              <img
                src="https://images.pexels.com/photos/5355864/pexels-photo-5355864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Equipe Ramos Odontologia"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl shadow-slate-200/80 px-6 py-5 max-w-[200px]">
              <p className="text-4xl font-bold text-[#0F172A] leading-none mb-1">+10</p>
              <p className="text-slate-500 text-sm font-medium leading-tight">anos de excelência em Araraquara</p>
            </div>
            {/* Teal accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-teal-500/10 rounded-2xl border border-teal-200" />
          </div>

          {/* Content side */}
          <div className="flex flex-col gap-6 lg:pl-4">
            <div>
              <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
                Sobre nós
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                Ramos Odontologia —<br />
                <span className="text-teal-600">Sorrisos com saúde e confiança</span>
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Somos uma clínica odontológica de referência em Araraquara, comprometida em oferecer
              tratamentos de alta qualidade em um ambiente acolhedor e seguro. Nossa equipe de
              especialistas une conhecimento técnico atualizado com um atendimento verdadeiramente
              humanizado.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Acreditamos que um sorriso saudável transforma vidas. Por isso, cada paciente recebe
              um plano de tratamento personalizado, desenvolvido com cuidado e transparência, para
              garantir os melhores resultados a curto e longo prazo.
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-teal-600" strokeWidth={1.8} />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200">
              <img
                src="https://images.pexels.com/photos/37458054/pexels-photo-37458054.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
                alt="Dr. Ramos"
                className="w-14 h-14 rounded-full object-cover border-2 border-teal-200 shadow-sm"
              />
              <div>
                <p className="font-bold text-[#0F172A] text-sm">Dr. Ramos</p>
                <p className="text-slate-500 text-xs">Dentista & Fundador · CRO-SP XXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
