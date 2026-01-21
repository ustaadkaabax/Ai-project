
import React from 'react';
import { Mail, Phone, MapPin, Globe, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src="https://i.postimg.cc/p9jqBydf/logo-png.png" alt="Kaabax Academy Logo" className="h-10 w-auto" />
              <span className="font-bold text-lg tracking-tight">KAABAX ACADEMY</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Kaabax Academy waxaa ka go'an inay bixiso waxbarasho tayo sare leh qof walba, meel walba.
              Hadafkeenu waa inaan isku xirno xilliaha iyo aqoonta.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6">Sahami</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#1e3a8a] transition-colors">Nagu saabsan</a></li>
              <li><a href="#/courses" className="hover:text-[#1e3a8a] transition-colors">Casharro Muuqaal ah</a></li>
              <li><a href="#/courses" className="hover:text-[#1e3a8a] transition-colors">Buugaagta Digital-ka ah</a></li>
              <li><a href="#" className="hover:text-[#1e3a8a] transition-colors">Xarunta Su'aalaha</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-800 mb-6">Xiriir</h4>
            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-500">
              <div className="space-y-4">
                <a href="tel:+252618222075" className="flex items-center hover:text-[#1e3a8a] transition-colors">
                  <Phone size={16} className="mr-3 text-yellow-500" />
                  +252 61 822 2075
                </a>
                <a href="mailto:info@kaabax.com" className="flex items-center hover:text-[#1e3a8a] transition-colors">
                  <Mail size={16} className="mr-3 text-yellow-500" />
                  info@kaabax.com
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-3 text-yellow-500" />
                  Muqdisho, Soomaaliya
                </div>
                <div className="flex items-center space-x-4 pt-2">
                  <a href="#" className="text-gray-400 hover:text-[#1e3a8a] transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-[#1e3a8a] transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-[#1e3a8a] transition-colors"><Youtube size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs">
            © 2024 Kaabax Academy. Dhammaan xuquuqdu waa dhowran yihiin.
          </p>
          <div className="flex items-center space-x-6 text-gray-400">
            <button className="hover:text-[#1e3a8a]"><Globe size={18} /></button>
            <span className="text-xs">Nidaamka Qarsoodiga</span>
            <span className="text-xs">Shuruudaha Adeegga</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
