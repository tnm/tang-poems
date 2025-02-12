import { Poem } from '../types/poems';

export const poems: Poem[] = [
  {
    id: 'spring-view',
    title: {
      chinese: '春望',
      pinyin: 'Chūn Wàng',
      english: 'Spring View',
    },
    author: {
      chinese: '杜甫',
      pinyin: 'Dù Fǔ',
      english: 'Du Fu',
      url: 'https://en.wikipedia.org/wiki/Du_Fu',
    },
    form: '五言律詩',
    formEnglish: 'Five-character regulated verse',
    url: 'https://zh.wikipedia.org/wiki/春望',
    verses: [
      {
        chinese: '國破山河在',
        pinyin: 'Guó pò shān hé zài',
        english: 'The nation shattered, mountains and rivers remain',
      },
      {
        chinese: '城春草木深',
        pinyin: 'Chéng chūn cǎo mù shēn',
        english: 'City in spring, grass and trees grow deep',
      },
      {
        chinese: '感時花濺淚',
        pinyin: 'Gǎn shí huā jiàn lèi',
        english: 'Moved by the moment, flowers splash tears',
      },
      {
        chinese: '恨別鳥驚心',
        pinyin: 'Hèn bié niǎo jīng xīn',
        english: 'Grieving parting, birds startle the heart',
      },
      {
        chinese: '烽火連三月',
        pinyin: 'Fēng huǒ lián sān yuè',
        english: 'Beacon fires burn for three months now',
      },
      {
        chinese: '家書抵萬金',
        pinyin: 'Jiā shū dǐ wàn jīn',
        english: 'A letter from home worth ten thousand gold',
      },
      {
        chinese: '白頭搔更短',
        pinyin: 'Bái tóu sāo gèng duǎn',
        english: 'White hairs, scratched even shorter',
      },
      {
        chinese: '渾欲不勝簪',
        pinyin: 'Hún yù bù shèng zān',
        english: 'Too few now to hold a hairpin',
      },
    ],
  },
  {
    id: 'quiet-night-thoughts',
    title: {
      chinese: '靜夜思',
      english: 'Quiet Night Thoughts',
      pinyin: 'Jìng Yè Sī',
    },
    author: {
      chinese: '李白',
      pinyin: 'Lǐ Bái',
      english: 'Li Bai',
      url: 'https://en.wikipedia.org/wiki/Li_Bai',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikipedia.org/wiki/靜夜思',
    verses: [
      {
        chinese: '床前明月光',
        pinyin: 'Chuáng qián míng yuè guāng',
        english: 'Before my bed, the bright moonlight',
      },
      {
        chinese: '疑是地上霜',
        pinyin: 'Yí shì dì shàng shuāng',
        english: 'Seems like frost upon the ground',
      },
      {
        chinese: '舉頭望明月',
        pinyin: 'Jǔ tóu wàng míng yuè',
        english: 'Raising my head to look at the bright moon',
      },
      {
        chinese: '低頭思故鄉',
        pinyin: 'Dī tóu sī gù xiāng',
        english: 'Lowering my head to think of home',
      },
    ],
  },
  {
    id: 'yearning',
    title: {
      chinese: '相思',
      english: 'Yearning',
      pinyin: 'Xiāng Sī',
    },
    author: {
      chinese: '王維',
      pinyin: 'Wáng Wéi',
      english: 'Wang Wei',
      url: 'https://en.wikipedia.org/wiki/Wang_Wei_(Tang_dynasty)',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikipedia.org/wiki/相思_(王維)',
    verses: [
      {
        chinese: '紅豆生南國',
        pinyin: 'Hóng dòu shēng nán guó',
        english: 'Red beans grow in southern lands',
      },
      {
        chinese: '春來發幾枝',
        pinyin: 'Chūn lái fā jǐ zhī',
        english: 'In spring how many branches sprout',
      },
      {
        chinese: '願君多採擷',
        pinyin: 'Yuàn jūn duō cǎi xié',
        english: 'I wish you would gather many',
      },
      {
        chinese: '此物最相思',
        pinyin: 'Cǐ wù zuì xiāng sī',
        english: 'These things most remind me of you',
      },
    ],
  },
  {
    id: 'question-and-answer-on-the-mountain',
    title: {
      chinese: '山中問答',
      english: 'Question and Answer on the Mountain',
      pinyin: 'Shān Zhōng Wèn Dá',
    },
    author: {
      chinese: '李白',
      pinyin: 'Lǐ Bái',
      english: 'Li Bai',
      url: 'https://en.wikipedia.org/wiki/Li_Bai',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikipedia.org/wiki/山中問答',
    verses: [
      {
        chinese: '問余何意棲碧山',
        pinyin: 'Wèn yú hé yì qī bì shān',
        english: 'You ask why I lodge in these emerald hills',
      },
      {
        chinese: '笑而不答心自閒',
        pinyin: 'Xiào ér bù dá xīn zì xián',
        english: 'I smile without answering, my heart at peace',
      },
      {
        chinese: '桃花流水窅然去',
        pinyin: 'Táo huā liú shuǐ yǎn rán qù',
        english: 'Peach blossoms float on the water, flowing away',
      },
      {
        chinese: '別有天地非人間',
        pinyin: 'Bié yǒu tiān dì fēi rén jiān',
        english: 'Another world exists, beyond the human realm',
      },
    ],
  },
  {
    id: 'river-snow',
    title: {
      chinese: '江雪',
      english: 'River Snow',
      pinyin: 'Jiāng Xuě',
    },
    author: {
      chinese: '柳宗元',
      pinyin: 'Liǔ Zōng Yuán',
      english: 'Liu Zongyuan',
      url: 'https://en.wikipedia.org/wiki/Liu_Zongyuan',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikipedia.org/wiki/江雪',
    verses: [
      {
        chinese: '千山鳥飛絕',
        pinyin: 'Qiān shān niǎo fēi jué',
        english: 'A thousand mountains, no birds in flight',
      },
      {
        chinese: '萬徑人蹤滅',
        pinyin: 'Wàn jìng rén zōng miè',
        english: 'Ten thousand paths, no human trace',
      },
      {
        chinese: '孤舟簑笠翁',
        pinyin: 'Gū zhōu suō lì wēng',
        english: 'A lonely boat, a straw-cloaked man',
      },
      {
        chinese: '獨釣寒江雪',
        pinyin: 'Dú diào hán jiāng xuě',
        english: 'Fishing alone in the cold river snow',
      },
    ],
  },
  {
    id: 'farewell',
    title: {
      chinese: '送別',
      pinyin: 'Sòng Bié',
      english: 'Farewell',
    },
    author: {
      chinese: '王維',
      pinyin: 'Wáng Wéi',
      english: 'Wang Wei',
      url: 'https://en.wikipedia.org/wiki/Wang_Wei_(Tang_dynasty)',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikipedia.org/wiki/送別_(詩曲)',
    verses: [
      {
        chinese: '山中相送罷',
        pinyin: 'Shān zhōng xiāng sòng bà',
        english: 'After seeing you off in the mountains',
      },
      {
        chinese: '日暮掩柴扉',
        pinyin: 'Rì mù yǎn chái fēi',
        english: 'At sunset I close my rustic gate',
      },
      {
        chinese: '春草明年綠',
        pinyin: 'Chūn cǎo míng nián lǜ',
        english: 'Spring grass will be green again next year',
      },
      {
        chinese: '王孫歸不歸',
        pinyin: 'Wáng sūn guī bù guī',
        english: 'But will my noble friend return?',
      },
    ],
  },
  {
    id: 'thoughts-on-night',
    title: {
      chinese: '旅夜書懷',
      pinyin: 'Lǚ Yè Shū Huái',
      english: 'Thoughts on Night',
    },
    author: {
      chinese: '杜甫',
      pinyin: 'Dù Fǔ',
      english: 'Du Fu',
      url: 'https://en.wikipedia.org/wiki/Du_Fu',
    },
    form: '五言律詩',
    formEnglish: 'Five-character regulated verse',
    url: 'https://zh.wikisource.org/wiki/旅夜書懷',
    verses: [
      {
        chinese: '細草微風岸',
        pinyin: 'Xì cǎo wēi fēng àn',
        english: 'Fine grass by the wind-swept shore',
      },
      {
        chinese: '危檣獨夜舟',
        pinyin: 'Wēi qiáng dú yè zhōu',
        english: 'Tall mast on a lone night boat',
      },
      {
        chinese: '星垂平野闊',
        pinyin: 'Xīng chuí píng yě kuò',
        english: 'Stars hang over the vast plain',
      },
      {
        chinese: '月湧大江流',
        pinyin: 'Yuè yǒng dà jiāng liú',
        english: "Moon surges with the great river's flow",
      },
      {
        chinese: '名豈文章著',
        pinyin: 'Míng qǐ wén zhāng zhù',
        english: 'Could my name be known through writings?',
      },
      {
        chinese: '官應老病休',
        pinyin: 'Guān yīng lǎo bìng xiū',
        english: 'My office lost to age and illness',
      },
      {
        chinese: '飄飄何所似',
        pinyin: 'Piāo piāo hé suǒ sì',
        english: 'Drifting, what am I like?',
      },
      {
        chinese: '天地一沙鷗',
        pinyin: 'Tiān dì yī shā ōu',
        english: 'A seagull between heaven and earth',
      },
    ],
  },
  {
    id: 'yellow-crane-tower',
    title: {
      chinese: '黃鶴樓',
      pinyin: 'Huáng Hè Lóu',
      english: 'Yellow Crane Tower',
    },
    author: {
      chinese: '崔顥',
      pinyin: 'Cuī Hào',
      english: 'Cui Hao',
      url: 'https://en.wikipedia.org/wiki/Cui_Hao_(poet)',
    },
    form: '七言律詩',
    formEnglish: 'Seven-character regulated verse',
    url: 'https://zh.wikisource.org/wiki/黃鶴樓_(崔顥)',
    verses: [
      {
        chinese: '昔人已乘黃鶴去',
        pinyin: 'Xī rén yǐ chéng huáng hè qù',
        english: 'Long ago, someone rode off on a yellow crane;',
      },
      {
        chinese: '此地空餘黃鶴樓',
        pinyin: 'Cǐ dì kōng yú huáng hè lóu',
        english: 'Here remains only this Yellow Crane Tower.',
      },
      {
        chinese: '黃鶴一去不復返',
        pinyin: 'Huáng hè yī qù bù fù fǎn',
        english: 'The yellow crane, once gone, never returns;',
      },
      {
        chinese: '白雲千載空悠悠',
        pinyin: 'Bái yún qiān zǎi kōng yōu yōu',
        english: 'White clouds drift through a thousand ages.',
      },
      {
        chinese: '晴川歷歷漢陽樹',
        pinyin: 'Qíng chuān lì lì Hàn yáng shù',
        english: 'Below, Hanyang’s trees stand distinct in the clear sun;',
      },
      {
        chinese: '芳草萋萋鸚鵡洲',
        pinyin: 'Fāng cǎo qī qī yīng wǔ zhōu',
        english: 'Lush grasses flourish on Parrot Island.',
      },
      {
        chinese: '日暮鄉關何處是',
        pinyin: 'Rì mù xiāng guān hé chù shì',
        english: 'At twilight, where lies my native land?',
      },
      {
        chinese: '煙波江上使人愁',
        pinyin: 'Yān bō jiāng shàng shǐ rén chóu',
        english: 'Misty waves on the river fill the heart with sorrow.',
      },
    ],
  },
  {
    id: 'spring-dawn',
    title: {
      chinese: '春曉',
      pinyin: 'Chūn Xiǎo',
      english: 'Spring Dawn',
    },
    author: {
      chinese: '孟浩然',
      pinyin: 'Mèng Hàorán',
      english: 'Meng Haoran',
      url: 'https://en.wikipedia.org/wiki/Meng_Haoran',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/春曉_(孟浩然)',
    verses: [
      {
        chinese: '春眠不覺曉',
        pinyin: 'Chūn mián bù jué xiǎo',
        english: 'In spring, one sleeps unaware of dawn;',
      },
      {
        chinese: '處處聞啼鳥',
        pinyin: 'Chù chù wén tí niǎo',
        english: 'Everywhere, the calls of birds are heard.',
      },
      {
        chinese: '夜來風雨聲',
        pinyin: 'Yè lái fēng yǔ shēng',
        english: 'Last night came wind and rain,',
      },
      {
        chinese: '花落知多少',
        pinyin: 'Huā luò zhī duō shǎo',
        english: 'Who knows how many blossoms have fallen?',
      },
    ],
  },
  {
    id: 'a-night-mooring-by-maple-bridge',
    title: {
      chinese: '楓橋夜泊',
      pinyin: 'Fēng Qiáo Yè Bó',
      english: 'A Night Mooring by Maple Bridge',
    },
    author: {
      chinese: '張繼',
      pinyin: 'Zhāng Jì',
      english: 'Zhang Ji',
      url: 'https://en.wikipedia.org/wiki/Zhang_Ji_(poet)',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/楓橋夜泊',
    verses: [
      {
        chinese: '月落烏啼霜滿天',
        pinyin: 'Yuè luò wū tí shuāng mǎn tiān',
        english: 'Moon sets, crows cry, frost fills the sky.',
      },
      {
        chinese: '江楓漁火對愁眠',
        pinyin: 'Jiāng fēng yú huǒ duì chóu mián',
        english: 'Riverside maples and fishing lights trouble my sleep.',
      },
      {
        chinese: '姑蘇城外寒山寺',
        pinyin: 'Gū sū chéng wài Hán shān sì',
        english: 'Outside Gusu City lies Cold Mountain Temple;',
      },
      {
        chinese: '夜半鐘聲到客船',
        pinyin: 'Yè bàn zhōng shēng dào kè chuán',
        english: 'At midnight, the bell’s sound reaches my boat.',
      },
    ],
  },
  {
    id: 'night-snow',
    title: {
      chinese: '夜雪',
      pinyin: 'Yè Xuě',
      english: 'Night Snow',
    },
    author: {
      chinese: '白居易',
      pinyin: 'Bái Jūyì',
      english: 'Bai Juyi',
      url: 'https://en.wikipedia.org/wiki/Bai_Juyi',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/夜雪_(白居易)',
    verses: [
      {
        chinese: '已訝衾枕冷',
        pinyin: 'Yǐ yà qīn zhěn lěng',
        english: 'I’m startled that my quilt and pillow are cold;',
      },
      {
        chinese: '復見窗戶明',
        pinyin: 'Fù jiàn chuāng hù míng',
        english: 'Then notice the window’s sudden brightness.',
      },
      {
        chinese: '夜深知雪重',
        pinyin: 'Yè shēn zhī xuě zhòng',
        english: 'Late at night, I realize how thick the snow must be,',
      },
      {
        chinese: '時聞折竹聲',
        pinyin: 'Shí wén zhé zhú shēng',
        english: 'For now and then I hear bamboo stalks crack.',
      },
    ],
  },
  {
    id: 'qingming-festival',
    title: {
      chinese: '清明',
      pinyin: 'Qīng Míng',
      english: 'Qingming',
    },
    author: {
      chinese: '杜牧',
      pinyin: 'Dù Mù',
      english: 'Du Mu',
      url: 'https://en.wikipedia.org/wiki/Du_Mu',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/清明_(杜牧)',
    verses: [
      {
        chinese: '清明時節雨紛紛',
        pinyin: 'Qīngmíng shíjié yǔ fēn fēn',
        english: 'At Qingming Festival, rains drizzle on and on.',
      },
      {
        chinese: '路上行人欲斷魂',
        pinyin: 'Lù shàng xíngrén yù duàn hún',
        english: 'Travelers on the road seem lost in sorrow.',
      },
      {
        chinese: '借問酒家何處有',
        pinyin: 'Jiè wèn jiǔ jiā hé chù yǒu',
        english: 'I ask where a tavern can be found—',
      },
      {
        chinese: '牧童遙指杏花村',
        pinyin: 'Mù tóng yáo zhǐ xìng huā cūn',
        english: 'A herdboy points to Apricot Blossom Village afar.',
      },
    ],
  },
  {
    id: 'night-rain-sent-north',
    title: {
      chinese: '夜雨寄北',
      pinyin: 'Yè Yǔ Jì Běi',
      english: 'Night Rain Sent North',
    },
    author: {
      chinese: '李商隱',
      pinyin: 'Lǐ Shāngyǐn',
      english: 'Li Shangyin',
      url: 'https://en.wikipedia.org/wiki/Li_Shangyin',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/夜雨寄北',
    verses: [
      {
        chinese: '君問歸期未有期',
        pinyin: 'Jūn wèn guī qī wèi yǒu qī',
        english: 'You ask my return date—I cannot say.',
      },
      {
        chinese: '巴山夜雨漲秋池',
        pinyin: 'Bā shān yè yǔ zhǎng qiū chí',
        english: 'Night rain in Bashan swells the autumn pond.',
      },
      {
        chinese: '何當共剪西窗燭',
        pinyin: 'Hé dāng gòng jiǎn xī chuāng zhú',
        english: 'When shall we trim the lamp together by the western window,',
      },
      {
        chinese: '卻話巴山夜雨時',
        pinyin: 'Què huà Bā shān yè yǔ shí',
        english: 'And talk again of this Bashan night rain?',
      },
    ],
  },
  {
    id: 'farewell-to-a-friend-li-bai',
    title: {
      chinese: '送友人',
      pinyin: 'Sòng Yǒu Rén',
      english: 'Farewell to a Friend',
    },
    author: {
      chinese: '李白',
      pinyin: 'Lǐ Bái',
      english: 'Li Bai',
      url: 'https://en.wikipedia.org/wiki/Li_Bai',
    },
    form: '五言律詩',
    formEnglish: 'Five-character regulated verse',
    url: 'https://zh.wikisource.org/wiki/送友人_(李白)',
    verses: [
      {
        chinese: '青山橫北郭',
        pinyin: 'Qīng shān héng běi guō',
        english: 'Green hills stretch across the northern outskirts;',
      },
      {
        chinese: '白水繞東城',
        pinyin: 'Bái shuǐ rào dōng chéng',
        english: 'White waters circle the eastern walls.',
      },
      {
        chinese: '此地一為別',
        pinyin: 'Cǐ dì yī wéi bié',
        english: 'Here, once again, we bid farewell,',
      },
      {
        chinese: '孤蓬萬里征',
        pinyin: 'Gū péng wàn lǐ zhēng',
        english: 'Like a lone tumbleweed traveling ten thousand miles.',
      },
      {
        chinese: '浮雲遊子意',
        pinyin: 'Fú yún yóu zǐ yì',
        english: 'Drifting clouds reflect a wanderer’s heart,',
      },
      {
        chinese: '落日故人情',
        pinyin: 'Luò rì gù rén qíng',
        english: 'The setting sun speaks of old friends’ feelings.',
      },
      {
        chinese: '揮手自茲去',
        pinyin: 'Huī shǒu zì zī qù',
        english: 'We wave our hands and part from here,',
      },
      {
        chinese: '蕭蕭班馬鳴',
        pinyin: 'Xiāo xiāo bān mǎ míng',
        english: 'As the horses neigh in the rustling wind.',
      },
    ],
  },
  {
    id: 'on-climbing-stork-tower',
    title: {
      chinese: '登鸛雀樓',
      pinyin: 'Dēng Guàn Què Lóu',
      english: 'On Climbing Stork Tower',
    },
    author: {
      chinese: '王之渙',
      pinyin: 'Wáng Zhīhuàn',
      english: 'Wang Zhihuan',
      url: 'https://en.wikipedia.org/wiki/Wang_Zhihuan',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/登鸛雀樓_(王之渙)',
    verses: [
      {
        chinese: '白日依山盡',
        pinyin: 'Bái rì yī shān jìn',
        english: 'The white sun leans on the mountains, sinking.',
      },
      {
        chinese: '黃河入海流',
        pinyin: 'Huáng hé rù hǎi liú',
        english: 'The Yellow River flows onward into the sea.',
      },
      {
        chinese: '欲窮千里目',
        pinyin: 'Yù qióng qiān lǐ mù',
        english: 'If you would see a thousand miles more,',
      },
      {
        chinese: '更上一層樓',
        pinyin: 'Gèng shàng yī céng lóu',
        english: 'Climb yet another floor.',
      },
    ],
  },
  {
    id: 'climbing-high-dufu',
    title: {
      chinese: '登高',
      pinyin: 'Dēng Gāo',
      english: 'Climbing High',
    },
    author: {
      chinese: '杜甫',
      pinyin: 'Dù Fǔ',
      english: 'Du Fu',
      url: 'https://en.wikipedia.org/wiki/Du_Fu',
    },
    form: '七言律詩',
    formEnglish: 'Seven-character regulated verse',
    url: 'https://zh.wikisource.org/wiki/登高_(杜甫)',
    verses: [
      {
        chinese: '風急天高猿嘯哀',
        pinyin: 'Fēng jí tiān gāo yuán xiào āi',
        english: 'The wind is fierce, the sky high, monkeys wail in sorrow.',
      },
      {
        chinese: '渚清沙白鳥飛回',
        pinyin: 'Zhǔ qīng shā bái niǎo fēi huí',
        english: 'On clean sandbars, white birds circle above.',
      },
      {
        chinese: '無邊落木蕭蕭下',
        pinyin: 'Wú biān luò mù xiāo xiāo xià',
        english: 'Boundless falling leaves rustle to the ground,',
      },
      {
        chinese: '不盡長江滾滾來',
        pinyin: 'Bù jìn Cháng Jiāng gǔn gǔn lái',
        english: 'And the unending Yangtze rushes, rolling on.',
      },
      {
        chinese: '萬里悲秋常作客',
        pinyin: 'Wàn lǐ bēi qiū cháng zuò kè',
        english: 'A thousand miles from home, I’m always a sad guest of autumn;',
      },
      {
        chinese: '百年多病獨登臺',
        pinyin: 'Bǎi nián duō bìng dú dēng tái',
        english: 'At life’s midpoint, ill and alone, I climb this terrace.',
      },
      {
        chinese: '艱難苦恨繁霜鬢',
        pinyin: 'Jiān nán kǔ hèn fán shuāng bìn',
        english: 'Harsh troubles vex my graying hair,',
      },
      {
        chinese: '潦倒新停濁酒杯',
        pinyin: 'Lǎo dǎo xīn tíng zhuó jiǔ bēi',
        english: 'In my decline, I set aside the cloudy wine cup.',
      },
    ],
  },
  {
    id: 'sending-yuan-ii-to-anxi',
    title: {
      chinese: '送元二使安西',
      pinyin: 'Sòng Yuán Èr Shǐ Ān Xī',
      english: 'Farewell to Yuan II on His Mission to Anxi',
    },
    author: {
      chinese: '王維',
      pinyin: 'Wáng Wéi',
      english: 'Wang Wei',
      url: 'https://en.wikipedia.org/wiki/Wang_Wei_(Tang_dynasty)',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/送元二使安西',
    verses: [
      {
        chinese: '渭城朝雨浥輕塵',
        pinyin: 'Wèi chéng zhāo yǔ yì qīng chén',
        english: 'Morning rain in Weicheng dampens the light dust.',
      },
      {
        chinese: '客舍青青柳色新',
        pinyin: 'Kè shè qīng qīng liǔ sè xīn',
        english: 'Green, green by the inn are the fresh willows.',
      },
      {
        chinese: '勸君更盡一杯酒',
        pinyin: 'Quàn jūn gèng jìn yī bēi jiǔ',
        english: 'I urge you to drink one more cup of wine,',
      },
      {
        chinese: '西出陽關無故人',
        pinyin: 'Xī chū yáng guān wú gù rén',
        english: 'For west of Yang Pass, dear friends will be none.',
      },
    ],
  },
  {
    id: 'beyond-the-border',
    title: {
      chinese: '出塞',
      pinyin: 'Chū Sài',
      english: 'Beyond the Border',
    },
    author: {
      chinese: '王昌齡',
      pinyin: 'Wáng Chānglíng',
      english: 'Wang Changling',
      url: 'https://en.wikipedia.org/wiki/Wang_Changling',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/出塞_(王昌齡)',
    verses: [
      {
        chinese: '秦時明月漢時關',
        pinyin: 'Qín shí míng yuè Hàn shí guān',
        english: 'The moon of Qin times lights the passes of Han.',
      },
      {
        chinese: '萬里長征人未還',
        pinyin: 'Wàn lǐ cháng zhēng rén wèi huán',
        english: 'For ten thousand miles, soldiers march, none returning.',
      },
      {
        chinese: '但使龍城飛將在',
        pinyin: 'Dàn shǐ Lóng chéng fēi jiàng zài',
        english: 'If only the flying general of Longcheng were here,',
      },
      {
        chinese: '不教胡馬度陰山',
        pinyin: 'Bù jiào Hú mǎ dù Yīn shān',
        english: 'No foreign horses would cross Mount Yin.',
      },
    ],
  },
  {
    id: 'spring-night-rain',
    title: {
      chinese: '春夜喜雨',
      pinyin: 'Chūn Yè Xǐ Yǔ',
      english: 'Spring Night Rain',
    },
    author: {
      chinese: '杜甫',
      pinyin: 'Dù Fǔ',
      english: 'Du Fu',
      url: 'https://en.wikipedia.org/wiki/Du_Fu',
    },
    form: '五言律詩',
    formEnglish: 'Five-character regulated verse',
    url: 'https://zh.wikisource.org/wiki/春夜喜雨',
    verses: [
      {
        chinese: '好雨知時節',
        pinyin: 'Hǎo yǔ zhī shí jié',
        english: 'A timely rain knows the right season;',
      },
      {
        chinese: '當春乃發生',
        pinyin: 'Dāng chūn nǎi fā shēng',
        english: 'It comes when spring arrives.',
      },
      {
        chinese: '隨風潛入夜',
        pinyin: 'Suí fēng qián rù yè',
        english: 'Riding the wind, it steals into the night,',
      },
      {
        chinese: '潤物細無聲',
        pinyin: 'Rùn wù xì wú shēng',
        english: 'Softly nourishing all things, silent and unseen.',
      },
      {
        chinese: '野徑雲俱黑',
        pinyin: 'Yě jìng yún jù hēi',
        english: 'Dark clouds enshroud the wild paths,',
      },
      {
        chinese: '江船火獨明',
        pinyin: 'Jiāng chuán huǒ dú míng',
        english: 'Only riverboat lights glow alone.',
      },
      {
        chinese: '曉看紅濕處',
        pinyin: 'Xiǎo kàn hóng shī chù',
        english: 'At dawn, behold the crimson of moist blossoms,',
      },
      {
        chinese: '花重錦官城',
        pinyin: 'Huā zhòng jǐn guān chéng',
        english: 'Flowers heavy in brocaded Chengdu.',
      },
    ],
  },
  {
    id: 'ascending-the-leyou-plateau',
    title: {
      chinese: '登樂遊原',
      pinyin: 'Dēng Lè Yóu Yuán',
      english: 'Climbing the Leyou Plateau',
    },
    author: {
      chinese: '李商隱',
      pinyin: 'Lǐ Shāngyǐn',
      english: 'Li Shangyin',
      url: 'https://en.wikipedia.org/wiki/Li_Shangyin',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/登樂遊原',
    verses: [
      {
        chinese: '向晚意不適',
        pinyin: 'Xiàng wǎn yì bù shì',
        english: 'As evening comes, I feel ill at ease;',
      },
      {
        chinese: '驅車登古原',
        pinyin: 'Qū chē dēng gǔ yuán',
        english: 'I drive my cart to the ancient plateau.',
      },
      {
        chinese: '夕陽無限好',
        pinyin: 'Xī yáng wú xiàn hǎo',
        english: 'The sunset is boundlessly beautiful,',
      },
      {
        chinese: '只是近黃昏',
        pinyin: 'Zhǐ shì jìn huáng hūn',
        english: 'Yet it draws so close to dusk.',
      },
    ],
  },
  {
    id: 'encountering-snow-at-hibiscus-mountain',
    title: {
      chinese: '逢雪宿芙蓉山主人',
      pinyin: 'Féng Xuě Sù Fúróng Shān Zhǔ Rén',
      english: 'Encountering Snow, Lodging at Hibiscus Mountain',
    },
    author: {
      chinese: '劉長卿',
      pinyin: 'Liú Chángqīng',
      english: 'Liu Changqing',
      url: 'https://en.wikipedia.org/wiki/Liu_Changqing',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/逢雪宿芙蓉山主人',
    verses: [
      {
        chinese: '日暮蒼山遠',
        pinyin: 'Rì mù cāng shān yuǎn',
        english: 'At dusk, the distant mountains turn blue and far;',
      },
      {
        chinese: '天寒白屋貧',
        pinyin: 'Tiān hán bái wū pín',
        english: 'In the cold sky, a simple hut stands in poverty.',
      },
      {
        chinese: '柴門聞犬吠',
        pinyin: 'Chái mén wén quǎn fèi',
        english: 'By the brushwood gate, I hear dogs bark,',
      },
      {
        chinese: '風雪夜歸人',
        pinyin: 'Fēng xuě yè guī rén',
        english: 'As someone returns through wind and snow.',
      },
    ],
  },
  {
    id: 'mountain-travel',
    title: {
      chinese: '山行',
      pinyin: 'Shān Xíng',
      english: 'Mountain Travel',
    },
    author: {
      chinese: '杜牧',
      pinyin: 'Dù Mù',
      english: 'Du Mu',
      url: 'https://en.wikipedia.org/wiki/Du_Mu',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/山行_(杜牧)',
    verses: [
      {
        chinese: '遠上寒山石徑斜',
        pinyin: 'Yuǎn shàng hán shān shí jìng xié',
        english: 'Far up the cold mountain, a stone path winds steeply.',
      },
      {
        chinese: '白雲生處有人家',
        pinyin: 'Bái yún shēng chù yǒu rén jiā',
        english: 'Where white clouds arise, there dwell folk in huts.',
      },
      {
        chinese: '停車坐愛楓林晚',
        pinyin: 'Tíng chē zuò ài fēng lín wǎn',
        english: 'I halt my carriage, entranced by the maple forest at dusk,',
      },
      {
        chinese: '霜葉紅於二月花',
        pinyin: 'Shuāng yè hóng yú èr yuè huā',
        english: 'Frost-touched leaves glow redder than flowers in spring.',
      },
    ],
  },
  {
    id: 'jiangnan-spring',
    title: {
      chinese: '江南春',
      pinyin: 'Jiāng Nán Chūn',
      english: 'Jiangnan Spring',
    },
    author: {
      chinese: '杜牧',
      pinyin: 'Dù Mù',
      english: 'Du Mu',
      url: 'https://en.wikipedia.org/wiki/Du_Mu',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/江南春_(杜牧)',
    verses: [
      {
        chinese: '千里鶯啼綠映紅',
        pinyin: 'Qiān lǐ yīng tí lǜ yìng hóng',
        english: 'For a thousand miles, orioles sing amid green and red,',
      },
      {
        chinese: '水村山郭酒旗風',
        pinyin: 'Shuǐ cūn shān guō jiǔ qí fēng',
        english: 'Wine flags flutter in the breeze by riverside towns and hills.',
      },
      {
        chinese: '南朝四百八十寺',
        pinyin: 'Nán cháo sì bǎi bā shí sì',
        english: 'Four hundred and eighty temples from the Southern Dynasties,',
      },
      {
        chinese: '多少樓臺煙雨中',
        pinyin: 'Duō shǎo lóu tái yān yǔ zhōng',
        english: 'How many towers and terraces lie in mist and drizzling rain?',
      },
    ],
  },
  {
    id: 'spending-the-night-on-jiande-river',
    title: {
      chinese: '宿建德江',
      pinyin: 'Sù Jiàndé Jiāng',
      english: 'Spending the Night on the Jiande River',
    },
    author: {
      chinese: '孟浩然',
      pinyin: 'Mèng Hàorán',
      english: 'Meng Haoran',
      url: 'https://en.wikipedia.org/wiki/Meng_Haoran',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/宿建德江',
    verses: [
      {
        chinese: '移舟泊煙渚',
        pinyin: 'Yí zhōu bó yān zhǔ',
        english: 'I move my boat and moor by a misty islet,',
      },
      {
        chinese: '日暮客愁新',
        pinyin: 'Rì mù kè chóu xīn',
        english: 'At dusk, the traveler’s sorrow grows anew.',
      },
      {
        chinese: '野曠天低樹',
        pinyin: 'Yě kuàng tiān dī shù',
        english: 'Vast the wilds, the sky hangs low upon the trees;',
      },
      {
        chinese: '江清月近人',
        pinyin: 'Jiāng qīng yuè jìn rén',
        english: 'In the clear river, the moon seems close at hand.',
      },
    ],
  },
  {
    id: 'in-the-bamboo-grove',
    title: {
      chinese: '竹里館',
      pinyin: 'Zhú Lǐ Guǎn',
      english: 'In the Bamboo Grove',
    },
    author: {
      chinese: '王維',
      pinyin: 'Wáng Wéi',
      english: 'Wang Wei',
      url: 'https://en.wikipedia.org/wiki/Wang_Wei_(Tang_dynasty)',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/竹里館',
    verses: [
      {
        chinese: '獨坐幽篁裡',
        pinyin: 'Dú zuò yōu huáng lǐ',
        english: 'I sit alone within the quiet bamboo grove,',
      },
      {
        chinese: '彈琴復長嘯',
        pinyin: 'Tán qín fù cháng xiào',
        english: 'Strumming my lute, then whistling long.',
      },
      {
        chinese: '深林人不知',
        pinyin: 'Shēn lín rén bù zhī',
        english: 'In the deep forest, no one knows I’m here—',
      },
      {
        chinese: '明月來相照',
        pinyin: 'Míng yuè lái xiāng zhào',
        english: 'The bright moon arrives to shine on me.',
      },
    ],
  },
  {
    id: 'deer-enclosure',
    title: {
      chinese: '鹿柴',
      pinyin: 'Lù Chái',
      english: 'Deer Enclosure',
    },
    author: {
      chinese: '王維',
      pinyin: 'Wáng Wéi',
      english: 'Wang Wei',
      url: 'https://en.wikipedia.org/wiki/Wang_Wei_(Tang_dynasty)',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/鹿柴_(王維)',
    verses: [
      {
        chinese: '空山不見人',
        pinyin: 'Kōng shān bù jiàn rén',
        english: 'In the empty mountains, no one is seen,',
      },
      {
        chinese: '但聞人語響',
        pinyin: 'Dàn wén rén yǔ xiǎng',
        english: 'Yet faint voices echo on the air.',
      },
      {
        chinese: '返景入深林',
        pinyin: 'Fǎn jǐng rù shēn lín',
        english: 'Sunlight, returning, enters the deep forest,',
      },
      {
        chinese: '復照青苔上',
        pinyin: 'Fù zhào qīng tái shàng',
        english: 'And shines again upon the green moss.',
      },
    ],
  },
  {
    id: 'viewing-waterfall-at-mount-lu',
    title: {
      chinese: '望廬山瀑布',
      pinyin: 'Wàng Lú Shān Pù Bù',
      english: 'Viewing the Waterfall at Mount Lu',
    },
    author: {
      chinese: '李白',
      pinyin: 'Lǐ Bái',
      english: 'Li Bai',
      url: 'https://en.wikipedia.org/wiki/Li_Bai',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/望廬山瀑布',
    verses: [
      {
        chinese: '日照香爐生紫煙',
        pinyin: 'Rì zhào xiāng lú shēng zǐ yān',
        english: 'Incense Burner Peak glows with purple mist in sunlight,',
      },
      {
        chinese: '遙看瀑布掛前川',
        pinyin: 'Yáo kàn pù bù guà qián chuān',
        english: 'From afar, I see the waterfall hanging before the stream.',
      },
      {
        chinese: '飛流直下三千尺',
        pinyin: 'Fēi liú zhí xià sān qiān chǐ',
        english: 'Its torrent pours down three thousand feet,',
      },
      {
        chinese: '疑是銀河落九天',
        pinyin: 'Yí shì yín hé luò jiǔ tiān',
        english: 'As though the Milky Way were falling from heaven.',
      },
    ],
  },
  {
    id: 'grasses',
    title: {
      chinese: '賦得古原草送別',
      pinyin: 'Fù Dé Gǔ Yuán Cǎo Sòng Bié',
      english: 'Grasses',
    },
    author: {
      chinese: '白居易',
      pinyin: 'Bái Jūyì',
      english: 'Bai Juyi',
      url: 'https://en.wikipedia.org/wiki/Bai_Juyi',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/賦得古原草送別',
    verses: [
      {
        chinese: '離離原上草',
        pinyin: 'Lí lí yuán shàng cǎo',
        english: 'Lush, lush, the grass upon the ancient plain,',
      },
      {
        chinese: '一歲一枯榮',
        pinyin: 'Yī suì yī kū róng',
        english: 'Year by year, it withers and flourishes anew.',
      },
      {
        chinese: '野火燒不盡',
        pinyin: 'Yě huǒ shāo bù jìn',
        english: 'Though wildfires burn, they cannot consume it,',
      },
      {
        chinese: '春風吹又生',
        pinyin: 'Chūn fēng chuī yòu shēng',
        english: 'For spring winds blow, and it grows again.',
      },
    ],
  },
  {
    id: 'red-cliff-du-mu',
    title: {
      chinese: '赤壁',
      pinyin: 'Chì Bì',
      english: 'Red Cliff',
    },
    author: {
      chinese: '杜牧',
      pinyin: 'Dù Mù',
      english: 'Du Mu',
      url: 'https://en.wikipedia.org/wiki/Du_Mu',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/赤壁_(杜牧)',
    verses: [
      {
        chinese: '折戟沈沙鐵未銷',
        pinyin: 'Zhé jǐ chén shā tiě wèi xiāo',
        english: 'A broken halberd sinks in the sand, its iron not yet corroded,',
      },
      {
        chinese: '自將磨洗認前朝',
        pinyin: 'Zì jiāng mó xǐ rèn qián cháo',
        english: 'I scrub it clean, recalling a former dynasty.',
      },
      {
        chinese: '東風不與周郎便',
        pinyin: 'Dōng fēng bù yǔ Zhōu Láng biàn',
        english: 'Had the east wind not favored Zhou Yu,',
      },
      {
        chinese: '銅雀春深鎖二喬',
        pinyin: 'Tóng què chūn shēn suǒ èr Qiáo',
        english: 'Then the Bronze Sparrow Terrace would lock the Two Qiaos in spring.',
      },
    ],
  },
  {
    id: 'song-of-liangzhou',
    title: {
      chinese: '涼州詞',
      pinyin: 'Liáng Zhōu Cí',
      english: 'A Song of Liangzhou',
    },
    author: {
      chinese: '王翰',
      pinyin: 'Wáng Hàn',
      english: 'Wang Han',
      url: 'https://en.wikipedia.org/wiki/Wang_Han_(Tang_dynasty)',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/涼州詞_(王翰)',
    verses: [
      {
        chinese: '葡萄美酒夜光杯',
        pinyin: 'Pú táo měi jiǔ yè guāng bēi',
        english: 'In a gleaming cup, rich grape wine by night,',
      },
      {
        chinese: '欲飲琵琶馬上催',
        pinyin: 'Yù yǐn pípá mǎ shàng cuī',
        english: 'We’re about to drink when pipa strings urge us onward.',
      },
      {
        chinese: '醉臥沙場君莫笑',
        pinyin: 'Zuì wò shā chǎng jūn mò xiào',
        english: 'Do not laugh if we lie drunk on the battlefield—',
      },
      {
        chinese: '古來征戰幾人回',
        pinyin: 'Gǔ lái zhēng zhàn jǐ rén huí',
        english: 'Since ancient times, few return from war.',
      },
    ],
  },
  {
    id: 'early-departure-from-white-emperor-city',
    title: {
      chinese: '早發白帝城',
      pinyin: 'Zǎo Fā Bái Dì Chéng',
      english: 'Early Departure from White Emperor City',
    },
    author: {
      chinese: '李白',
      pinyin: 'Lǐ Bái',
      english: 'Li Bai',
      url: 'https://en.wikipedia.org/wiki/Li_Bai',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: 'https://zh.wikisource.org/wiki/早發白帝城',
    verses: [
      {
        chinese: '朝辭白帝彩雲間',
        pinyin: 'Zhāo cí Bái Dì cǎi yún jiān',
        english: 'At dawn, leaving White Emperor City in cloud-bright skies,',
      },
      {
        chinese: '千里江陵一日還',
        pinyin: 'Qiān lǐ Jiāng Líng yī rì huán',
        english: 'In one day, I reach Jiangling a thousand miles away.',
      },
      {
        chinese: '兩岸猿聲啼不住',
        pinyin: 'Liǎng àn yuán shēng tí bù zhù',
        english: 'Though monkeys cry endlessly along both banks,',
      },
      {
        chinese: '輕舟已過萬重山',
        pinyin: 'Qīng zhōu yǐ guò wàn chóng shān',
        english: 'My little boat has sailed past countless mountains.',
      },
    ],
  },
  {
    id: 'listening-to-a-monk-from-shu',
    title: {
      chinese: '聽蜀僧濬彈琴',
      pinyin: 'Tīng Shǔ Sēng Jùn Tán Qín',
      english: 'Listening to a Monk from Shu Playing the Lute',
    },
    author: {
      chinese: '李白',
      pinyin: 'Lǐ Bái',
      english: 'Li Bai',
      url: 'https://en.wikipedia.org/wiki/Li_Bai',
    },
    form: '五言絕句',
    formEnglish: 'Five-character quatrain',
    url: 'https://zh.wikisource.org/wiki/聽蜀僧濬彈琴',
    verses: [
      {
        chinese: '蜀僧抱綠綺',
        pinyin: 'Shǔ sēng bào lǜ qǐ',
        english: 'A monk from Shu cradles his jade-green lute,',
      },
      {
        chinese: '西下峨眉峰',
        pinyin: 'Xī xià Éméi fēng',
        english: 'Traveling down from lofty Emei in the west.',
      },
      {
        chinese: '為我一揮手',
        pinyin: 'Wèi wǒ yī huī shǒu',
        english: 'He gives one sweeping chord for me—',
      },
      {
        chinese: '如聽萬壑松',
        pinyin: 'Rú tīng wàn hè sōng',
        english: 'Like listening to pines in ten thousand ravines.',
      },
    ],
  },
  {
    id: 'night-of-the-fifteenth',
    title: {
      chinese: '正月十五夜',
      pinyin: 'Zhèng Yuè Shíwǔ Yè',
      english: 'Night of the Fifteenth',
    },
    author: {
      chinese: '蘇味道',
      pinyin: 'Sū Wèidào',
      english: 'Su Weidao)',
      url: 'https://zh.wikipedia.org/wiki/蘇味道',
    },
    form: '七言律詩',
    formEnglish: 'Seven-character regulated verse',
    url: '',
    verses: [
      {
        chinese: '火樹銀花合',
        pinyin: 'Huǒ shù yín huā hé',
        english: 'Fire trees and silver flowers join',
      },
      {
        chinese: '星橋鐵鎖開',
        pinyin: 'Xīng qiáo tiě suǒ kāi',
        english: 'Starry bridges, iron locks thrown open',
      },
      {
        chinese: '暗塵隨馬去',
        pinyin: 'Àn chén suí mǎ qù',
        english: 'Night dust follows the horses away',
      },
      {
        chinese: '明月逐人來',
        pinyin: 'Míng yuè zhú rén lái',
        english: 'The bright moon pursues the revelers',
      },
      {
        chinese: '遊妓皆薔薇',
        pinyin: 'Yóu jì jiē qiáng wéi',
        english: 'Courtesans wander, all in rose-like finery',
      },
      {
        chinese: '行歌盡落梅',
        pinyin: 'Xíng gē jìn luò méi',
        english: 'Their singing drifts like falling plum blossoms',
      },
      {
        chinese: '金吾不禁夜',
        pinyin: 'Jīn wú bù jìn yè',
        english: 'The guards do not forbid the night',
      },
      {
        chinese: '玉漏莫相催',
        pinyin: 'Yù lòu mò xiāng cuī',
        english: 'Let not the jade water clock hurry the hours away',
      },
    ],
  },
  {
    id: 'shangyuan-night',
    title: {
      chinese: '上元夜',
      pinyin: 'Shàng Yuán Yè',
      english: 'Night of the Shangyuan Festival',
    },
    author: {
      chinese: '崔液',
      pinyin: 'Cuī Yè',
      english: 'Cui Ye',
      url: '',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: '',
    verses: [
      {
        chinese: '玉漏銀壺且莫催',
        pinyin: 'Yù lòu yín hú qiě mò cuī',
        english: 'Let the jade water clock and silver urn not press the hours',
      },
      {
        chinese: '鐵關金鎖徹明開',
        pinyin: 'Tiě guān jīn suǒ chè míng kāi',
        english: 'Iron gates and golden locks stand open till dawn',
      },
      {
        chinese: '誰家見月能閒坐',
        pinyin: 'Shéi jiā jiàn yuè néng xián zuò',
        english: 'Who, seeing the moon, could remain quietly at home?',
      },
      {
        chinese: '何處聞燈不看來',
        pinyin: 'Hé chù wén dēng bù kàn lái',
        english: 'Where lanterns glow, who would not go to watch?',
      },
    ],
  },
  {
    id: 'lanterns-on-the-fifteenth',
    title: {
      chinese: '正月十五夜燈',
      pinyin: 'Zhèng Yuè Shíwǔ Yè Dēng',
      english: 'Lanterns on the Night of the Fifteenth',
    },
    author: {
      chinese: '張祜',
      pinyin: 'Zhāng Hù',
      english: 'Zhang Hu',
      url: '',
    },
    form: '七言絕句',
    formEnglish: 'Seven-character quatrain',
    url: '',
    verses: [
      {
        chinese: '千門開鎖萬燈明',
        pinyin: 'Qiān mén kāi suǒ wàn dēng míng',
        english: 'A thousand gates unlocked, ten thousand lanterns bright',
      },
      {
        chinese: '正月中旬動帝京',
        pinyin: 'Zhèng yuè zhōng xún dòng dì jīng',
        english: 'In mid-first month, the imperial capital stirs',
      },
      {
        chinese: '三百內人連袖舞',
        pinyin: 'Sān bǎi nèi rén lián xiù wǔ',
        english: 'Three hundred palace ladies dance, sleeves linked',
      },
      {
        chinese: '一聲菩薩萬人驚',
        pinyin: 'Yī shēng pú sà wàn rén jīng',
        english: 'One cry of “Bodhisattva!” startles ten thousand souls',
      },
    ],
  },
];
