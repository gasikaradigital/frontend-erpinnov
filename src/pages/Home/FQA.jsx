import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Qestion from '../../assets/question.png';
const FQA = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqQuestions = [
    {
      question: "Qu'est-ce qu'ERP INNOV ?",
      answer: "ERP INNOV est une suite d'outils de gestion d'entreprise simples et efficaces, conçue pour aider les entreprises de toutes tailles à optimiser leurs opérations et stimuler leur croissance."
    },
    {
      question: "Ai-je besoin d'une formation pour utiliser vos outils ?",
      answer: "Une formation peut être fournie selon vos besoins spécifiques."
    },
    {
      question: "Vos solutions sont-elles accessibles sur mobile ?",
      answer: "Oui, toutes nos solutions sont accessibles sur mobile et s'adaptent à tous les écrans."
    },
    {
      question: "Comment fonctionne votre support client ?",
      answer: "Notre support client est disponible 24/7 pour vous accompagner."
    },
    {
      question: "Puis-je personnaliser les outils selon mes besoins ?",
      answer: "Oui, nos solutions sont entièrement personnalisables selon vos besoins."
    },
    {
      question: "Quels types de formations proposez-vous ?",
      answer: "Nous proposons des formations en ligne et en présentiel adaptées à vos besoins."
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src={Qestion} 
                alt="Support illustration" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
              Questions techniques clients
            </h2>

            <div className="space-y-4">
              {faqQuestions.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
                    onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                  >
                    <span className="font-medium text-gray-800">{faq.question}</span>
                    <IoIosArrowDown 
                      className={`transition-transform duration-200 ${
                        openQuestion === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openQuestion === index && (
                    <div className="px-4 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            
          </div>
        </div>
        <div className="text-center mt-8">
              <button className="text-blue-500 border-blue-500 hover:bg-red-500 hover:text-white border-2 py-3 px-4 rounded-full hover:text-blue-600 font-medium">
                Toutes les questions
              </button>
            </div>
      </div>
    </div>
  );
};

export default FQA;