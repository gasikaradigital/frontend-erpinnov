import React from 'react';
import { FaLaptop, FaRocket, FaPaperPlane, FaBox, FaUsers, FaTasks } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { BsPeople, BsDiamond } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const ModulesSection = () => {
  const modules = [
    {
      icon: <FaLaptop className="text-4xl text-purple-500" />,
      title: "CRM et Ventes avancés",
      description: "Le CRM vous aide à gérer vos clients de manière efficace et personnalisée."
    },
    {
      icon: <FaRocket className="text-4xl text-purple-500" />,
      title: "Site web connecté",
      description: "Boostez votre stratégie Marketing avec des outils performants."
    },
    {
      icon: <FaPaperPlane className="text-4xl text-purple-500" />,
      title: "Finance et Compta analytiques",
      description: "Optimisez votre gestion financière, Paiements et l'reporting/audit bancaire."
    },
    {
      icon: <FaBox className="text-4xl text-purple-500" />,
      title: "Gestion de stock et logistique",
      description: "Gérez efficacement vos Produits, Services, Stocks, Achats et Expéditions."
    },
    {
      icon: <FaUsers className="text-4xl text-purple-500" />,
      title: "Ressources Humaines",
      description: "Notre solution simplifie la gestion de vos RH avec des outils intuitifs."
    },
    {
      icon: <FaTasks className="text-4xl text-purple-500" />,
      title: "Gestion de projets",
      description: "Améliorez votre Productivité en gérant efficacement Projets et Tâches."
    }
  ];

  const stats = [
    {
      icon: <BiSupport className="text-3xl text-purple-500" />,
      value: "24H",
      label: "Chat d'assistance"
    },
    {
      icon: <BsPeople className="text-3xl text-emerald-500" />,
      value: "50k+",
      label: "Référence nous"
    },
    {
      icon: <BsDiamond className="text-3xl text-blue-500" />,
      value: "4.8/5",
      label: "Note Produits"
    },
    {
      icon: <AiOutlineCheck className="text-3xl text-orange-500" />,
      value: "30 jours",
      label: "Essai gratuit"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            Nos modules pour simplifier votre gestion.
          </h2>
          <p className="text-gray-600">
            Des outils adaptés pour gagner du temps et répondre à vos besoins.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <div key={index} className="p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                {module.title}
              </h3>
              <p className="text-gray-600">
                {module.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg border ${
                index === 0 ? 'border-purple-200' :
                index === 1 ? 'border-emerald-200' :
                index === 2 ? 'border-blue-200' :
                'border-orange-200'
              } text-center`}
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModulesSection;