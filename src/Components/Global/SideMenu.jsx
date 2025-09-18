import React from 'react';

const SideMenu = ({ sections, activeSection }) => {

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <aside className="w-1/4 sticky top-20 self-start">
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => handleClick(e, `#${section.id}`)}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}>
                  <span className={`w-3 h-3 mr-3 rounded-full transition-colors ${
                    isActive ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' : 'bg-gray-300 dark:bg-gray-600'
                  }`}></span>
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
