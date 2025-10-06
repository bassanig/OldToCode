import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const BiografiaPage = () => {
    const { id } = useParams(); 
    const { t } = useTranslation();
    
   
    const bioData = t(`biography.${id}`, { returnObjects: true }); 
    
    
    const isBioFound = bioData && typeof bioData === 'object' && Object.keys(bioData).length > 0;

    if (!isBioFound) {
        
        return <Navigate to="/nao-encontrada" replace />;
        
    }

    
    const title = bioData.title || t('outros.titulo_indisponivel');
    const bannerText = bioData.banner_text || '';

    return (
        <section className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="container2 mx-auto py-12 px-4">
                <h1 className="text-5xl font-extrabold text-amarelo mb-4">{title}</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{bannerText}</p>
                
                
                {Object.keys(bioData)
                    .filter(key => key.startsWith('p') && key !== 'p1' && key !== 'p2') // Filtra outros parágrafos se existirem
                    .map(paragraphKey => {
                        const paragraph = bioData[paragraphKey];
                        return (
                            <article key={paragraphKey} className="mb-8 p-6 bg-white dark:bg-dark-light rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-dark dark:text-white mb-3">{paragraph.title}</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 whitespace-pre-line">{paragraph.text}</p>
                                {paragraph.text2 && (
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 whitespace-pre-line">{paragraph.text2}</p>
                                )}
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default BiografiaPage;