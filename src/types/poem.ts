export interface ChineseText {
  traditional: string;
  simplified: string;
  pinyin?: string;
}

export interface Poem {
  id: string;
  title: {
    chinese: ChineseText;
    english: string;
  };
  author: {
    chinese: ChineseText;
    english: string;
  };
  verses: Array<{
    chinese: ChineseText;
    english: string;
  }>;
  form?: ChineseText;
  formEnglish?: string;
}
