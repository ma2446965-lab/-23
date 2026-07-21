const WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do',
  'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim',
  'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip',
  'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
  'velit', 'esse', 'cillum', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat',
];

export function loremIpsum(
  paragraphs = 1,
  sentencesPerParagraph = 5,
  startWithLorem = true,
): string {
  const rng = Math.random;
  const sentence = (cap: boolean) => {
    const n = 5 + Math.floor(rng() * 6);
    const words: string[] = [];
    for (let i = 0; i < n; i++) words.push(WORDS[Math.floor(rng() * WORDS.length)]!);
    let s = words.join(' ');
    s = cap ? s.charAt(0).toUpperCase() + s.slice(1) : s;
    return s + '.';
  };

  const paras: string[] = [];
  for (let p = 0; p < paragraphs; p++) {
    const sentences: string[] = [];
    for (let s = 0; s < sentencesPerParagraph; s++) {
      const cap = p === 0 && s === 0 && startWithLorem;
      sentences.push(sentence(cap));
    }
    paras.push(sentences.join(' '));
  }
  return paras.join('\n\n');
}
