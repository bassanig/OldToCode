import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const SearchModal = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();
    const inputRef = React.useRef(null);

  
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            
            navigate(`/search?q=${searchQuery}`);
            setSearchQuery(''); 
           
        }
    };

 
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (

        <div 
            className="fixed inset-0 z-70 bg-black/50 backdrop-blur-sm"
            onClick={onClose} 
        >
            <div 
                className="absolute top-20 w-full flex justify-center px-4"
                onClick={(e) => e.stopPropagation()} 
            >
                <form 
                    onSubmit={handleSearch} 
                    className="relative w-full max-w-xl bg-gray-50 dark:bg-dark p-2 rounded-xl shadow-2xl ring-2 ring-amarelo/50 transition-all duration-300 transform animate-slide-down"
                    style={{ 
                        animationName: 'slide-down',
                        animationDuration: '0.3s' 
                    }}
                >
                    <style>{`
                        @keyframes slide-down {
                            from { opacity: 0; transform: translateY(-50px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>

                    <input
                        ref={inputRef}
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        
                        className="w-full py-3 pl-4 pr-12 text-xl text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none rounded-lg border-2 border-transparent focus:border-amarelo transition-colors"
                    />
                    <button
                        type="submit"
                        aria-label={t('search.button') || "Pesquisar"}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amarelo dark:text-gray-400 dark:hover:text-amarelo transition-colors"
                    >
                        {/* Ícone de Lupa SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchModal;