import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CardHorizontal = ({ epoca, foto, nome, link }) => {
  const { t } = useTranslation();

  return (
    <NavLink to={link} className="group shadow-lg flex max-h-65 bg-gray-50 dark:bg-dark dark:bg-dark-200 rounded-lg  overflow-hidden transition-all duration-300 w-full max-sm:flex-col">
      {/* Image Section */}
      <div className="w-1/3 max-sm:w-full max-sm:h-48">
        <img
          src={foto}
          alt={`Foto de ${nome}`}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-2/3 p-6 flex flex-col justify-center max-sm:w-full">
        <span className="text-sm font-semibold uppercase tracking-wider text-amarelo-dark dark:text-amarelo">
          {t(epoca)}
        </span>
        <h1 className="mt-1 text-3xl max-lg:text-2xl font-serif font-bold text-gray-900 dark:text-gray-50">
          {nome}
        </h1>
      </div>
    </NavLink>
  );
};

export default CardHorizontal;
