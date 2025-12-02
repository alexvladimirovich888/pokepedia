import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchPokemon } from '../data';
import { Pokemon } from '../types';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Pokemon[]>([]);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchQuery(q);
    if (q.length > 1) {
      setResults(searchPokemon(q).slice(0, 5));
    } else {
      setResults([]);
    }
  };

  const handleSelect = (id: number) => {
    navigate(`/pokemon/${id}`);
    setSearchQuery('');
    setResults([]);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="w-full md:w-48 flex-shrink-0 bg-gray-50 border-r border-gray-200 p-4 hidden md:block">
        <div className="mb-6 flex justify-center">
            <Link to="/">
                <img 
                    src="https://i.postimg.cc/VvjzRGgx/ADS-2025-12-02T195453-414.png" 
                    alt="PokéHub Logo" 
                    className="w-24 h-24 object-contain"
                />
            </Link>
        </div>
        <nav className="space-y-2 text-sm">
          <Link to="/" className="block text-blue-600 hover:underline">Main Page</Link>
          <Link to="/list" className="block text-blue-600 hover:underline">All Pokémon</Link>
          <div className="pt-4 border-t border-gray-300">
             <h3 className="font-bold text-gray-600 mb-2">Generations</h3>
             <ul className="space-y-1 pl-2">
                <li><Link to="/list?gen=1" className="text-blue-600 hover:underline">Generation I</Link></li>
                <li><Link to="/list?gen=2" className="text-blue-600 hover:underline">Generation II</Link></li>
                <li><Link to="/list?gen=3" className="text-blue-600 hover:underline">Generation III</Link></li>
                <li><Link to="/list?gen=4" className="text-blue-600 hover:underline">Generation IV</Link></li>
             </ul>
          </div>
          <div className="pt-4 border-t border-gray-300">
             <h3 className="font-bold text-gray-600 mb-2">Interaction</h3>
             <ul className="space-y-1 pl-2">
                <li><Link to="/random" className="text-blue-600 hover:underline">Random Pokémon</Link></li>
                <li><span className="text-gray-400 cursor-not-allowed">Contribute</span></li>
             </ul>
          </div>
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-50">
         <Link to="/" className="flex items-center gap-2">
            <img 
                src="https://i.postimg.cc/VvjzRGgx/ADS-2025-12-02T195453-414.png" 
                alt="Logo" 
                className="w-8 h-8 object-contain"
            />
            <span className="font-serif font-bold text-xl">PokéHub</span>
         </Link>
         <button className="text-gray-600" onClick={() => navigate('/list')}>Browse</button>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white p-4 md:p-8 wiki-content relative">
        {/* Top Bar with Search */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
             <div className="hidden md:block">
                 <h2 className="font-serif text-2xl italic text-gray-800">The Free Pokémon Encyclopedia</h2>
             </div>
             <div className="relative w-full md:w-64">
                <input 
                    type="text" 
                    placeholder="Search Pokémon..." 
                    className="w-full border border-gray-300 p-2 pl-8 rounded shadow-inner text-sm focus:outline-none focus:border-blue-400"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-2 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                
                {results.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg mt-1 z-10 max-h-60 overflow-auto">
                        {results.map(r => (
                            <div 
                                key={r.id} 
                                className="p-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2"
                                onClick={() => handleSelect(r.id)}
                            >
                                <span className="text-xs font-mono text-gray-500">#{r.id}</span>
                                <span className="text-sm font-bold text-gray-800">{r.name}</span>
                                {r.isStub && <span className="text-xs text-gray-400 italic">(stub)</span>}
                            </div>
                        ))}
                    </div>
                )}
             </div>
        </div>

        {children}

        <footer className="mt-12 pt-4 border-t border-gray-200 text-xs text-gray-500 text-center">
            <p>This page was last edited on {new Date().toLocaleDateString()}.</p>
            <p>Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply.</p>
            <p className="mt-2">Privacy Policy | About PokéHub | Disclaimers | Mobile view</p>
        </footer>
      </main>
    </div>
  );
};