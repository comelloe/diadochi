import React from 'react';
import { DIADOCHI_DATA } from './constants';
import DiadochusEntry from './components/DiadochusEntry';
import JsonLd from './components/JsonLd';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd />
      
      {/* Semantic Main Wrapper */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Simple Page Header */}
        <header className="mb-16 border-b-2 border-black pb-8">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-black mb-6 tracking-tight">
            The Diadochi
          </h1>
          <p className="text-xl md:text-2xl font-serif text-gray-600 leading-relaxed max-w-2xl">
            An exhaustive biographical record of the successors of Alexander the Great, 
            detailing their rise, their territories, and their complex web of relationships.
          </p>
        </header>

        {/* The Exhaustive List */}
        <section aria-label="List of Successors">
          {DIADOCHI_DATA.map((diadochus) => (
            <DiadochusEntry key={diadochus.id} data={diadochus} />
          ))}
        </section>

        {/* Simple Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-400 font-sans text-sm">
          <p>Historical data formatted for AI analysis and semantic web indexing.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;