function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default shuffle([
  {
    id: 1,
    title: 'Bas',
    slug: 'bas-kamer',
    active: true,
    'tag-line': 'Developer slash Designer',
  },
  {
    id: 2,
    title: 'Tom',
    slug: 'tom',
    active: true,
    'tag-line': 'Fintech Developer',
  },
  {
    id: 3,
    title: 'Eric',
    slug: 'eric',
    active: true,
    'tag-line': 'Sociaal ondernemer / business development',
  },
  {
    id: 4,
    title: 'Masja',
    slug: 'masja',
    active: true,
    'tag-line': 'Social media entrepreneur',
  },
  {
    id: 5,
    title: 'Moniek',
    slug: 'moniek',
    active: true,
    'tag-line': 'Video vrouw',
  },
  {
    id: 6,
    title: 'Laura',
    slug: 'laura',
    active: false,
    'tag-line': 'Docent',
  },
  {
    id: 8,
    title: 'Michaël',
    slug: 'michael',
    active: false,
    'tag-line': 'Product Designer',
  },
  {
    id: 9,
    title: 'Joanne',
    slug: 'joanne',
    active: false,
    'tag-line': 'Freelance journalist',
  },
  {
    id: 10,
    title: 'Suzanne',
    slug: 'suzanne',
    active: false,
    'tag-line': 'Sociaal Ondernemer',
  },
  {
    id: 11,
    title: 'Nienke',
    slug: 'nienke',
    active: true,
    'tag-line': 'Design Researcher',
  },
  {
    id: 12,
    title: 'Dorieke',
    slug: 'dorieke',
    active: false,
    'tag-line': 'Jurist - Film & Privacy',
  },
  {
    id: 13,
    title: 'Maaike',
    slug: 'maaike',
    active: true,
    'tag-line': 'Docent NT2',
  },
  {
    id: 14,
    title: 'Kaoutar',
    slug: 'kaoutar',
    active: true,
    'tag-line': 'Verbinder',
  },
  {
    id: 15,
    title: 'Christine',
    slug: 'christine',
    active: true,
    'tag-line': '',
  },
  {
    id: 16,
    title: 'Liesbeth',
    slug: 'liesbeth',
    active: true,
    'tag-line': 'Co-creator, facilitator en onderzoeker',
  },
  {
    id: 17,
    title: 'Piero',
    slug: 'piero',
    active: true,
    'tag-line': 'Information designer',
  },
  {
    id: 18,
    title: 'Bas',
    slug: 'bas-mijling',
    active: true,
    'tag-line': 'Onderzoeker luchtkwaliteit',
  },
  {
    id: 19,
    title: 'Maria',
    slug: 'maria',
    active: true,
    'tag-line': '...',
  },
  {
    id: 20,
    title: 'Trudy',
    slug: 'trudy',
    active: true,
    'tag-line': '...',
  },
]);
