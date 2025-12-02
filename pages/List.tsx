import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getAllPokemon } from '../data';

export const PokemonList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const gen = searchParams.get('gen');
  const allPokemon = getAllPokemon();

  // Simple generation logic approximation for simulation
  const filtered = useMemo(() => {
    if (!gen) return allPokemon.slice(0, 151); // Default to Gen 1 limit for performance
    const g = parseInt(gen);
    // Rough approximations of generations
    if (g === 1) return allPokemon.slice(0, 151);
    if (g === 2) return allPokemon.slice(151, 251);
    if (g === 3) return allPokemon.slice(251, 386);
    if (g === 4) return allPokemon.slice(386, 493);
    if (g === 5) return allPokemon.slice(493, 649);
    if (g === 6) return allPokemon.slice(649, 721);
    if (g === 7) return allPokemon.slice(721, 809);
    if (g === 8) return allPokemon.slice(809, 905);
    return allPokemon.slice(0, 50);
  }, [gen, allPokemon]);

  return (
    <div>
      <h1 className="text-2xl font-serif mb-4">
        List of Pokémon {gen ? `(Generation ${gen})` : '(First 151)'}
      </h1>
      
      <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-300">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 p-2 text-left w-20">Dex #</th>
                    <th className="border border-gray-300 p-2 text-left w-20">Image</th>
                    <th className="border border-gray-300 p-2 text-left">Name</th>
                    <th className="border border-gray-300 p-2 text-left">Type(s)</th>
                    <th className="border border-gray-300 p-2 text-left w-24">Status</th>
                </tr>
            </thead>
            <tbody>
                {filtered.map(p => (
                    <tr key={p.id} className="hover:bg-blue-50">
                        <td className="border border-gray-300 p-2 font-mono">#{String(p.id).padStart(4, '0')}</td>
                        <td className="border border-gray-300 p-2">
                             <img src={p.imageUrl} alt={p.name} className="w-10 h-10 object-cover rounded" loading="lazy" />
                        </td>
                        <td className="border border-gray-300 p-2 font-bold">
                            <Link to={`/pokemon/${p.id}`} className="text-blue-600 hover:underline block w-full h-full">
                                {p.name}
                            </Link>
                        </td>
                        <td className="border border-gray-300 p-2">
                            {p.types.join(", ")}
                        </td>
                        <td className="border border-gray-300 p-2 text-xs text-gray-500">
                            {p.isStub ? 'Stub' : 'Detailed'}
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};