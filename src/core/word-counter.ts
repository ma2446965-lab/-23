export interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTimeMinutes: number;
}

export function analyzeText(text: string): TextStats {
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const words = (text.match(/[^\s]+/g) ?? []).length;
  const sentences = (text.match(/[.!?]+(\s|$)/g) ?? []).length;
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(words / 200));
  return { characters, charactersNoSpaces, words, sentences, paragraphs, readingTimeMinutes };
}
