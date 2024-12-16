import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2A2C3F] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">ERP Innov</h3>
            <p className="text-gray-300 text-sm mb-4">
              ERP Innov - La Gestion Intelligente à Portée de Main<br />
              Simplifiez, Innovez, Prospérez
            </p>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Rester informé, inscrivez-vous à notre newsletter"
                className="bg-[#373951] text-sm px-4 py-2 rounded-l-md w-64"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md text-sm">
                S'abonner
              </button>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Accueil</a></li>
              <li><a href="#" className="hover:text-white">Tarif</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Aides Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Aides</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Dolikeer ERP/CRM</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Tutoriel Vidéos</a></li>
              <li><a href="#" className="hover:text-white">Status des services</a></li>
              <li><a href="#" className="hover:text-white">Votre espace client</a></li>
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Téléchargez notre application</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white">
                <FaApple className="text-xl" />
                <span>Download on the<br />App Store</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white">
                <FaGooglePlay className="text-xl" />
                <span>Download on the<br />Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 ERP Innov
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;