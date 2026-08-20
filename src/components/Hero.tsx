import { Star, Users, Clock } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5516999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20odontol%C3%B3gica.';

const badges = [
  { icon: Star, text: '4.9 no Google' },
  { icon: Users, text: '+1.000 pacientes atendidos' },
  { icon: Clock, text: 'Atendimento com hora marcada' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/14458273/pexels-photo-14458273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Clínica Ramos Odontologia"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/60" />
      </div>

      {/* Decorative teal bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div className="flex flex-col gap-7">
          <div className="inline-flex items-center gap-2 bg-teal-600/20 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Consultas Disponíveis — Araraquara
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Transforme o Seu{' '}
            <span className="text-teal-400">Sorriso</span>
            <br />
            com Atendimento Humanizado
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
            Especialistas em implantes, alinhadores invisíveis, clareamento e reabilitação oral
            para devolver sua <strong className="text-white font-semibold">confiança</strong> e
            qualidade de vida em Araraquara.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-teal-900/40 hover:shadow-teal-500/30 hover:shadow-xl transition-all duration-300 w-fit"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero Agendar Minha Avaliação
            <span className="group-hover:translate-x-1 transition-transform duration-200 text-teal-200">→</span>
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mt-1">
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-full px-4 py-2"
              >
                <Icon size={13} className="text-teal-400 shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="hidden md:block relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/60">
            <img
              src="https://images.pexels.com/photos/8669946/pexels-photo-8669946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Atendimento humanizado na Ramos Odontologia"
              className="w-full h-full object-cover"
            />
            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#0D9488', '#1E3A8A', '#D97706'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/30"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-sm">+1.000 sorrisos</p>
                <p className="text-slate-300 text-xs">transformados</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          {/* Decorative circle */}
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-teal-600/20 blur-2xl" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
