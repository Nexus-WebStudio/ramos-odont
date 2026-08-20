import { Phone, Instagram, MapPin } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5516999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20odontol%C3%B3gica.';

const links = {
  especialidades: [
    'Alinhadores Invisíveis',
    'Implantes Dentários',
    'Clareamento a Laser',
    'Lentes de Contato Dental',
    'Clínica Geral',
  ],
  contato: [
    { label: 'Rua Nove de Julho, 1121 – Araraquara/SP', icon: MapPin },
    { label: '(16) 99999-9999', icon: Phone },
    { label: '@ramosodontologia1', icon: Instagram },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-base tracking-tight">Ramos</span>
                <span className="block text-teal-400 text-[10px] font-semibold uppercase tracking-widest -mt-0.5">
                  Odontologia
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Clínica odontológica de referência em Araraquara. Sorrisos com saúde, confiança e
              tecnologia de ponta desde 2013.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Especialidades */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Especialidades</h4>
            <ul className="flex flex-col gap-2.5">
              {links.especialidades.map((s) => (
                <li key={s}>
                  <a
                    href="#especialidades"
                    className="text-sm hover:text-teal-400 transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Contato</h4>
            <ul className="flex flex-col gap-3.5">
              {links.contato.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon size={14} className="text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-sm leading-snug">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ramos Odontologia · Todos os direitos reservados
          </p>
          <p className="text-xs text-slate-600">
            Araraquara – SP · CRO-SP XXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
