
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, BookOpen, HelpCircle, CheckCircle2, ChevronDown, MessageCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-all shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-slate-800">{question}</span>
        <ChevronDown size={20} className={`text-yellow-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-600 animate-in fade-in slide-in-from-top-2 duration-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#101828] text-white pt-20 pb-20 lg:pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 rounded-full px-4 py-1 mb-6 text-sm font-medium">
               <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
               <span>GURIGA AQOONTA IYO CILMIGA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Ku Soo Dhawoow <br />
              <span className="text-yellow-500 italic">Kaabax Academy</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Baro xirfado cusub oo casri ah si aad u dhisatid mustaqbalkaaga. 
              Waxaan kuugu diyaarinay casharro tayo leh iyo macallimiin khibrad sare leh.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/courses" className="bg-yellow-500 text-[#101828] px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-all text-center">
                Hadda Bilow
              </Link>
              <Link to="/courses" className="bg-white/5 border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all text-center">
                Eeg Buugaagta
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full"></div>
            <img 
              src="https://picsum.photos/seed/edu/800/600" 
              alt="Education" 
              className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
            />
          </div>
        </div>
        
        {/* Decorative background grid */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50" id="adeegyada">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101828] mb-4">Adeegyada Waxbarasho</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Dooro qaabka aad jeceshahay inaad wax u barato. Waxaan kuu heynaa muuqaallo, buugaag iyo imtixaanno lagu tijaabinayo aqoontaada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Muuqaal */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-100 text-[#1e3a8a] rounded-xl flex items-center justify-center mb-6">
                <PlayCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Casharro Muuqaal ah</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Daawo casharro tayo sare leh oo ay soo diyaariyeen khubaro ku takhasustay maaddooyinka kala duwan.
              </p>
              
              <div className="space-y-4 mt-auto">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-[#1e3a8a] uppercase mb-1">Xisaabta Sare</span>
                  <Link to="/courses" className="block w-full py-2 bg-[#1e3a8a] text-white text-xs font-bold rounded-lg text-center hover:bg-[#162e6e] transition-all">
                    Hadda Is-qor
                  </Link>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-[#1e3a8a] uppercase mb-1">Suugaanta Ingiriiska</span>
                  <Link to="/courses" className="block w-full py-2 bg-[#1e3a8a] text-white text-xs font-bold rounded-lg text-center hover:bg-[#162e6e] transition-all">
                    Hadda Is-qor
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Buugaag */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Buugaag</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Ka akhriso maktabadeena buugaagta cilmiga ah, qoraallada cilmi-baarista iyo hagayaal waxbarasho.
              </p>
              
              <div className="space-y-4 mt-auto">
                <div className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-16 bg-gray-200 rounded-md flex-shrink-0 mr-4"></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 leading-tight">Hagaha Academy Vol. 1</h4>
                    <span className="text-[10px] text-gray-400 block mb-1">Sida loo barto casharrada.</span>
                    <button className="text-xs font-bold text-[#1e3a8a] hover:underline">Iibso Buugga</button>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-16 bg-gray-200 rounded-md flex-shrink-0 mr-4"></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 leading-tight">Cilmiga Fiisigiska</h4>
                    <span className="text-[10px] text-gray-400 block mb-1">Mabaadi'da guud ee Fiisigiska.</span>
                    <button className="text-xs font-bold text-[#1e3a8a] hover:underline">Iibso Buugga</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Quiz */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <HelpCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Su'aalo & Jawaabo (Quizzes)</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Tijaabi aqoontaada adoo isticmaalaya nidaamka imtixaannada casriga ah si aad u ogaato heerkaaga.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Layliyo maalinle ah',
                  'Natiijooyin deg-deg ah',
                  'Heerarka tartanka qaranka'
                ].map((item) => (
                  <li key={item} className="flex items-center text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-yellow-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full py-3 bg-transparent border border-gray-200 text-slate-800 text-sm font-bold rounded-lg hover:bg-gray-50 transition-all">
                Ku biir Imtixaanka
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#101828] mb-4">Su'aalaha Badanaa la Is-weydiiyo (FAQ)</h2>
            <p className="text-gray-500">Halkan ka hel jawaabaha su'aalaha ay ardaydu inta badan na weydiiyaan.</p>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="Sideen isku diwaangelin karaa?" 
              answer="Waxaad si fudud isaga diwaangelin kartaa adoo gujinaya badhanka 'Hadda Is-qor' ee ku yaal bar-madaxeedka ama adoo nala soo xiriiraya WhatsApp."
            />
            <FAQItem 
              question="Sideen lacagta u bixiyaa?" 
              answer="Waxaan aqbalnaa lacagaha lagu bixiyo EVC Plus, e-Dahab, iyo kaararka bangiga sida Mastercard iyo Visa."
            />
            <FAQItem 
              question="Miyaan helayaa shahaado?" 
              answer="Haa, koorso kasta oo aad dhammeyso waxaad helaysaa shahaado caddeynaysa inaad si guul leh u dhammeysay maaddadaas."
            />
            <FAQItem 
              question="Ma jiraan casharro bilaash ah?" 
              answer="Haa, waxaan haynaa casharro iyo buugaag hordhac ah oo bilaash ah oo aad ku tijaabin kartid tayada waxbarashadeenna."
            />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-[#101828] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ma diyaar u tahay inaad bilaawdo?</h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Habka is-qorista waa mid aad u fudud. Kaliya nagala soo xiriir WhatsApp si aad u bixiso lacagta oo aad u hesho fursad aad ku gasho dashboard-kaaga waxbarasho.
          </p>
          <a 
            href="https://wa.me/252618222075" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-green-500/20"
          >
            <MessageCircle size={24} />
            <span>Nagala soo xiriir WhatsApp</span>
          </a>
          <div className="mt-4 text-yellow-500 font-bold tracking-widest text-lg">+252 61 822 2075</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
