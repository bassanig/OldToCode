import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import conteudos from '../../data/conteudos.json';
import Conteudo from '../Global/Conteudo';

const CronologiaPage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const cronologiaId = `cronologia-${id}`;
  const conteudo = conteudos[cronologiaId];

  if (!conteudo) {
    return <div>Conteúdo não encontrado</div>;
  }

  return (
    <Conteudo conteudo={conteudo[i18n.language] || conteudo['pt']} />
  );
};

export default CronologiaPage;
