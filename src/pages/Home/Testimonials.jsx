import React, { useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import Logo from '../../assets/logo.png';
const Testimonials = () => {
  const testimonials = [
    {
      company: "ERP INNOV",
      quote: "Nous gagnons beaucoup de temps entre les équipes pour avoir des informations à jour sur nos communautés et surtout nous construisons grace à ERP INNOV une stratégie basée sur la donnée.",
      author: "Henintsoa Andrianina",
      role: "Développeur",
      rating: 5,
      logo: Logo
    },
    {
      company: "ERP INNOV",
      quote: "ERP INNOV répond parfaitement à nos besoins en tant qu'association. Notamment il permet de travailler à distance ce qui est un atout essentiel pour notre association qui compte des bénévoles répartis sur toute la M/car.",
      author: "Mampionona Naritiana",
      role: "Fondateur entreprise",
      rating: 4,
      logo: Logo
    },
    {
      company: "ERP INNOV",
      quote: "Très facile d'utilisation. Évite de ressaisir des quantités de données quand une personne est déjà enregistrée, contrairement à Excel. Plus de risque de perdre des données, de supprimer une ligne par erreur. Permet de faire des recherches et des statistiques facilement.",
      author: "Evens Iamdah",
      role: "Directeur Général",
      rating: 5,
      logo: Logo
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Découvrez nos solutions sur mesure.
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Prêt à transformer votre gestion et booster votre croissance ? Parcourez nos offres et trouvez la solution idéale pour votre entreprise.
        </p>

<div className='flex justify-between items-center'>
<div className="mb-8">
          <h3 className="text-purple-600 font-medium mb-4">vous bénéficiez :</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✓</span>
              Des outils de gestion puissants et intuitifs.
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✓</span>
              Un accès à vos données partout et à tout moment.
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✓</span>
              Des formations pratiques pour développer votre entreprise.
            </li>
          </ul>
<div className='ml-14 mt-8'>
<button
            onClick={prevTestimonial}
            className=" -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg"
          >
            <IoChevronBackOutline className="text-xl" />
          </button>
          <button
            onClick={nextTestimonial}
            className=" -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg"
          >
            <IoChevronForwardOutline className="text-xl" />
          </button>
</div>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white w-96 p-6 rounded-lg shadow-lg flex-1 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <div className="mb-4">
                  <img
                    src={testimonial.logo}
                    alt={`Logo ${testimonial.company}`}
                    className="h-8"
                  />
                </div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="mb-4">{renderStars(testimonial.rating)}</div>
                <div className="flex items-center">
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>

</div>
        <div className="text-center mt-8">
          <button className="text-blue-500 border-blue-500 hover:bg-red-500 hover:text-white border-2 py-3 px-4 rounded-full hover:text-blue-600 font-medium">
            Tous les temoignages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;