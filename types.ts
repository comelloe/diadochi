export type RelationshipType = 
  | 'Ally' 
  | 'Rival' 
  | 'Enemy' 
  | 'Family' 
  | 'Served Under' 
  | 'Executioner' 
  | 'Successor';

export interface Relationship {
  personId: string; // ID of the other person in the database (if applicable) or name
  name: string;
  type: RelationshipType;
  details: string; // Text description of the relationship for AI context
}

export interface Diadochus {
  id: string;
  name: string;
  title: string;
  lifespan: string;
  territory: string;
  biography: string; // The "Who and What"
  relationships: Relationship[];
  // Optional fields used in data source but not currently in UI
  imageUrl?: string;
  epithet?: string;
  keyActions?: string[];
}