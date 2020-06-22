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
    'tag-line': 'developer slash designer',
  },
  {
    id: 2,
    title: 'Tom',
    slug: 'tom',
    'tag-line': 'Freelance Consultant, Quant Developer',
  },
  {
    id: 3,
    title: 'Eric',
    slug: 'eric',
    'tag-line': 'Sociaal adviseur',
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
    title: 'Peter',
    slug: 'peter',
    'tag-line': 'Hoogleraar',
  },
  {
    id: 7,
    title: 'Laura & Karim',
    slug: 'laura-en-karim',
    'tag-line': 'Wetenschappelijk onderzoekers',
  },
  {
    id: 8,
    title: 'Michael',
    slug: 'michael',
    'tag-line': 'UX Designer',
  },
  {
    id: 9,
    title: 'Joanne',
    slug: 'joanne',
    'tag-line': 'Journalist',
  },
  {
    id: 10,
    title: 'Suzanne',
    slug: 'suzanne',
    'tag-line': 'Sociaal ondernemer',
  },
  {
    id: 11,
    title: 'Nienke',
    slug: 'nienke',
    'tag-line': 'Ontwerper',
  },
  {
    id: 12,
    title: 'Rutger',
    slug: 'rutger',
    'tag-line': '...',
  },
]);
