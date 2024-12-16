import React, { useState } from 'react';

const PricingSection = () => {
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);

  const plans = [
    {
      name: "Solo",
      price: 4,
      yearlyPrice: 48,
      features: [
        "Tous les modules ERP INNOV sont activé",
        "Accessible depuis tout appareil connecté",
        "DoIassistant",
        "Nombre d'utilisateur limité",
        "Stockage limité",
        "Nombre de conversations chatbot limité",
        "Disponibilité 24/7"
      ]
    },
    {
      name: "Solo +",
      price: 9,
      yearlyPrice: 108,
      features: [
        "Tous les modules ERP INNOV sont activé",
        "Accessible depuis tout appareil connecté",
        "DoIassistant",
        "Nombre d'utilisateur limité",
        "Stockage limité",
        "Nombre de conversations chatbot limité",
        "Disponibilité 24/7"
      ],
      highlighted: true
    },
    {
      name: "Premium",
      price: 13,
      yearlyPrice: 156,
      features: [
        "Tous les modules ERP INNOV sont activé",
        "Accessible depuis tout appareil connecté",
        "DoIassistant",
        "Nombre d'utilisateur illimité",
        "Stockage illimité",
        "Nombre des conversations chatbot illimité",
        "Disponibilité 24/7"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Plans tarifaires sur mesure</h2>
          <p className="text-gray-600">
            ERP INNOV propose DoIikeer ERP CRM en ligne, avec un coût fixe, peu importe les applications utilisées.
          </p>
          
          <div className="flex items-center justify-center mt-6 gap-4">
            <span className={`text-sm ${!isAnnualBilling ? 'text-purple-600' : 'text-gray-600'}`}>
              Paiement mensuel
            </span>
            <button
              onClick={() => setIsAnnualBilling(!isAnnualBilling)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnualBilling ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnualBilling ? 'text-purple-600' : 'text-gray-600'}`}>
              Payer annuellement
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 ${
                plan.highlighted
                  ? 'ring-2 ring-purple-600 shadow-lg scale-105'
                  : 'border border-gray-200'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">£{isAnnualBilling ? plan.yearlyPrice : plan.price}</span>
                <span className="text-gray-600 ml-2">{isAnnualBilling ? "/année" : "/mois"}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'text-purple-600 border border-purple-600 hover:bg-purple-50'
                }`}
              >
                Installer maintenant
              </button>
              
              {!plan.highlighted && (
                <p className="text-xs text-gray-500 text-center mt-4">
                  Test gratuit (30 jours ou plus, sans engagement)
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;