import React from 'react';
import { Pokemon, PokemonType } from '../types';

interface InfoboxProps {
  pokemon: Pokemon;
}

const getTypeColor = (type: PokemonType) => {
    switch (type) {
        case PokemonType.Fire: return 'bg-red-200';
        case PokemonType.Water: return 'bg-blue-200';
        case PokemonType.Grass: return 'bg-green-200';
        case PokemonType.Electric: return 'bg-yellow-200';
        case PokemonType.Psychic: return 'bg-pink-200';
        case PokemonType.Ice: return 'bg-cyan-100';
        case PokemonType.Dragon: return 'bg-indigo-300';
        case PokemonType.Dark: return 'bg-gray-400 text-white';
        case PokemonType.Fairy: return 'bg-pink-100';
        case PokemonType.Fighting: return 'bg-orange-300';
        case PokemonType.Steel: return 'bg-gray-300';
        case PokemonType.Ghost: return 'bg-purple-300';
        case PokemonType.Poison: return 'bg-purple-200';
        case PokemonType.Flying: return 'bg-blue-100';
        case PokemonType.Ground: return 'bg-yellow-600 text-white';
        case PokemonType.Rock: return 'bg-yellow-800 text-white';
        case PokemonType.Bug: return 'bg-lime-200';
        default: return 'bg-gray-100';
    }
};

export const Infobox: React.FC<InfoboxProps> = ({ pokemon }) => {
  return (
    <div className="infobox w-full md:w-80 float-none md:float-right ml-0 md:ml-6 mb-6 shadow-sm rounded-sm">
      <div className="bg-gray-200 text-center font-bold text-lg p-2 border-b border-gray-300">
        {pokemon.name}
      </div>
      <div className="p-2 bg-white text-center">
        <img 
            src={pokemon.imageUrl} 
            alt={pokemon.name} 
            className="mx-auto w-48 h-48 object-contain mb-2 border border-gray-100 p-1"
        />
        <div className="text-xs text-gray-500">Official artwork of {pokemon.name}</div>
      </div>
      <table className="w-full text-sm">
        <tbody>
            <tr>
                <th scope="row" className="p-1 border border-gray-300 w-1/3">National №</th>
                <td className="p-1 border border-gray-300"><strong>#{String(pokemon.id).padStart(4, '0')}</strong></td>
            </tr>
            <tr>
                <th scope="row" className="p-1 border border-gray-300">Type</th>
                <td className="p-1 border border-gray-300">
                    <div className="flex flex-wrap gap-1 justify-center">
                        {pokemon.types.map(t => (
                            <span key={t} className={`px-2 py-0.5 rounded text-xs border border-gray-400 ${getTypeColor(t)}`}>
                                {t}
                            </span>
                        ))}
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row" className="p-1 border border-gray-300">Height</th>
                <td className="p-1 border border-gray-300">{pokemon.height || "Unknown"}</td>
            </tr>
            <tr>
                <th scope="row" className="p-1 border border-gray-300">Weight</th>
                <td className="p-1 border border-gray-300">{pokemon.weight || "Unknown"}</td>
            </tr>
            <tr>
                <th scope="row" className="p-1 border border-gray-300">Abilities</th>
                <td className="p-1 border border-gray-300">
                    {pokemon.abilities && pokemon.abilities.length > 0 ? pokemon.abilities.join(", ") : "Unknown"}
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};