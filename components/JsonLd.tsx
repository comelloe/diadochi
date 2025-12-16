import React from 'react';
import { DIADOCHI_DATA } from '../constants';

const JsonLd: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "The Diadochi: Successors of Alexander the Great",
    "description": "Exhaustive biographical list of the Diadochi generals and their relationships.",
    "itemListElement": DIADOCHI_DATA.map((person, index) => ({
      "@type": "Person",
      "position": index + 1,
      "name": person.name,
      "alternateName": person.title,
      "description": person.biography,
      "birthDate": person.lifespan.split('–')[0].replace('c. ', ''),
      "deathDate": person.lifespan.split('–')[1].replace(' BC', ''),
      "jobTitle": "Diadochus",
      "worksFor": {
        "@type": "Organization",
        "name": "Macedonian Empire"
      },
      "knows": person.relationships.map(rel => ({
        "@type": "Person",
        "name": rel.name,
        "description": `${rel.type}: ${rel.details}`,
        "disambiguatingDescription": rel.type
      }))
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;