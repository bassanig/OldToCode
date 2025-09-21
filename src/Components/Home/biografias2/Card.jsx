import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Card = ({ epoca, foto, nome, link }) => {
  const { t } = useTranslation();
  
  return (
    <NavLink to={link} className={`group block overflow-hidden w-fit max-sm:max-h-100 rounded-2xl relative shadow-lg max-sm:w-full bg-amarelo`}>
      {/* Imagem de Fundo */}
      <img 
        src={foto} 
        alt={`Foto de ${nome}`}
        className=" object-cover h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      
      {/* Gradiente para Legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      
      {/* Conteúdo de Texto */}
      <div className="absolute bottom-0 left-0 right-0 sm:p-6 text-white transition-transform duration-300 ease-in-out max-md:p-8  ">
        <span className="text-sm font-semibold  uppercase tracking-wider text-amarelo-dark">
          {t(epoca)}
        </span>
        <h1 className="mt-1 text-3xl max-xl:text-2xl font-serif font-bold text-shadow">
          {nome}
        </h1>
      </div>
    </NavLink>
  );
};

export default Card;
