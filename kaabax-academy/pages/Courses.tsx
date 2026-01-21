
import React, { useState } from 'react';
import { PlayCircle, Download, ShoppingCart, MessageCircle, CreditCard } from 'lucide-react';

const CourseCard: React.FC<{ title: string; price: string; description: string; image: string; tag: string }> = ({ title, price, description, image, tag }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
    <div className="relative h-48 overflow-hidden bg-gray-100">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-yellow-500 text-[#101828] text-[10px] font-black px-3 py-1 rounded uppercase tracking-wider">
        {tag}
      </div>
      <div className="absolute inset-0 bg-[#101828]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <PlayCircle size={48} className="text-white" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg mb-2 text-slate-800 leading-tight">{title}</h3>
      <p className="text-gray-500 text-xs mb-6 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <div>
          <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Qiimaha</span>
          <span className="text-xl font-bold text-[#1e3a8a]">${price}</span>
        </div>
        <button className="bg-[#1e3a8a] text-white flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#162e6e] transition-all">
          <span>Hadda libso</span>
          <ShoppingCart size={14} />
        </button>
      </div>
    </div>
  </div>
);

const BookCard: React.FC<{ title: string; price: string; image: string }> = ({ title, price, image }) => (
  <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center group">
    <div className="w-full aspect-[3/4] bg-gray-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-all">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
    </div>
    <h4 className="font-bold text-sm text-slate-800 mb-1 leading-tight">{title}</h4>
    <span className="text-[#1e3a8a] font-bold text-sm mb-4">${price}</span>
    <button className="w-full py-2 bg-transparent border border-gray-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2">
      <Download size={14} />
      <span>Soo Degso PDF</span>
    </button>
  </div>
);

const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Dhamaan');
  const filters = ['Dhamaan', 'Fiidiyowyo', 'Buugaag', 'Imtixaanaad'];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#101828] mb-4">Koorsooyinka iyo Buugaagta</h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Hel koorsooyin fiidiyow ah oo xirfad leh, kedisyo is-dhexgal ah, iyo buugaag waxbarasho oo gaar ah oo loogu talagalay guushaada.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === f 
                ? 'bg-[#101828] text-white' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Video Courses Section */}
            <section>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-800">Koorsooyinka Fiidiyowga ah</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <CourseCard 
                  title="Horumarinta Mareegaha (Advanced)"
                  price="49.00"
                  description="Baro qaab-dhismeedka casriga ah ee frontend iyo backend adigoo isticmaalaya mashruucyo dhab ah."
                  tag="KOORSO"
                  image="https://picsum.photos/seed/web/800/600"
                />
                <CourseCard 
                  title="Barashada Suuqgeynta Dijitaalka ah"
                  price="35.00"
                  description="Hage dhammaystiran oo ku saabsan xeeladaha baraha bulshada iyo suuqgeynta xogta ku dhisan."
                  tag="KOORSO"
                  image="https://picsum.photos/seed/marketing/800/600"
                />
              </div>
            </section>

            {/* Books Section */}
            <section>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-800">Buugaagta la soo degsan karo</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <BookCard 
                  title="Aasaaska Xisaabta" 
                  price="12.50" 
                  image="https://picsum.photos/seed/math-book/400/600" 
                />
                <BookCard 
                  title="Sayniska Casriga ah" 
                  price="15.00" 
                  image="https://picsum.photos/seed/science-book/400/600" 
                />
                <BookCard 
                  title="Hagaha Barashada Luqadda" 
                  price="9.99" 
                  image="https://picsum.photos/seed/lang-book/400/600" 
                />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#101828] text-white p-6 rounded-2xl shadow-xl sticky top-24">
              <h3 className="font-bold text-lg mb-4 leading-tight">Ma u baahan tahay Caawinaad?</h3>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                Si aad isu diwaangeliso, nagala soo xiriir WhatsApp si aad u hesho xaqiijinta lacag bixinta iyo gelitaanka koorsada.
              </p>
              <a 
                href="https://wa.me/252618222075" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all mb-8"
              >
                <MessageCircle size={18} />
                <span>Nagala soo xiriir WhatsApp</span>
              </a>

              <div className="pt-6 border-t border-white/10">
                <span className="block text-[10px] font-bold text-gray-500 uppercase mb-4 tracking-widest">LACAG BIXINTA LA AGOL YAHAY</span>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-md flex items-center">
                    <CreditCard size={14} className="mr-2 text-yellow-500" />
                    <span className="text-[10px] font-bold">EVC PLUS</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-md flex items-center">
                    <CreditCard size={14} className="mr-2 text-yellow-500" />
                    <span className="text-[10px] font-bold">E-DAHAB</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-md text-center">
                   <span className="text-[10px] font-medium text-gray-400">E-Wallet Gudaha ah</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Courses;
