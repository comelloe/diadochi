import React from 'react';
import { Diadochus } from '../types';

interface Props {
  data: Diadochus;
}

const DiadochusEntry: React.FC<Props> = ({ data }) => {
  return (
    <article 
      className="mb-12 border-b border-gray-300 pb-8 last:border-0" 
      itemScope 
      itemType="https://schema.org/Person"
      id={data.id}
    >
      <header className="mb-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-1" itemProp="name">
          {data.name}
        </h2>
        <div className="text-sm text-gray-600 font-sans uppercase tracking-widest">
          <span itemProp="jobTitle">{data.title}</span> | <span itemProp="workLocation">{data.territory}</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none text-gray-800">
        <p className="leading-relaxed mb-6" itemProp="description">
          {data.biography}
        </p>
      </div>

      <section className="bg-gray-50 p-4 rounded-sm border-l-4 border-gray-400">
        <h3 className="text-sm font-bold uppercase text-gray-500 mb-3">Recorded Relationships</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.relationships.map((rel, idx) => (
            <li key={idx} className="text-sm font-sans">
              <span className="font-semibold text-gray-900">{rel.name}</span>
              <span className="text-gray-500 mx-1">—</span>
              <span className="italic text-gray-700">{rel.type}</span>
              <br />
              <span className="text-gray-500 text-xs">{rel.details}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default DiadochusEntry;