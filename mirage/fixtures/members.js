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
    slug: 'bas',
    'tag-line': 'Developer slash Designer',
  },
  {
    id: 2,
    title: 'Tom',
    slug: 'tom',
    'tag-line': 'Fintech Developer',
  },
  {
    id: 3,
    title: 'Eric',
    slug: 'eric',
    'tag-line': 'Sociaal ondernemer',
  },
  {
    id: 4,
    title: 'Masja',
    slug: 'masja',
    'tag-line': 'Social media entrepreneur',
  },
  {
    id: 5,
    title: 'Moniek',
    slug: 'moniek',
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
    'tag-line': 'UX Designer',
  },
  {
    id: 9,
    title: 'Joanne',
    slug: 'joanne',
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
    'tag-line': 'Ontwerper',
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
    'tag-line': 'Docent NT2',
  },
  {
    id: 14,
    title: 'Kaoutar',
    slug: 'kaoutar',
    'tag-line': 'Verbinder',
  },
]);
