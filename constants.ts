import { Diadochus } from './types';

export const DIADOCHI_DATA: Diadochus[] = [
  {
    id: 'perdiccas',
    name: 'Perdiccas',
    title: 'Regent of the Empire',
    lifespan: 'c. 355–321 BC',
    territory: 'Supreme Regent (Babylon)',
    biography: 'Perdiccas was the leader of the companion cavalry and the initial Regent of the empire after Alexander delivered his signet ring to him on his deathbed. He attempted to keep the empire unified under a central authority. His authoritarian approach and desire to marry Alexander\'s sister, Cleopatra, alienated the other leading generals. He was assassinated by his own officers (including Seleucus) after a failed campaign to invade Egypt.',
    relationships: [
      { personId: 'alexander', name: 'Alexander the Great', type: 'Served Under', details: 'Received Alexander\'s signet ring.' },
      { personId: 'ptolemy', name: 'Ptolemy I Soter', type: 'Enemy', details: 'Ptolemy stole Alexander\'s body, provoking Perdiccas to war.' },
      { personId: 'seleucus', name: 'Seleucus I Nicator', type: 'Executioner', details: 'Seleucus participated in the assassination of Perdiccas.' },
      { personId: 'antipater', name: 'Antipater', type: 'Rival', details: 'Fought for control of the regency.' }
    ]
  },
  {
    id: 'antipater',
    name: 'Antipater',
    title: 'Regent of Macedon',
    lifespan: 'c. 397–319 BC',
    territory: 'Macedonia and Greece',
    biography: 'An elder statesman who had served Philip II, Antipater governed Macedonia while Alexander was conquering Asia. After Alexander\'s death, he suppressed the Greek Lamian War. He became the supreme Regent after Perdiccas died. In a controversial move, he named Polyperchon, not his own son Cassander, as his successor, sparking the Second War of the Diadochi.',
    relationships: [
      { personId: 'cassander', name: 'Cassander', type: 'Family', details: 'Father of Cassander, but passed him over for succession.' },
      { personId: 'craterus', name: 'Craterus', type: 'Ally', details: 'Close ally; Antipater gave his daughter Phila to Craterus.' },
      { personId: 'olympias', name: 'Olympias', type: 'Enemy', details: 'Bitter feud with Alexander\'s mother.' }
    ]
  },
  {
    id: 'craterus',
    name: 'Craterus',
    title: 'Guardian of the Royal Family',
    lifespan: 'c. 370–321 BC',
    territory: 'Macedon (shared with Antipater)',
    biography: 'Arguably the most respected of Alexander\'s generals and loved by the infantry. He was en route to Macedon when Alexander died. He allied with Antipater against the Perdiccan faction. He died in battle against Eumenes in Asia Minor, a shock to the Macedonian world as he was considered the finest field commander.',
    relationships: [
      { personId: 'alexander', name: 'Alexander the Great', type: 'Served Under', details: 'Top infantry commander.' },
      { personId: 'eumenes', name: 'Eumenes', type: 'Enemy', details: 'Killed in battle by Eumenes\' forces.' },
      { personId: 'antipater', name: 'Antipater', type: 'Ally', details: 'Co-ruler of European territories.' }
    ]
  },
  {
    id: 'eumenes',
    name: 'Eumenes of Cardia',
    title: 'General / Satrap of Cappadocia',
    lifespan: 'c. 362–316 BC',
    territory: 'Cappadocia',
    biography: 'The only major Successor who was a Greek, not a Macedonian, initially serving as the Royal Secretary. He was a brilliant strategist who remained loyal to the Argead royal house (Alexander\'s son and brother) against the separatist generals. Despite defeating Craterus, he was eventually betrayed by his own "Silver Shields" soldiers and executed by Antigonus.',
    relationships: [
      { personId: 'antigonus', name: 'Antigonus I Monophthalmus', type: 'Enemy', details: 'Fought a long war in the east; executed by Antigonus.' },
      { personId: 'craterus', name: 'Craterus', type: 'Rival', details: 'Defeated Craterus in battle.' },
      { personId: 'alexander_iv', name: 'Alexander IV', type: 'Served Under', details: 'Remained a loyalist to Alexander\'s son.' }
    ]
  },
  {
    id: 'ptolemy',
    name: 'Ptolemy I Soter',
    title: 'Pharaoh of Egypt',
    lifespan: 'c. 367–282 BC',
    territory: 'Egypt',
    biography: 'The most pragmatic of the Diadochi. He realized early that unity was impossible and focused on securing Egypt as his personal fortress. He hijacked Alexander\'s funeral cart to legitimize his rule. He established the Ptolemaic dynasty, patronized the Library of Alexandria, and died peacefully in his bed—a rarity among the successors.',
    relationships: [
      { personId: 'alexander', name: 'Alexander the Great', type: 'Served Under', details: 'Bodyguard and friend.' },
      { personId: 'perdiccas', name: 'Perdiccas', type: 'Rival', details: 'Provoked Perdiccas into a fatal invasion of Egypt.' },
      { personId: 'seleucus', name: 'Seleucus I Nicator', type: 'Ally', details: 'Sheltered Seleucus when he was a refugee.' }
    ]
  },
  {
    id: 'antigonus',
    name: 'Antigonus I Monophthalmus',
    title: 'King (Basileus)',
    lifespan: 'c. 382–301 BC',
    territory: 'Asia Minor, Syria, Levant',
    biography: 'The "One-Eyed" general who came closest to reuniting Alexander\'s empire. An older general, he proved incredibly energetic. He controlled the royal treasury and the heartlands of Asia. His ambition forced Ptolemy, Seleucus, Lysimachus, and Cassander to form a "Great Coalition" against him. He died at the Battle of Ipsus at age 81, under a hail of javelins.',
    relationships: [
      { personId: 'demetrius', name: 'Demetrius Poliorcetes', type: 'Family', details: 'His son and chief general.' },
      { personId: 'eumenes', name: 'Eumenes', type: 'Executioner', details: 'Ordered the execution of Eumenes.' },
      { personId: 'seleucus', name: 'Seleucus I Nicator', type: 'Enemy', details: 'His former ally turned deadliest rival.' }
    ]
  },
  {
    id: 'seleucus',
    name: 'Seleucus I Nicator',
    title: 'King of the Seleucid Empire',
    lifespan: 'c. 358–281 BC',
    territory: 'Babylonia, Persia, Anatolia',
    biography: 'Starting as a commander of the elite Hypaspists, he took part in the murder of Perdiccas. He later fled to Ptolemy but returned to retake Babylon with a small force, marking the start of the Seleucid Era. He traded eastern territories to Chandragupta Maurya for 500 war elephants, which proved decisive at the Battle of Ipsus. He was the last survivor of the original generation.',
    relationships: [
      { personId: 'ptolemy', name: 'Ptolemy I Soter', type: 'Ally', details: 'Received aid from Ptolemy early in his career.' },
      { personId: 'antigonus', name: 'Antigonus I Monophthalmus', type: 'Enemy', details: 'Defeated Antigonus at Ipsus using elephants.' },
      { personId: 'lysimachus', name: 'Lysimachus', type: 'Rival', details: 'Defeated and killed Lysimachus at Corupedium.' }
    ]
  },
  {
    id: 'lysimachus',
    name: 'Lysimachus',
    title: 'King of Thrace',
    lifespan: 'c. 360–281 BC',
    territory: 'Thrace and Western Asia Minor',
    biography: 'A bodyguard of Alexander known for his physical strength. He was assigned the wild frontier of Thrace. He spent decades pacifying the tribes before joining the coalition against Antigonus. In his later years, he became an authoritarian ruler and was eventually killed by Seleucus in single combat (or battle) at Corupedium.',
    relationships: [
      { personId: 'alexander', name: 'Alexander the Great', type: 'Served Under', details: 'Bodyguard.' },
      { personId: 'seleucus', name: 'Seleucus I Nicator', type: 'Enemy', details: 'Killed by Seleucus.' },
      { personId: 'arsinoe', name: 'Arsinoe II', type: 'Family', details: 'His wife, who maneuvered for her sons.' }
    ]
  },
  {
    id: 'cassander',
    name: 'Cassander',
    title: 'King of Macedon',
    lifespan: 'c. 355–297 BC',
    territory: 'Macedon',
    biography: 'The son of Antipater. He was not a general under Alexander but rose to power in the chaos. He is the "villain" of the story for loyalists, as he ordered the execution of Alexander\'s mother Olympias, his wife Roxana, and his son Alexander IV, ending the Argead line to secure his own throne.',
    relationships: [
      { personId: 'antipater', name: 'Antipater', type: 'Family', details: 'Father, who denied him succession.' },
      { personId: 'olympias', name: 'Olympias', type: 'Executioner', details: 'Besieged and executed Alexander\'s mother.' },
      { personId: 'alexander_iv', name: 'Alexander IV', type: 'Executioner', details: 'Murdered the rightful heir.' }
    ]
  },
  {
    id: 'demetrius',
    name: 'Demetrius Poliorcetes',
    title: 'The Besieger',
    lifespan: '337–283 BC',
    territory: 'Sea (Naval Hegemony), later Macedon',
    biography: 'The flamboyant son of Antigonus. Brilliant but erratic. He liberated Athens and destroyed the Cypriot fleet of Ptolemy. After his father\'s death at Ipsus, he lived as a king without a kingdom, relying on his massive navy, until he eventually seized the throne of Macedon. He died a prisoner of Seleucus.',
    relationships: [
      { personId: 'antigonus', name: 'Antigonus I Monophthalmus', type: 'Family', details: 'Loyal son and general.' },
      { personId: 'seleucus', name: 'Seleucus I Nicator', type: 'Enemy', details: 'Captured by Seleucus.' },
      { personId: 'pyrrhus', name: 'Pyrrhus', type: 'Rival', details: 'Frequent wars over Macedon.' }
    ]
  },
  {
    id: 'polyperchon',
    name: 'Polyperchon',
    title: 'Regent of Macedon',
    lifespan: 'c. 394–303 BC',
    territory: 'Peloponnese',
    biography: 'An old general appointed by Antipater as his successor, bypassing Cassander. He failed to hold Macedon against Cassander. He allied with Olympias, but their defeat led to her death. He survived as a minor warlord in the Peloponnese for years.',
    relationships: [
      { personId: 'antipater', name: 'Antipater', type: 'Served Under', details: 'Appointed Polyperchon as Regent.' },
      { personId: 'cassander', name: 'Cassander', type: 'Enemy', details: 'Usurped Polyperchon\'s position.' },
      { personId: 'olympias', name: 'Olympias', type: 'Ally', details: 'Allied to protect Alexander\'s son.' }
    ]
  }
];