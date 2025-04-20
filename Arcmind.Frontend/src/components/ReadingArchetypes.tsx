import React from 'react';

interface Archetype {
  icon: string;
  number: number;
  title: string;
  motivation: string;
  reads: string;
  books: string[];
}

const archetypes: Archetype[] = [
  {
    icon: '🧘‍♂️',
    number: 1,
    title: 'The Inner Alchemist',
    motivation: 'Inner transformation, clarity, spiritual depth',
    reads: 'Psychology, mysticism, meditation, philosophy, healing',
    books: [
      'The Untethered Soul – Michael A. Singer',
      'Total Meditation – Deepak Chopra',
      'The Way to Love – Anthony de Mello',
      'The Wisdom of Insecurity – Alan Watts',
      'Man and His Symbols – Carl Jung'
    ]
  },
  {
    icon: '🧠',
    number: 2,
    title: 'The Systems Architect',
    motivation: 'Understanding complexity, designing better futures',
    reads: 'Systems thinking, AI, tech ethics, business, ecology',
    books: [
      'The Fifth Discipline – Peter Senge',
      'Reinventing Organizations – Frederic Laloux',
      'The Age of AI – Henry Kissinger et al.',
      'Thinking in Systems – Donella Meadows',
      'Designing Regenerative Cultures – Daniel Wahl'
    ]
  },
  {
    icon: '🧬',
    number: 3,
    title: 'The Interdisciplinary Synthesizer',
    motivation: 'Insight through unexpected connections',
    reads: 'Cognitive science, art, literature, design, philosophy',
    books: [
      'Gödel, Escher, Bach – Douglas Hofstadter',
      'The Master and His Emissary – Iain McGilchrist',
      'Why Materials Matter – Seetal Solanki',
      'The Shape of Thought – H. Clark Barrett',
      'Ways of Curating – Hans Ulrich Obrist'
    ]
  },
  {
    icon: '🔮',
    number: 4,
    title: 'The Vision Weaver',
    motivation: 'Re-enchantment, mythic storytelling, symbolic depth',
    reads: 'Mythology, folklore, narrative psychology, speculative fiction',
    books: [
      'Women Who Run With the Wolves – Clarissa Pinkola Estés',
      'The Hero With a Thousand Faces – Joseph Campbell',
      'Parable of the Sower – Octavia Butler',
      'The Red Book – Carl Jung',
      'Myth and Reality – Mircea Eliade'
    ]
  },
  {
    icon: '🌿',
    number: 5,
    title: 'The Embodied Ecologist',
    motivation: 'Healing our relationship with the Earth',
    reads: 'Ecology, indigenous wisdom, nature writing, eco-somatics',
    books: [
      'Braiding Sweetgrass – Robin Wall Kimmerer',
      'The Spell of the Sensuous – David Abram',
      'This Is Not a Drill – Extinction Rebellion',
      'The Overstory – Richard Powers',
      'Emergent Strategy – adrienne maree brown'
    ]
  },
  {
    icon: '🔥',
    number: 6,
    title: 'The Creative Provocateur',
    motivation: 'Challenge norms, spark new perceptions',
    reads: 'Art theory, cultural criticism, satire, media studies',
    books: [
      'Ways of Seeing – John Berger',
      'The Medium is the Massage – Marshall McLuhan',
      'Capitalist Realism – Mark Fisher',
      'How to Do Nothing – Jenny Odell',
      'Cruel Optimism – Lauren Berlant'
    ]
  },
  {
    icon: '🔎',
    number: 7,
    title: 'The Temporal Detective',
    motivation: 'Decode the present through the past',
    reads: 'History, biographies, memory studies, archival theory',
    books: [
      'Sapiens – Yuval Noah Harari',
      'The Arcades Project – Walter Benjamin',
      'The Histories – Herodotus',
      'Postwar – Tony Judt',
      'On Tyranny – Timothy Snyder'
    ]
  },
  {
    icon: '🧭',
    number: 8,
    title: 'The Ethical Navigator',
    motivation: 'Live with integrity in a complex world',
    reads: 'Moral philosophy, social justice, political theory',
    books: [
      'The Ethics of Ambiguity – Simone de Beauvoir',
      'Justice: What\'s the Right Thing to Do? – Michael Sandel',
      'The Mushroom at the End of the World – Anna Tsing',
      'The Righteous Mind – Jonathan Haidt',
      'The Utopia of Rules – David Graeber'
    ]
  },
  {
    icon: '🎭',
    number: 9,
    title: 'The Identity Shapeshifter',
    motivation: 'Explore selfhood, gender, memory, multiplicity',
    reads: 'Queer theory, memoir, performance, postmodern lit',
    books: [
      'Gender Trouble – Judith Butler',
      'In the Dream House – Carmen Maria Machado',
      'The Argonauts – Maggie Nelson',
      'The Body Keeps the Score – Bessel van der Kolk',
      'Notes of a Native Son – James Baldwin'
    ]
  },
  {
    icon: '📡',
    number: 10,
    title: 'The Meta-Thinker',
    motivation: 'Reflect on how we think, learn, and know',
    reads: 'Metacognition, epistemology, learning theory, logic',
    books: [
      'Superforecasting – Philip E. Tetlock',
      'The Art of Thinking Clearly – Rolf Dobelli',
      'The Reflective Practitioner – Donald Schön',
      'How We Learn – Benedict Carey',
      'The Demon-Haunted World – Carl Sagan'
    ]
  }
];

const ReadingArchetypes: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Reading Archetypes</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          Discover which reading archetype matches your personality and explore tailored book recommendations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archetypes.map((archetype) => (
            <div 
              key={archetype.number}
              className="bg-card rounded-lg shadow-lg p-6 border border-border hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{archetype.icon}</span>
                <h3 className="text-xl font-semibold text-primary">
                  {archetype.number}. {archetype.title}
                </h3>
              </div>
              
              <div className="mb-4">
                <p className="font-medium text-foreground mb-2">MOTIVATION:</p>
                <p className="text-muted-foreground">{archetype.motivation}</p>
              </div>
              
              <div className="mb-4">
                <p className="font-medium text-foreground mb-2">READS:</p>
                <div className="flex flex-wrap gap-2">
                  {archetype.reads.split(', ').map((topic, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium text-foreground mb-2">BOOK RECS:</p>
                <ul className="space-y-1">
                  {archetype.books.map((book, index) => (
                    <li key={index} className="text-muted-foreground text-sm pl-4 border-l border-primary/50">
                      {book}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingArchetypes; 