import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonById } from '../data';
import { Infobox } from '../components/Infobox';
import { useGemini } from '../services/geminiService';

export const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pokemon = getPokemonById(Number(id));
  const { askGemini, loading, error, response } = useGemini();
  const [question, setQuestion] = useState('');
  const [aiModalOpen, setAiModalOpen] = useState(false);

  if (!pokemon) {
    return <div className="p-8 text-center">Pokémon not found.</div>;
  }

  const handleAskAI = () => {
    if (!question.trim()) return;
    askGemini(pokemon.name, question);
  };

  return (
    <div className="relative">
        <h1 className="text-3xl font-serif italic mb-1 flex items-center justify-between">
            {pokemon.name}
            {/* AI Assistant Button */}
            <button 
                onClick={() => setAiModalOpen(true)}
                className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition font-sans not-italic flex items-center gap-1"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Ask Professor Oak (AI)
            </button>
        </h1>
        <div className="text-xs text-gray-500 mb-4">From Pokémon Encyclopedia Hub</div>

        <Infobox pokemon={pokemon} />

        <div className="space-y-6 md:mr-80">
            {pokemon.isStub && (
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 mb-4 text-sm">
                    <strong>Stub Article:</strong> This article about {pokemon.name} is a stub. You can help by expanding it.
                </div>
            )}

            <section>
                <p className="leading-relaxed">{pokemon.description}</p>
            </section>

            <div id="toc" className="inline-block border border-gray-300 bg-gray-50 p-3 min-w-[200px] mb-4">
                <div className="font-bold text-center text-sm mb-2">Contents</div>
                <ul className="text-sm list-decimal pl-6 space-y-1 text-blue-600">
                    {pokemon.biology && <li><a href="#biology" className="hover:underline">Biology</a></li>}
                    {pokemon.inTheGames && <li><a href="#games" className="hover:underline">In the Games</a></li>}
                    {pokemon.inTheAnime && <li><a href="#anime" className="hover:underline">In the Anime</a></li>}
                    {pokemon.evolutions.length > 0 && <li><a href="#evolution" className="hover:underline">Evolution</a></li>}
                    <li><a href="#trivia" className="hover:underline">Trivia</a></li>
                </ul>
            </div>

            {pokemon.biology && (
                <section id="biology">
                    <h2 className="text-xl font-serif mt-4 mb-2">Biology</h2>
                    <p className="text-sm leading-relaxed">{pokemon.biology}</p>
                </section>
            )}

            {pokemon.inTheGames && (
                <section id="games">
                    <h2 className="text-xl font-serif mt-4 mb-2">In the Games</h2>
                    <p className="text-sm leading-relaxed">{pokemon.inTheGames}</p>
                </section>
            )}

            {pokemon.inTheAnime && (
                <section id="anime">
                    <h2 className="text-xl font-serif mt-4 mb-2">In the Anime</h2>
                    <p className="text-sm leading-relaxed">{pokemon.inTheAnime}</p>
                </section>
            )}

            {pokemon.evolutions.length > 0 && (
                <section id="evolution">
                    <h2 className="text-xl font-serif mt-4 mb-2">Evolution</h2>
                    <div className="flex items-center gap-4 overflow-x-auto p-4 border border-gray-100 rounded bg-gray-50">
                        {/* Current Mon */}
                        <div className="text-center min-w-[100px]">
                            <img src={pokemon.imageUrl} alt={pokemon.name} className="w-20 h-20 mx-auto object-contain" />
                            <div className="font-bold text-sm mt-1">{pokemon.name}</div>
                            <div className="text-xs text-gray-500">#{pokemon.id}</div>
                        </div>

                        {/* Evolutions */}
                        {pokemon.evolutions.map((evo, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center justify-center px-2">
                                    <span className="text-lg text-gray-400">→</span>
                                    <span className="text-[10px] bg-white border border-gray-200 px-1 rounded whitespace-nowrap">{evo.condition}</span>
                                </div>
                                <Link to={`/pokemon/${evo.targetId}`} className="text-center min-w-[100px] hover:bg-gray-100 rounded p-2 transition">
                                    <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
                                        <img 
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evo.targetId}.png`}
                                            alt={evo.targetName} 
                                            className="w-full h-full object-contain" 
                                        />
                                    </div>
                                    <div className="font-bold text-sm mt-1 text-blue-600">{evo.targetName}</div>
                                </Link>
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            )}

            <section id="trivia">
                <h2 className="text-xl font-serif mt-4 mb-2">Trivia</h2>
                <ul className="list-disc pl-5 text-sm space-y-1">
                    {pokemon.trivia && <li>{pokemon.trivia}</li>}
                    <li>{pokemon.name} was designed by Game Freak.</li>
                </ul>
            </section>
        </div>

        {/* AI Modal */}
        {aiModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
                    <div className="bg-purple-600 p-4 text-white flex justify-between items-center">
                        <h3 className="font-bold">Ask Professor Oak (Gemini 3 Pro)</h3>
                        <button onClick={() => setAiModalOpen(false)} className="hover:text-gray-200">✕</button>
                    </div>
                    <div className="p-4 space-y-4">
                        <p className="text-sm text-gray-600">Ask any question about {pokemon.name} lore, stats, or strategies.</p>
                        
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                className="flex-grow border border-gray-300 p-2 rounded text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                                placeholder={`e.g. Is ${pokemon.name} good in competitive play?`}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                            />
                            <button 
                                onClick={handleAskAI}
                                disabled={loading || !question}
                                className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 disabled:opacity-50"
                            >
                                {loading ? 'Thinking...' : 'Ask'}
                            </button>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200">
                                {error}
                            </div>
                        )}

                        {response && (
                            <div className="p-4 bg-gray-50 rounded border border-gray-200 text-sm leading-relaxed">
                                <h4 className="font-bold text-purple-800 mb-1">Professor Oak says:</h4>
                                {response}
                            </div>
                        )}
                        {!response && !loading && (
                            <div className="text-xs text-gray-400 italic text-center mt-4">
                                Powered by Google Gemini. Responses may vary.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};