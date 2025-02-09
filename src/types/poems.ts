export interface Verse {
  chinese: string;
  pinyin: string;
  english: string;
}

export interface Author {
  chinese: string;
  pinyin: string;
  english: string;
  url: string;
}

export interface Title {
  chinese: string;
  pinyin: string;
  english: string;
}

export interface Poem {
  id: string;
  title: Title;
  author: Author;
  verses: Verse[];
  form: string;
  formEnglish: string;
  url?: string;
}
