import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const horarios = [
  { dia: 'Segunda a Sexta', hora: '08h00 – 18h00' },
  { dia: 'Sábado', hora: '08h00 – 12h00' },
  { dia: 'Domingo e Feriados', hora: 'Fechado' },
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
            Onde estamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Localização e horários
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-md mx-auto">
            Estamos no coração de Araraquara, de fácil acesso e com estacionamento próximo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-teal-600" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[#0F172A] font-bold text-sm mb-1">Endereço</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Rua Nove de Julho, 1121<br />
                  Araraquara – SP, 14801-295
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-teal-600" strokeWidth={1.8} />
                </div>
                <p className="text-[#0F172A] font-bold text-sm">Horários de Atendimento</p>
              </div>
              <ul className="flex flex-col gap-3">
                {horarios.map(({ dia, hora }) => (
                  <li key={dia} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-none last:pb-0">
                    <span className="text-slate-600 text-sm">{dia}</span>
                    <span className={`text-sm font-semibold ${hora === 'Fechado' ? 'text-slate-400' : 'text-teal-700'}`}>
                      {hora}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/5516999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl p-5 hover:bg-green-100 transition-colors"
              >
                <Phone size={18} className="text-green-600 shrink-0" />
                <div>
                  <p className="text-green-700 font-bold text-xs uppercase tracking-wide mb-0.5">WhatsApp</p>
                  <p className="text-slate-700 text-sm font-medium">(16) 99999-9999</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/ramosodontologia1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-pink-50 border border-pink-100 rounded-2xl p-5 hover:bg-pink-100 transition-colors"
              >
                <Instagram size={18} className="text-pink-600 shrink-0" />
                <div>
                  <p className="text-pink-700 font-bold text-xs uppercase tracking-wide mb-0.5">Instagram</p>
                  <p className="text-slate-700 text-sm font-medium">@ramosodontologia1</p>
                </div>
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-100 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]">
            <iframe
              title="Localização Ramos Odontologia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.7485965870804!2d-48.17769042402977!3d-21.787827880066893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f47c0e3f23bb%3A0x0!2sR.%20Nove%20de%20Julho%2C%201121%2C%20Araraquara%20-%20SP%2C%2014801-295!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
