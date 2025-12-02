import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PokemonDetail } from './pages/Detail';
import { PokemonList } from './pages/List';
import { getAllPokemon } from './data';

const RandomPokemon = () => {
    const all = getAllPokemon();
    const randomId = all[Math.floor(Math.random() * all.length)].id;
    return <Navigate to={`/pokemon/${randomId}`} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="/list" element={<PokemonList />} />
          <Route path="/random" element={<RandomPokemon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;