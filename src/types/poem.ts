export interface Poem {
  id: string;
  title: {
    chinese: string;
    english: string;
  };
  author: {
    chinese: string;
    english: string;
    url: string;
  };
  verses: Array<{
    chinese: string;
    english: string;
    pinyin?: string;
  }>;
  form?: string;
  formEnglish?: string;
}
