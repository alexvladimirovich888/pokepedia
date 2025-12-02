import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPokemon } from '../data';

export const Home: React.FC = () => {
  const allPokemon = getAllPokemon();
  const detailedCount = allPokemon.filter(p => !p.isStub).length;
  const totalCount = allPokemon.length;
  const featured = allPokemon.filter(p => !p.isStub)[0]; // Bulbasaur or first

  return (
    <div className="space-y-6">
      <div className="border border-green-200 bg-green-50 p-4 rounded text-center">
        <h1 className="text-3xl font-serif mb-2">Welcome to the Pokémon Encyclopedia Hub</h1>
        <p className="text-sm">The free encyclopedia that anyone can edit (simulated).</p>
        <p className="text-xs text-gray-500 mt-1">{totalCount.toLocaleString()} articles in English</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-blue-200 rounded p-4">
            <h2 className="bg-blue-100 p-2 text-lg font-bold border-b border-blue-200 -mx-4 -mt-4 mb-4 rounded-t">Featured Pokémon</h2>
            <div className="flex gap-4">
                <img src={featured.imageUrl} alt={featured.name} className="w-24 h-24 object-cover border border-gray-300" />
                <div>
                    <h3 className="font-bold text-xl"><Link to={`/pokemon/${featured.id}`} className="text-blue-600 hover:underline">{featured.name}</Link></h3>
                    <p className="text-sm mt-2 line-clamp-4">{featured.description}</p>
                </div>
            </div>
        </div>

        <div className="border border-gray-200 rounded p-4">
            <h2 className="bg-gray-100 p-2 text-lg font-bold border-b border-gray-200 -mx-4 -mt-4 mb-4 rounded-t">Did you know...</h2>
            <ul className="list-disc pl-5 text-sm space-y-2">
                <li>...that <strong>Mewtwo</strong> was created by genetic manipulation?</li>
                <li>...that <strong>Mimikyu</strong> wears a rag to look like Pikachu?</li>
                <li>...that <strong>Wobbuffet</strong> cannot initiate attacks on its own?</li>
            </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-serif border-b border-gray-300 mb-4">Browse by Generation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(gen => (
                <Link key={gen} to={`/list?gen=${gen}`} className="block p-4 border border-gray-200 hover:bg-gray-50 rounded">
                    <span className="font-bold text-blue-600">Generation {gen}</span>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};