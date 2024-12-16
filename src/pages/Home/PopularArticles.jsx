import React from 'react';
import { FaLaptop, FaGift, FaRobot, FaDesktop, FaQuestionCircle, FaGamepad } from 'react-icons/fa';

const PopularArticles = () => {
  const articles = [
    {
      icon: <FaLaptop className="text-3xl text-gray-600" />,
      title: "ERP INNOV V1",
      description: "Tous les modules fournis avec l'ERP INNOV sont disponibles.",
    },
    {
      icon: <FaGift className="text-3xl text-gray-600" />,
      title: "ERP CRM 18",
      description: "La version 18.0 de DoIikeer est disponible dans DoIiCloud.",
    },
    {
      icon: <FaRobot className="text-3xl text-gray-600" />,
      title: "DoIiAssistant",
      description: "Bénéficier d'une aide ou d'une assistance pour Dolikeer.",
    },
    {
      icon: <FaDesktop className="text-3xl text-gray-600" />,
      title: "Dolikeer 17",
      description: "Tous les modules fournis avec la version Dolikeer sont disponibles.",
    },
    {
      icon: <FaQuestionCircle className="text-3xl text-gray-600" />,
      title: "ERP CRM 16",
      description: "La version 16.0 de DoIikeer est disponible dans DoIiCloud.",
    },
    {
      icon: <FaGamepad className="text-3xl text-gray-600" />,
      title: "ERP INNOV V2",
      description: "Bénéficier d'une aide ou d'une assistance pour Dolikeer.",
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Articles Populaires
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {article.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {article.description}
              </p>
              <button className="text-purple-600 bg-purple-50 px-4 py-2 rounded-md text-sm hover:bg-purple-100 transition-colors">
                En savoir plus
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            voir tous les articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;