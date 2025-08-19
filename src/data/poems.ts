import { Poem } from '../types/poem';

const basePoems: Poem[] = [
  {
    id: 'spring-view',
    title: {
      chinese: {
        traditional: '春望',
        simplified: '春望',
        pinyin: 'Chūn Wàng',
      },
      english: 'Spring View',
    },
    author: {
      chinese: {
        traditional: '杜甫',
        simplified: '杜甫',
        pinyin: 'Dù Fǔ',
      },
      english: 'Du Fu',
    },
    form: {
      traditional: '五言律詩',
      simplified: '五言律诗',
    },
    formEnglish: 'Five-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '國破山河在',
          simplified: '国破山河在',
          pinyin: 'Guó pò shān hé zài',
        },
        english: 'The nation is broken, but mountains and rivers remain',
      },
      {
        chinese: {
          traditional: '城春草木深',
          simplified: '城春草木深',
          pinyin: 'Chéng chūn cǎo mù shēn',
        },
        english: 'In the city, spring grass grows thick',
      },
      {
        chinese: {
          traditional: '感時花濺淚',
          simplified: '感时花溅泪',
          pinyin: 'Gǎn shí huā jiàn lèi',
        },
        english: 'Moved by the moment, flowers splash with tears',
      },
      {
        chinese: {
          traditional: '恨別鳥驚心',
          simplified: '恨别鸟惊心',
          pinyin: 'Hèn bié niǎo jīng xīn',
        },
        english: 'Grieving at parting, birds startle the heart',
      },
      {
        chinese: {
          traditional: '烽火連三月',
          simplified: '烽火连三月',
          pinyin: 'Fēng huǒ lián sān yuè',
        },
        english: 'Beacon fires burn for three months now',
      },
      {
        chinese: {
          traditional: '家書抵萬金',
          simplified: '家书抵万金',
          pinyin: 'Jiā shū dǐ wàn jīn',
        },
        english: 'A letter from home worth ten thousand gold',
      },
      {
        chinese: {
          traditional: '白頭搔更短',
          simplified: '白头搔更短',
          pinyin: 'Bái tóu sāo gèng duǎn',
        },
        english: 'White hairs, scratched even shorter',
      },
      {
        chinese: {
          traditional: '渾欲不勝簪',
          simplified: '浑欲不胜簪',
          pinyin: 'Hún yù bù shèng zān',
        },
        english: 'Too few now to hold a hairpin',
      },
    ],
  },
  {
    id: 'quiet-night-thoughts',
    title: {
      chinese: {
        traditional: '靜夜思',
        simplified: '静夜思',
        pinyin: 'Jìng Yè Sī',
      },
      english: 'Quiet Night Thoughts',
    },
    author: {
      chinese: {
        traditional: '李白',
        simplified: '李白',
        pinyin: 'Lǐ Bái',
      },
      english: 'Li Bai',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '床前明月光',
          simplified: '床前明月光',
          pinyin: 'Chuáng qián míng yuè guāng',
        },
        english: 'Before my bed, the bright moonlight',
      },
      {
        chinese: {
          traditional: '疑是地上霜',
          simplified: '疑是地上霜',
          pinyin: 'Yí shì dì shàng shuāng',
        },
        english: 'Seems like frost upon the ground',
      },
      {
        chinese: {
          traditional: '舉頭望明月',
          simplified: '举头望明月',
          pinyin: 'Jǔ tóu wàng míng yuè',
        },
        english: 'Raising my head to look at the bright moon',
      },
      {
        chinese: {
          traditional: '低頭思故鄉',
          simplified: '低头思故乡',
          pinyin: 'Dī tóu sī gù xiāng',
        },
        english: 'Lowering my head to think of home',
      },
    ],
  },
  {
    id: 'yearning',
    title: {
      chinese: {
        traditional: '相思',
        simplified: '相思',
        pinyin: 'Xiāng Sī',
      },
      english: 'Yearning',
    },
    author: {
      chinese: {
        traditional: '王維',
        simplified: '王维',
        pinyin: 'Wáng Wéi',
      },
      english: 'Wang Wei',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '紅豆生南國',
          simplified: '红豆生南国',
          pinyin: 'Hóng dòu shēng nán guó',
        },
        english: 'Red beans grow in southern lands',
      },
      {
        chinese: {
          traditional: '春來發幾枝',
          simplified: '春来发几枝',
          pinyin: 'Chūn lái fā jǐ zhī',
        },
        english: 'In spring a few branches sprout',
      },
      {
        chinese: {
          traditional: '願君多採擷',
          simplified: '愿君多采撷',
          pinyin: 'Yuàn jūn duō cǎi xié',
        },
        english: 'I wish you would gather many',
      },
      {
        chinese: {
          traditional: '此物最相思',
          simplified: '此物最相思',
          pinyin: 'Cǐ wù zuì xiāng sī',
        },
        english: 'For they speak most of my longing',
      },
    ],
  },
  {
    id: 'question-and-answer-on-the-mountain',
    title: {
      chinese: {
        traditional: '山中問答',
        simplified: '山中问答',
        pinyin: 'Shān Zhōng Wèn Dá',
      },
      english: 'Question and Answer on the Mountain',
    },
    author: {
      chinese: {
        traditional: '李白',
        simplified: '李白',
        pinyin: 'Lǐ Bái',
      },
      english: 'Li Bai',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '問余何意棲碧山',
          simplified: '问余何意栖碧山',
          pinyin: 'Wèn yú hé yì qī bì shān',
        },
        english: 'You ask why I lodge in these emerald hills',
      },
      {
        chinese: {
          traditional: '笑而不答心自閒',
          simplified: '笑而不答心自闲',
          pinyin: 'Xiào ér bù dá xīn zì xián',
        },
        english: 'I smile without answering, my heart at peace',
      },
      {
        chinese: {
          traditional: '桃花流水杳然去',
          simplified: '桃花流水杳然去',
          pinyin: 'Táo huā liú shuǐ yǎo rán qù',
        },
        english: 'Peach blossoms and flowing streams pass away into mystery',
      },
      {
        chinese: {
          traditional: '別有天地非人間',
          simplified: '别有天地非人间',
          pinyin: 'Bié yǒu tiān dì fēi rén jiān',
        },
        english: 'Another heaven and earth, not the world of men',
      },
    ],
  },
  {
    id: 'river-snow',
    title: {
      chinese: {
        traditional: '江雪',
        simplified: '江雪',
        pinyin: 'Jiāng Xuě',
      },
      english: 'River Snow',
    },
    author: {
      chinese: {
        traditional: '柳宗元',
        simplified: '柳宗元',
        pinyin: 'Liǔ Zōng Yuán',
      },
      english: 'Liu Zongyuan',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '千山鳥飛絕',
          simplified: '千山鸟飞绝',
          pinyin: 'Qiān shān niǎo fēi jué',
        },
        english: 'A thousand hills, no birds in flight',
      },
      {
        chinese: {
          traditional: '萬徑人蹤滅',
          simplified: '万径人踪灭',
          pinyin: 'Wàn jìng rén zōng miè',
        },
        english: 'Ten thousand paths, no human trace',
      },
      {
        chinese: {
          traditional: '孤舟簑笠翁',
          simplified: '孤舟蓑笠翁',
          pinyin: 'Gū zhōu suō lì wēng',
        },
        english: 'A lonely boat, a straw-cloaked man',
      },
      {
        chinese: {
          traditional: '獨釣寒江雪',
          simplified: '独钓寒江雪',
          pinyin: 'Dú diào hán jiāng xuě',
        },
        english: 'Fishing alone in the cold river snow',
      },
    ],
  },
  {
    id: 'farewell',
    title: {
      chinese: {
        traditional: '送別',
        simplified: '送别',
        pinyin: 'Sòng Bié',
      },
      english: 'Farewell',
    },
    author: {
      chinese: {
        traditional: '王維',
        simplified: '王维',
        pinyin: 'Wáng Wéi',
      },
      english: 'Wang Wei',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '山中相送罷',
          simplified: '山中相送罢',
          pinyin: 'Shān zhōng xiāng sòng bà',
        },
        english: 'After seeing you off in the mountains',
      },
      {
        chinese: {
          traditional: '日暮掩柴扉',
          simplified: '日暮掩柴扉',
          pinyin: 'Rì mù yǎn chái fēi',
        },
        english: 'At sunset I close my rustic gate',
      },
      {
        chinese: {
          traditional: '春草明年綠',
          simplified: '春草明年绿',
          pinyin: 'Chūn cǎo míng nián lǜ',
        },
        english: 'Spring grass will be green again next year',
      },
      {
        chinese: {
          traditional: '王孫歸不歸',
          simplified: '王孙归不归',
          pinyin: 'Wáng sūn guī bù guī',
        },
        english: 'But will my noble friend return?',
      },
    ],
  },
  {
    id: 'thoughts-on-night',
    title: {
      chinese: {
        traditional: '旅夜書懷',
        simplified: '旅夜书怀',
        pinyin: 'Lǚ Yè Shū Huái',
      },
      english: 'Thoughts on a Night Journey',
    },
    author: {
      chinese: {
        traditional: '杜甫',
        simplified: '杜甫',
        pinyin: 'Dù Fǔ',
      },
      english: 'Du Fu',
    },
    form: {
      traditional: '五言律詩',
      simplified: '五言律诗',
    },
    formEnglish: 'Five-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '細草微風岸',
          simplified: '细草微风岸',
          pinyin: 'Xì cǎo wēi fēng àn',
        },
        english: 'Fine grass and gentle breeze by the shore',
      },
      {
        chinese: {
          traditional: '危檣獨夜舟',
          simplified: '危樯独夜舟',
          pinyin: 'Wēi qiáng dú yè zhōu',
        },
        english: 'Tall mast, a lonely boat at night',
      },
      {
        chinese: {
          traditional: '星垂平野闊',
          simplified: '星垂平野阔',
          pinyin: 'Xīng chuí píng yě kuò',
        },
        english: 'Stars hang low over the vast plain',
      },
      {
        chinese: {
          traditional: '月湧大江流',
          simplified: '月涌大江流',
          pinyin: 'Yuè yǒng dà jiāng liú',
        },
        english: 'Moon rises as the great river flows',
      },
    ],
  },
  {
    id: 'yellow-crane-tower',
    title: {
      chinese: {
        traditional: '黃鶴樓',
        simplified: '黄鹤楼',
        pinyin: 'Huáng Hè Lóu',
      },
      english: 'Yellow Crane Tower',
    },
    author: {
      chinese: {
        traditional: '崔顥',
        simplified: '崔颢',
        pinyin: 'Cuī Hào',
      },
      english: 'Cui Hao',
    },
    form: {
      traditional: '七言律詩',
      simplified: '七言律诗',
    },
    formEnglish: 'Seven-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '昔人已乘黃鶴去',
          simplified: '昔人已乘黄鹤去',
          pinyin: 'Xí rén yǐ chéng huáng hè qù',
        },
        english: 'Long ago the sage rode off on a yellow crane,',
      },
      {
        chinese: {
          traditional: '此地空餘黃鶴樓',
          simplified: '此地空余黄鹤楼',
          pinyin: 'Cǐ dì kōng yú huáng hè lóu',
        },
        english: 'Here remains only the empty Yellow Crane Tower.',
      },
      {
        chinese: {
          traditional: '黃鶴一去不復返',
          simplified: '黄鹤一去不复返',
          pinyin: 'Huáng hè yī qù bù fù fǎn',
        },
        english: 'Once the yellow crane is gone, it will not return,',
      },
      {
        chinese: {
          traditional: '白雲千載空悠悠',
          simplified: '白云千载空悠悠',
          pinyin: 'Bái yún qiān zǎi kōng yōu yōu',
        },
        english: 'White clouds drift idly for a thousand years.',
      },
      {
        chinese: {
          traditional: '晴川歷歷漢陽樹',
          simplified: '晴川历历汉阳树',
          pinyin: 'Qíng chuān lì lì Hàn yáng shù',
        },
        english: 'In clear sunlight, the trees of Hanyang stand distinct,',
      },
      {
        chinese: {
          traditional: '芳草萋萋鸚鵡洲',
          simplified: '芳草萋萋鹦鹉洲',
          pinyin: 'Fāng cǎo qī qī Yīng wǔ zhōu',
        },
        english: 'And fragrant grasses grow lush on Parrot Islet.',
      },
      {
        chinese: {
          traditional: '日暮鄉關何處是',
          simplified: '日暮乡关何处是',
          pinyin: 'Rì mù xiāng guān hé chù shì',
        },
        english: 'At sunset, where lies my homeland?',
      },
      {
        chinese: {
          traditional: '煙波江上使人愁',
          simplified: '烟波江上使人愁',
          pinyin: 'Yān bō jiāng shàng shǐ rén chóu',
        },
        english: 'On the misty river, sorrow stirs my heart.',
      },
    ],
  },
  {
    id: 'spring-dawn',
    title: {
      chinese: {
        traditional: '春曉',
        simplified: '春晓',
        pinyin: 'Chūn Xiǎo',
      },
      english: 'Spring Dawn',
    },
    author: {
      chinese: {
        traditional: '孟浩然',
        simplified: '孟浩然',
        pinyin: 'Mèng Hàorán',
      },
      english: 'Meng Haoran',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '春眠不覺曉',
          simplified: '春眠不觉晓',
          pinyin: 'Chūn mián bù jué xiǎo',
        },
        english: 'In spring sleep, I missed the dawn',
      },
      {
        chinese: {
          traditional: '處處聞啼鳥',
          simplified: '处处闻啼鸟',
          pinyin: 'Chù chù wén tí niǎo',
        },
        english: 'Everywhere I hear birds singing',
      },
      {
        chinese: {
          traditional: '夜來風雨聲',
          simplified: '夜来风雨声',
          pinyin: 'Yè lái fēng yǔ shēng',
        },
        english: 'Last night came the sound of wind and rain',
      },
      {
        chinese: {
          traditional: '花落知多少',
          simplified: '花落知多少',
          pinyin: 'Huā luò zhī duō shǎo',
        },
        english: 'Who knows how many flowers have fallen?',
      },
    ],
  },
  {
    id: 'a-night-mooring-by-maple-bridge',
    title: {
      chinese: {
        traditional: '楓橋夜泊',
        simplified: '枫桥夜泊',
        pinyin: 'Fēng Qiáo Yè Bó',
      },
      english: 'A Night Mooring by Maple Bridge',
    },
    author: {
      chinese: {
        traditional: '張繼',
        simplified: '张继',
        pinyin: 'Zhāng Jì',
      },
      english: 'Zhang Ji',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '月落烏啼霜滿天',
          simplified: '月落乌啼霜满天',
          pinyin: 'Yuè luò wū tí shuāng mǎn tiān',
        },
        english: 'Moon sets, crows cry, frost fills the sky',
      },
      {
        chinese: {
          traditional: '江楓漁火對愁眠',
          simplified: '江枫渔火对愁眠',
          pinyin: 'Jiāng fēng yú huǒ duì chóu mián',
        },
        english: 'River maples, fishing fires face my melancholy sleep',
      },
      {
        chinese: {
          traditional: '姑蘇城外寒山寺',
          simplified: '姑苏城外寒山寺',
          pinyin: 'Gū sū chéng wài hán shān sì',
        },
        english: 'Beyond Gusu City, from Cold Mountain Temple',
      },
      {
        chinese: {
          traditional: '夜半鐘聲到客船',
          simplified: '夜半钟声到客船',
          pinyin: 'Yè bàn zhōng shēng dào kè chuán',
        },
        english: 'At midnight, the bell sound reaches my boat',
      },
    ],
  },
  {
    "id": "night-snow",
    "title": {
      "chinese": {
        "traditional": "夜雪",
        "simplified": "夜雪",
        "pinyin": "Yè Xuě"
      },
      "english": "Night Snow"
    },
    "author": {
      "chinese": {
        "traditional": "白居易",
        "simplified": "白居易",
        "pinyin": "Bái Jūyì"
      },
      "english": "Bai Juyi"
    },
    "form": {
      "traditional": "五言絕句",
      "simplified": "五言绝句"
    },
    "formEnglish": "Five-character quatrain",
    "verses": [
      {
        "chinese": {
          "traditional": "已訝衾枕冷",
          "simplified": "已讶衾枕冷",
          "pinyin": "Yǐ yà qīn zhěn lěng"
        },
        "english": "Startled that quilt and pillow are cold"
      },
      {
        "chinese": {
          "traditional": "復見窗戶明",
          "simplified": "复见窗户明",
          "pinyin": "Fù jiàn chuāng hù míng"
        },
        "english": "Again I see the window bright"
      },
      {
        "chinese": {
          "traditional": "夜深知雪重",
          "simplified": "夜深知雪重",
          "pinyin": "Yè shēn zhī xuě zhòng"
        },
        "english": "Deep in the night I know the snow is heavy"
      },
      {
        "chinese": {
          "traditional": "時聞折竹聲",
          "simplified": "时闻折竹声",
          "pinyin": "Shí wén zhé zhú shēng"
        },
        "english": "At times I hear bamboo snapping"
      }
    ]
  },
  {
    id: 'qingming-festival',
    title: {
      chinese: {
        traditional: '清明',
        simplified: '清明',
        pinyin: 'Qīng Míng',
      },
      english: 'Qingming Festival',
    },
    author: {
      chinese: {
        traditional: '杜牧',
        simplified: '杜牧',
        pinyin: 'Dù Mù',
      },
      english: 'Du Mu',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '清明時節雨紛紛',
          simplified: '清明时节雨纷纷',
          pinyin: 'Qīng míng shí jié yǔ fēn fēn',
        },
        english: 'A drizzling rain falls like tears on the Qingming Festival',
      },
      {
        chinese: {
          traditional: '路上行人欲斷魂',
          simplified: '路上行人欲断魂',
          pinyin: 'Lù shàng xíng rén yù duàn hún',
        },
        english: 'The traveler’s heart breaks on the journey',
      },
      {
        chinese: {
          traditional: '借問酒家何處有',
          simplified: '借问酒家何处有',
          pinyin: 'Jiè wèn jiǔ jiā hé chù yǒu',
        },
        english: 'Asking where can I find a tavern',
      },
      {
        chinese: {
          traditional: '牧童遙指杏花村',
          simplified: '牧童遥指杏花村',
          pinyin: 'Mù tóng yáo zhǐ xìng huā cūn',
        },
        english: 'A shepherd boy points to Apricot Blossom Village in the distance',
      },
    ],
  },
  {
    id: 'farewell-to-a-friend-li-bai',
    title: {
      chinese: {
        traditional: '送友人',
        simplified: '送友人',
        pinyin: 'Sòng Yǒu Rén',
      },
      english: 'Farewell to a Friend',
    },
    author: {
      chinese: {
        traditional: '李白',
        simplified: '李白',
        pinyin: 'Lǐ Bái',
      },
      english: 'Li Bai',
    },
    form: {
      traditional: '五言律詩',
      simplified: '五言律诗',
    },
    formEnglish: 'Five-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '青山橫北郭',
          simplified: '青山横北郭',
          pinyin: 'Qīng shān héng běi guō',
        },
        english: 'Green mountains span the northern outskirts',
      },
      {
        chinese: {
          traditional: '白水繞東城',
          simplified: '白水绕东城',
          pinyin: 'Bái shuǐ rào dōng chéng',
        },
        english: 'White waters circle the eastern city',
      },
      {
        chinese: {
          traditional: '此地一為別',
          simplified: '此地一为别',
          pinyin: 'Cǐ dì yī wéi bié',
        },
        english: 'At this place we must part',
      },
      {
        chinese: {
          traditional: '孤蓬萬里征',
          simplified: '孤蓬万里征',
          pinyin: 'Gū péng wàn lǐ zhēng',
        },
        english: 'Like a lonely tumbleweed traveling ten thousand li',
      },
      {
        chinese: {
          traditional: '浮雲遊子意',
          simplified: '浮云游子意',
          pinyin: 'Fú yún yóu zǐ yì',
        },
        english: 'Floating clouds mark the wanderer’s mood',
      },
      {
        chinese: {
          traditional: '落日故人情',
          simplified: '落日故人情',
          pinyin: 'Luò rì gù rén qíng',
        },
        english: 'Setting sun shows old friend’s feeling',
      },
      {
        chinese: {
          traditional: '揮手自此去',
          simplified: '挥手自此去',
          pinyin: 'Huī shǒu zì cǐ qù',
        },
        english: 'Waving hands, from here we part',
      },
      {
        chinese: {
          traditional: '蕭蕭班馬鳴',
          simplified: '萧萧班马鸣',
          pinyin: 'Xiāo xiāo bān mǎ míng',
        },
        english: 'Softly neigh the departing horses',
      },
    ],
  },
  {
    id: 'on-climbing-stork-tower',
    title: {
      chinese: {
        traditional: '登鸛雀樓',
        simplified: '登鹳雀楼',
        pinyin: 'Dēng Guàn Què Lóu',
      },
      english: 'On Climbing Stork Tower',
    },
    author: {
      chinese: {
        traditional: '王之渙',
        simplified: '王之涣',
        pinyin: 'Wáng Zhīhuàn',
      },
      english: 'Wang Zhihuan',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '白日依山盡',
          simplified: '白日依山尽',
          pinyin: 'Bái rì yī shān jìn',
        },
        english: 'The white sun rests on the mountain’s edge',
      },
      {
        chinese: {
          traditional: '黃河入海流',
          simplified: '黄河入海流',
          pinyin: 'Huáng hé rù hǎi liú',
        },
        english: 'The Yellow River flows into the sea',
      },
      {
        chinese: {
          traditional: '欲窮千里目',
          simplified: '欲穷千里目',
          pinyin: 'Yù qióng qiān lǐ mù',
        },
        english: 'To see a thousand li further',
      },
      {
        chinese: {
          traditional: '更上一層樓',
          simplified: '更上一层楼',
          pinyin: 'Gèng shàng yī céng lóu',
        },
        english: 'Climb one more floor of the tower',
      },
    ],
  },
  {
    id: 'climbing-high-dufu',
    title: {
      chinese: {
        traditional: '登高',
        simplified: '登高',
        pinyin: 'Dēng Gāo',
      },
      english: 'Climbing High',
    },
    author: {
      chinese: {
        traditional: '杜甫',
        simplified: '杜甫',
        pinyin: 'Dù Fǔ',
      },
      english: 'Du Fu',
    },
    form: {
      traditional: '七言律詩',
      simplified: '七言律诗',
    },
    formEnglish: 'Seven-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '風急天高猿嘯哀',
          simplified: '风急天高猿啸哀',
          pinyin: 'Fēng jí tiān gāo yuán xiào āi',
        },
        english: 'The wind is fierce, the sky high, monkeys wail in sorrow.',
      },
      {
        chinese: {
          traditional: '渚清沙白鳥飛回',
          simplified: '渚清沙白鸟飞回',
          pinyin: 'Zhǔ qīng shā bái niǎo fēi huí',
        },
        english: 'On clean sandbars, white birds circle above.',
      },
      {
        chinese: {
          traditional: '無邊落木蕭蕭下',
          simplified: '无边落木萧萧下',
          pinyin: 'Wú biān luò mù xiāo xiāo xià',
        },
        english: 'Boundless falling leaves rustle to the ground,',
      },
      {
        chinese: {
          traditional: '不盡長江滾滾來',
          simplified: '不尽长江滚滚来',
          pinyin: 'Bù jìn Cháng Jiāng gǔn gǔn lái',
        },
        english: 'And the unending Yangtze rushes, rolling on.',
      },
      {
        chinese: {
          traditional: '萬里悲秋常作客',
          simplified: '万里悲秋常作客',
          pinyin: 'Wàn lǐ bēi qiū cháng zuò kè',
        },
        english: 'A thousand miles from home, I’m always a sad guest of autumn;',
      },
      {
        chinese: {
          traditional: '百年多病獨登臺',
          simplified: '百年多病独登台',
          pinyin: 'Bǎi nián duō bìng dú dēng tái',
        },
        english: 'At life’s midpoint, ill and alone, I climb this terrace.',
      },
      {
        chinese: {
          traditional: '艱難苦恨繁霜鬢',
          simplified: '艰难苦恨繁霜鬓',
          pinyin: 'Jiān nán kǔ hèn fán shuāng bìn',
        },
        english: 'Harsh troubles vex my graying hair,',
      },
      {
        chinese: {
          traditional: '潦倒新停濁酒杯',
          simplified: '潦倒新停浊酒杯',
          pinyin: 'Lǎo dǎo xīn tíng zhuó jiǔ bēi',
        },
        english: 'In my decline, I set aside the cloudy wine cup.',
      },
    ],
  },
  {
    id: 'sending-yuan-ii-to-anxi',
    title: {
      chinese: {
        traditional: '送元二使安西',
        simplified: '送元二使安西',
        pinyin: 'Sòng Yuán Èr Shǐ Ān Xī',
      },
      english: 'Farewell to Yuan II on His Mission to Anxi',
    },
    author: {
      chinese: {
        traditional: '王維',
        simplified: '王维',
        pinyin: 'Wáng Wéi',
      },
      english: 'Wang Wei',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '渭城朝雨浥輕塵',
          simplified: '渭城朝雨浥轻尘',
          pinyin: 'Wèi chéng zhāo yǔ yì qīng chén',
        },
        english: 'Morning rain in Weicheng dampens the light dust.',
      },
      {
        chinese: {
          traditional: '客舍青青柳色新',
          simplified: '客舍青青柳色新',
          pinyin: 'Kè shè qīng qīng liǔ sè xīn',
        },
        english: 'Green, green by the inn are the fresh willows.',
      },
      {
        chinese: {
          traditional: '勸君更盡一杯酒',
          simplified: '劝君更尽一杯酒',
          pinyin: 'Quàn jūn gèng jìn yī bēi jiǔ',
        },
        english: 'I urge you to drink one more cup of wine,',
      },
      {
        chinese: {
          traditional: '西出陽關無故人',
          simplified: '西出阳关无故人',
          pinyin: 'Xī chū yáng guān wú gù rén',
        },
        english: 'For west of Yang Pass, dear friends will be none.',
      },
    ],
  },
  {
    id: 'beyond-the-border',
    title: {
      chinese: {
        traditional: '出塞',
        simplified: '出塞',
        pinyin: 'Chū Sài',
      },
      english: 'Beyond the Border',
    },
    author: {
      chinese: {
        traditional: '王昌齡',
        simplified: '王昌龄',
        pinyin: 'Wáng Chānglíng',
      },
      english: 'Wang Changling',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '秦時明月漢時關',
          simplified: '秦时明月汉时关',
          pinyin: 'Qín shí míng yuè Hàn shí guān',
        },
        english: 'The moon of Qin times lights the passes of Han.',
      },
      {
        chinese: {
          traditional: '萬里長征人未還',
          simplified: '万里长征人未还',
          pinyin: 'Wàn lǐ cháng zhēng rén wèi huán',
        },
        english: 'For ten thousand miles, soldiers march, none returning.',
      },
      {
        chinese: {
          traditional: '但使龍城飛將在',
          simplified: '但使龙城飞将在',
          pinyin: 'Dàn shǐ Lóng chéng fēi jiàng zài',
        },
        english: 'If only the flying general of Longcheng were here,',
      },
      {
        chinese: {
          traditional: '不教胡馬度陰山',
          simplified: '不教胡马度阴山',
          pinyin: 'Bù jiào Hú mǎ dù Yīn shān',
        },
        english: 'No foreign horses would cross Mount Yin.',
      },
    ],
  },
  {
    id: 'spring-night-rain',
    title: {
      chinese: {
        traditional: '春夜喜雨',
        simplified: '春夜喜雨',
        pinyin: 'Chūn Yè Xǐ Yǔ',
      },
      english: 'Spring Night Rain',
    },
    author: {
      chinese: {
        traditional: '杜甫',
        simplified: '杜甫',
        pinyin: 'Dù Fǔ',
      },
      english: 'Du Fu',
    },
    form: {
      traditional: '五言律詩',
      simplified: '五言律诗',
    },
    formEnglish: 'Five-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '好雨知時節',
          simplified: '好雨知时节',
          pinyin: 'Hǎo yǔ zhī shí jié',
        },
        english: 'A timely rain knows the right season;',
      },
      {
        chinese: {
          traditional: '當春乃發生',
          simplified: '当春乃发生',
          pinyin: 'Dāng chūn nǎi fā shēng',
        },
        english: 'It comes when spring arrives.',
      },
      {
        chinese: {
          traditional: '隨風潛入夜',
          simplified: '随风潜入夜',
          pinyin: 'Suí fēng qián rù yè',
        },
        english: 'Riding the wind, it steals into the night,',
      },
      {
        chinese: {
          traditional: '潤物細無聲',
          simplified: '润物细无声',
          pinyin: 'Rùn wù xì wú shēng',
        },
        english: 'Softly nourishing all things, silent and unseen.',
      },
      {
        chinese: {
          traditional: '野徑雲俱黑',
          simplified: '野径云俱黑',
          pinyin: 'Yě jìng yún jù hēi',
        },
        english: 'Dark clouds enshroud the wild paths,',
      },
      {
        chinese: {
          traditional: '江船火獨明',
          simplified: '江船火独明',
          pinyin: 'Jiāng chuán huǒ dú míng',
        },
        english: 'Only riverboat lights glow alone.',
      },
      {
        chinese: {
          traditional: '曉看紅濕處',
          simplified: '晓看红湿处',
          pinyin: 'Xiǎo kàn hóng shī chù',
        },
        english: 'At dawn, behold the crimson of moist blossoms,',
      },
      {
        chinese: {
          traditional: '花重錦官城',
          simplified: '花重锦官城',
          pinyin: 'Huā zhòng jǐn guān chéng',
        },
        english: 'Flowers heavy in brocaded Chengdu.',
      },
    ],
  },
  {
    id: 'ascending-the-leyou-plateau',
    title: {
      chinese: {
        traditional: '登樂遊原',
        simplified: '登乐游原',
        pinyin: 'Dēng Lè Yóu Yuán',
      },
      english: 'Climbing the Leyou Plateau',
    },
    author: {
      chinese: {
        traditional: '李商隱',
        simplified: '李商隐',
        pinyin: 'Lǐ Shāngyǐn',
      },
      english: 'Li Shangyin',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '向晚意不適',
          simplified: '向晚意不适',
          pinyin: 'Xiàng wǎn yì bù shì',
        },
        english: 'As evening comes, I feel ill at ease;',
      },
      {
        chinese: {
          traditional: '驅車登古原',
          simplified: '驱车登古原',
          pinyin: 'Qū chē dēng gǔ yuán',
        },
        english: 'I drive my cart to the ancient plateau.',
      },
      {
        chinese: {
          traditional: '夕陽無限好',
          simplified: '夕阳无限好',
          pinyin: 'Xī yáng wú xiàn hǎo',
        },
        english: 'The sunset is boundlessly beautiful,',
      },
      {
        chinese: {
          traditional: '只是近黃昏',
          simplified: '只是近黄昏',
          pinyin: 'Zhǐ shì jìn huáng hūn',
        },
        english: 'Yet it draws so close to dusk.',
      },
    ],
  },
  {
    id: 'encountering-snow-at-hibiscus-mountain',
    title: {
      chinese: {
        traditional: '逢雪宿芙蓉山主人',
        simplified: '逢雪宿芙蓉山主人',
        pinyin: 'Féng Xuě Sù Fúróng Shān Zhǔ Rén',
      },
      english: 'Encountering Snow, Lodging at Hibiscus Mountain',
    },
    author: {
      chinese: {
        traditional: '劉長卿',
        simplified: '刘长卿',
        pinyin: 'Liú Chángqīng',
      },
      english: 'Liu Changqing',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '日暮蒼山遠',
          simplified: '日暮苍山远',
          pinyin: 'Rì mù cāng shān yuǎn',
        },
        english: 'At dusk, the distant mountains turn blue and far;',
      },
      {
        chinese: {
          traditional: '天寒白屋貧',
          simplified: '天寒白屋贫',
          pinyin: 'Tiān hán bái wū pín',
        },
        english: 'In the cold sky, a simple hut stands in poverty.',
      },
      {
        chinese: {
          traditional: '柴門聞犬吠',
          simplified: '柴门闻犬吠',
          pinyin: 'Chái mén wén quǎn fèi',
        },
        english: 'By the brushwood gate, I hear dogs bark,',
      },
      {
        chinese: {
          traditional: '風雪夜歸人',
          simplified: '风雪夜归人',
          pinyin: 'Fēng xuě yè guī rén',
        },
        english: 'As someone returns through wind and snow.',
      },
    ],
  },
  {
    id: 'mountain-travel',
    title: {
      chinese: {
        traditional: '山行',
        simplified: '山行',
        pinyin: 'Shān Xíng',
      },
      english: 'Mountain Travel',
    },
    author: {
      chinese: {
        traditional: '杜牧',
        simplified: '杜牧',
        pinyin: 'Dù Mù',
      },
      english: 'Du Mu',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '遠上寒山石徑斜',
          simplified: '远上寒山石径斜',
          pinyin: 'Yuǎn shàng hán shān shí jìng xié',
        },
        english: 'Far up the cold mountain, a stone path winds steeply.',
      },
      {
        chinese: {
          traditional: '白雲生處有人家',
          simplified: '白云生处有人家',
          pinyin: 'Bái yún shēng chù yǒu rén jiā',
        },
        english: 'Where white clouds arise, there dwell folk in huts.',
      },
      {
        chinese: {
          traditional: '停車坐愛楓林晚',
          simplified: '停车坐爱枫林晚',
          pinyin: 'Tíng chē zuò ài fēng lín wǎn',
        },
        english: 'I halt my carriage, entranced by the maple forest at dusk,',
      },
      {
        chinese: {
          traditional: '霜葉紅於二月花',
          simplified: '霜叶红于二月花',
          pinyin: 'Shuāng yè hóng yú èr yuè huā',
        },
        english: 'Frost-touched leaves glow redder than flowers in spring.',
      },
    ],
  },
  {
    id: 'jiangnan-spring',
    title: {
      chinese: {
        traditional: '江南春',
        simplified: '江南春',
        pinyin: 'Jiāng Nán Chūn',
      },
      english: 'Jiangnan Spring',
    },
    author: {
      chinese: {
        traditional: '杜牧',
        simplified: '杜牧',
        pinyin: 'Dù Mù',
      },
      english: 'Du Mu',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '千里鶯啼綠映紅',
          simplified: '千里莺啼绿映红',
          pinyin: 'Qiān lǐ yīng tí lǜ yìng hóng',
        },
        english: 'For a thousand miles, orioles sing amid green and red,',
      },
      {
        chinese: {
          traditional: '水村山郭酒旗風',
          simplified: '水村山郭酒旗风',
          pinyin: 'Shuǐ cūn shān guō jiǔ qí fēng',
        },
        english: 'Wine flags flutter in the breeze by riverside towns and hills.',
      },
      {
        chinese: {
          traditional: '南朝四百八十寺',
          simplified: '南朝四百八十寺',
          pinyin: 'Nán cháo sì bǎi bā shí sì',
        },
        english: 'Four hundred and eighty temples from the Southern Dynasties,',
      },
      {
        chinese: {
          traditional: '多少樓臺煙雨中',
          simplified: '多少楼台烟雨中',
          pinyin: 'Duō shǎo lóu tái yān yǔ zhōng',
        },
        english: 'How many towers and terraces lie in mist and drizzling rain?',
      },
    ],
  },
  {
    id: 'spending-the-night-on-jiande-river',
    title: {
      chinese: {
        traditional: '宿建德江',
        simplified: '宿建德江',
        pinyin: 'Sù Jiàndé Jiāng',
      },
      english: 'Spending the Night on the Jiande River',
    },
    author: {
      chinese: {
        traditional: '孟浩然',
        simplified: '孟浩然',
        pinyin: 'Mèng Hàorán',
      },
      english: 'Meng Haoran',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '移舟泊煙渚',
          simplified: '移舟泊烟渚',
          pinyin: 'Yí zhōu bó yān zhǔ',
        },
        english: 'I move my boat and moor by a misty islet,',
      },
      {
        chinese: {
          traditional: '日暮客愁新',
          simplified: '日暮客愁新',
          pinyin: 'Rì mù kè chóu xīn',
        },
        english: 'At dusk, the traveler’s sorrow grows anew.',
      },
      {
        chinese: {
          traditional: '野曠天低樹',
          simplified: '野旷天低树',
          pinyin: 'Yě kuàng tiān dī shù',
        },
        english: 'Vast the wilds, the sky hangs low upon the trees;',
      },
      {
        chinese: {
          traditional: '江清月近人',
          simplified: '江清月近人',
          pinyin: 'Jiāng qīng yuè jìn rén',
        },
        english: 'In the clear river, the moon seems close at hand.',
      },
    ],
  },
  {
    id: 'in-the-bamboo-grove',
    title: {
      chinese: {
        traditional: '竹里館',
        simplified: '竹里馆',
        pinyin: 'Zhú Lǐ Guǎn',
      },
      english: 'In the Bamboo Grove',
    },
    author: {
      chinese: {
        traditional: '王維',
        simplified: '王维',
        pinyin: 'Wáng Wéi',
      },
      english: 'Wang Wei',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '獨坐幽篁裡',
          simplified: '独坐幽篁里',
          pinyin: 'Dú zuò yōu huáng lǐ',
        },
        english: 'I sit alone within the quiet bamboo grove,',
      },
      {
        chinese: {
          traditional: '彈琴復長嘯',
          simplified: '弹琴复长啸',
          pinyin: 'Tán qín fù cháng xiào',
        },
        english: 'Strumming my lute, then whistling long.',
      },
      {
        chinese: {
          traditional: '深林人不知',
          simplified: '深林人不知',
          pinyin: 'Shēn lín rén bù zhī',
        },
        english: 'In the deep forest, no one knows I’m here—',
      },
      {
        chinese: {
          traditional: '明月來相照',
          simplified: '明月来相照',
          pinyin: 'Míng yuè lái xiāng zhào',
        },
        english: 'The bright moon arrives to shine on me.',
      },
    ],
  },
  {
    id: 'deer-enclosure',
    title: {
      chinese: {
        traditional: '鹿柴',
        simplified: '鹿柴',
        pinyin: 'Lù Chái',
      },
      english: 'Deer Enclosure',
    },
    author: {
      chinese: {
        traditional: '王維',
        simplified: '王维',
        pinyin: 'Wáng Wéi',
      },
      english: 'Wang Wei',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '空山不見人',
          simplified: '空山不见人',
          pinyin: 'Kōng shān bù jiàn rén',
        },
        english: 'In the empty mountains, no one is seen,',
      },
      {
        chinese: {
          traditional: '但聞人語響',
          simplified: '但闻人语响',
          pinyin: 'Dàn wén rén yǔ xiǎng',
        },
        english: 'Yet faint voices echo on the air.',
      },
      {
        chinese: {
          traditional: '返景入深林',
          simplified: '返景入深林',
          pinyin: 'Fǎn jǐng rù shēn lín',
        },
        english: 'Sunlight, returning, enters the deep forest,',
      },
      {
        chinese: {
          traditional: '復照青苔上',
          simplified: '复照青苔上',
          pinyin: 'Fù zhào qīng tái shàng',
        },
        english: 'And shines again upon the green moss.',
      },
    ],
  },
  {
    id: 'viewing-waterfall-at-mount-lu',
    title: {
      chinese: {
        traditional: '望廬山瀑布',
        simplified: '望庐山瀑布',
        pinyin: 'Wàng Lú Shān Pù Bù',
      },
      english: 'Viewing the Waterfall at Mount Lu',
    },
    author: {
      chinese: {
        traditional: '李白',
        simplified: '李白',
        pinyin: 'Lǐ Bái',
      },
      english: 'Li Bai',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '日照香爐生紫煙',
          simplified: '日照香炉生紫烟',
          pinyin: 'Rì zhào xiāng lú shēng zǐ yān',
        },
        english: 'Incense Burner Peak glows with purple smoke in sunlight,',
      },
      {
        chinese: {
          traditional: '遙看瀑布掛前川',
          simplified: '遥看瀑布挂前川',
          pinyin: 'Yáo kàn pù bù guà qián chuān',
        },
        english: 'From afar I see the waterfall hanging before the river.',
      },
      {
        chinese: {
          traditional: '飛流直下三千尺',
          simplified: '飞流直下三千尺',
          pinyin: 'Fēi liú zhí xià sān qiān chǐ',
        },
        english: 'Flying waters plunge three thousand feet,',
      },
      {
        chinese: {
          traditional: '疑是銀河落九天',
          simplified: '疑是银河落九天',
          pinyin: 'Yí shì yín hé luò jiǔ tiān',
        },
        english: 'I suspect it is the Milky Way falling from heaven.',
      },
    ],
  },
  {
    id: 'grasses',
    title: {
      chinese: {
        traditional: '賦得古原草送別',
        simplified: '赋得古原草送别',
        pinyin: 'Fù Dé Gǔ Yuán Cǎo Sòng Bié',
      },
      english: 'Grasses',
    },
    author: {
      chinese: {
        traditional: '白居易',
        simplified: '白居易',
        pinyin: 'Bái Jūyì',
      },
      english: 'Bai Juyi',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '離離原上草',
          simplified: '离离原上草',
          pinyin: 'Lí lí yuán shàng cǎo',
        },
        english: 'Lush, lush, the grass upon the ancient plain,',
      },
      {
        chinese: {
          traditional: '一歲一枯榮',
          simplified: '一岁一枯荣',
          pinyin: 'Yī suì yī kū róng',
        },
        english: 'Year by year, it withers and flourishes anew.',
      },
      {
        chinese: {
          traditional: '野火燒不盡',
          simplified: '野火烧不尽',
          pinyin: 'Yě huǒ shāo bù jìn',
        },
        english: 'Though wildfires burn, they cannot consume it,',
      },
      {
        chinese: {
          traditional: '春風吹又生',
          simplified: '春风吹又生',
          pinyin: 'Chūn fēng chuī yòu shēng',
        },
        english: 'For spring winds blow, and it grows again.',
      },
    ],
  },
  {
    id: 'red-cliff-du-mu',
    title: {
      chinese: {
        traditional: '赤壁',
        simplified: '赤壁',
        pinyin: 'Chì Bì',
      },
      english: 'Red Cliff',
    },
    author: {
      chinese: {
        traditional: '杜牧',
        simplified: '杜牧',
        pinyin: 'Dù Mù',
      },
      english: 'Du Mu',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '折戟沈沙鐵未銷',
          simplified: '折戟沉沙铁未销',
          pinyin: 'Zhé jǐ chén shā tiě wèi xiāo',
        },
        english: 'A broken halberd sinks in the sand, its iron not yet corroded,',
      },
      {
        chinese: {
          traditional: '自將磨洗認前朝',
          simplified: '自将磨洗认前朝',
          pinyin: 'Zì jiāng mó xǐ rèn qián cháo',
        },
        english: 'I scrub it clean, recalling a former dynasty.',
      },
      {
        chinese: {
          traditional: '東風不與周郎便',
          simplified: '东风不与周郎便',
          pinyin: 'Dōng fēng bù yǔ Zhōu Láng biàn',
        },
        english: 'Had the east wind not favored Zhou Yu,',
      },
      {
        chinese: {
          traditional: '銅雀春深鎖二喬',
          simplified: '铜雀春深锁二乔',
          pinyin: 'Tóng què chūn shēn suǒ èr Qiáo',
        },
        english: 'Then the Bronze Sparrow Terrace would lock the Two Qiaos in spring.',
      },
    ],
  },
  {
    id: 'song-of-liangzhou',
    title: {
      chinese: {
        traditional: '涼州詞',
        simplified: '凉州词',
        pinyin: 'Liáng Zhōu Cí',
      },
      english: 'A Song of Liangzhou',
    },
    author: {
      chinese: {
        traditional: '王翰',
        simplified: '王翰',
        pinyin: 'Wáng Hàn',
      },
      english: 'Wang Han',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '葡萄美酒夜光杯',
          simplified: '葡萄美酒夜光杯',
          pinyin: 'Pú táo měi jiǔ yè guāng bēi',
        },
        english: 'In a gleaming cup, rich grape wine by night,',
      },
      {
        chinese: {
          traditional: '欲飲琵琶馬上催',
          simplified: '欲饮琵琶马上催',
          pinyin: 'Yù yǐn pípá mǎ shàng cuī',
        },
        english: 'We’re about to drink when pipa strings urge us onward.',
      },
      {
        chinese: {
          traditional: '醉臥沙場君莫笑',
          simplified: '醉卧沙场君莫笑',
          pinyin: 'Zuì wò shā chǎng jūn mò xiào',
        },
        english: 'Do not laugh if we lie drunk on the battlefield—',
      },
      {
        chinese: {
          traditional: '古來征戰幾人回',
          simplified: '古来征战几人回',
          pinyin: 'Gǔ lái zhēng zhàn jǐ rén huí',
        },
        english: 'Since ancient times, few return from war.',
      },
    ],
  },
  {
    id: 'early-departure-from-white-emperor-city',
    title: {
      chinese: {
        traditional: '早發白帝城',
        simplified: '早发白帝城',
        pinyin: 'Zǎo Fā Bái Dì Chéng',
      },
      english: 'Early Departure from White Emperor City',
    },
    author: {
      chinese: {
        traditional: '李白',
        simplified: '李白',
        pinyin: 'Lǐ Bái',
      },
      english: 'Li Bai',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '朝辭白帝彩雲間',
          simplified: '朝辞白帝彩云间',
          pinyin: 'Zhāo cí Bái Dì cǎi yún jiān',
        },
        english: 'At dawn, leaving White Emperor City in cloud-bright skies,',
      },
      {
        chinese: {
          traditional: '千里江陵一日還',
          simplified: '千里江陵一日还',
          pinyin: 'Qiān lǐ Jiāng Líng yī rì huán',
        },
        english: 'In one day, I reach Jiangling a thousand miles away.',
      },
      {
        chinese: {
          traditional: '兩岸猿聲啼不住',
          simplified: '两岸猿声啼不住',
          pinyin: 'Liǎng àn yuán shēng tí bù zhù',
        },
        english: 'Though monkeys cry endlessly along both banks,',
      },
      {
        chinese: {
          traditional: '輕舟已過萬重山',
          simplified: '轻舟已过万重山',
          pinyin: 'Qīng zhōu yǐ guò wàn chóng shān',
        },
        english: 'My little boat has sailed past countless mountains.',
      },
    ],
  },
  {
    id: 'listening-to-a-monk-from-shu',
    title: {
      chinese: {
        traditional: '聽蜀僧濬彈琴',
        simplified: '听蜀僧濬弹琴',
        pinyin: 'Tīng Shǔ Sēng Jùn Tán Qín',
      },
      english: 'Listening to a Monk from Shu Playing the Lute',
    },
    author: {
      chinese: {
        traditional: '李白',
        simplified: '李白',
        pinyin: 'Lǐ Bái',
      },
      english: 'Li Bai',
    },
    form: {
      traditional: '五言絕句',
      simplified: '五言绝句',
    },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '蜀僧抱綠綺',
          simplified: '蜀僧抱绿绮',
          pinyin: 'Shǔ sēng bào lǜ qǐ',
        },
        english: 'A monk from Shu cradles his treasured zither,',
      },
      {
        chinese: {
          traditional: '西下峨眉峰',
          simplified: '西下峨眉峰',
          pinyin: 'Xī xià Éméi fēng',
        },
        english: 'Traveling down from lofty Emei in the west.',
      },
      {
        chinese: {
          traditional: '為我一揮手',
          simplified: '为我一挥手',
          pinyin: 'Wèi wǒ yī huī shǒu',
        },
        english: 'He gives one sweeping chord for me—',
      },
      {
        chinese: {
          traditional: '如聽萬壑松',
          simplified: '如听万壑松',
          pinyin: 'Rú tīng wàn hè sōng',
        },
        english: 'Like listening to pines in ten thousand ravines.',
      },
    ],
  },
  {
    id: 'night-of-the-fifteenth',
    title: {
      chinese: {
        traditional: '正月十五夜',
        simplified: '正月十五夜',
        pinyin: 'Zhèng Yuè Shíwǔ Yè',
      },
      english: 'Night of the Fifteenth',
    },
    author: {
      chinese: {
        traditional: '蘇味道',
        simplified: '苏味道',
        pinyin: 'Sū Wèidào',
      },
      english: 'Su Weidao',
    },
    form: {
      traditional: '七言律詩',
      simplified: '七言律诗',
    },
    formEnglish: 'Seven-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '火樹銀花合',
          simplified: '火树银花合',
          pinyin: 'Huǒ shù yín huā hé',
        },
        english: 'Fire trees and silver flowers join',
      },
      {
        chinese: {
          traditional: '星橋鐵鎖開',
          simplified: '星桥铁锁开',
          pinyin: 'Xīng qiáo tiě suǒ kāi',
        },
        english: 'Starry bridges, iron locks thrown open',
      },
      {
        chinese: {
          traditional: '暗塵隨馬去',
          simplified: '暗尘随马去',
          pinyin: 'Àn chén suí mǎ qù',
        },
        english: 'Night dust follows the horses away',
      },
      {
        chinese: {
          traditional: '明月來相照',
          simplified: '明月来相照',
          pinyin: 'Míng yuè lái xiāng zhào',
        },
        english: 'The bright moon arrives to shine on me.',
      },
      {
        chinese: {
          traditional: '遊妓皆薔薇',
          simplified: '游妓皆蔷薇',
          pinyin: 'Yóu jì jiē qiáng wéi',
        },
        english: 'Courtesans wander, lush as plum in bloom',
      },
      {
        chinese: {
          traditional: '行歌盡落梅',
          simplified: '行歌尽落梅',
          pinyin: 'Xíng gē jìn luò méi',
        },
        english: 'Their singing drifts like falling plum blossoms',
      },
      {
        chinese: {
          traditional: '金吾不禁夜',
          simplified: '金吾不禁夜',
          pinyin: 'Jīn wú bù jìn yè',
        },
        english: 'The guards lift the night ban',
      },
      {
        chinese: {
          traditional: '玉漏莫相催',
          simplified: '玉漏莫相催',
          pinyin: 'Yù lòu mò xiāng cuī',
        },
        english: 'Jade water-clocks do not hurry us.',
      },
    ],
  },
  {
    id: 'shangyuan-night',
    title: {
      chinese: {
        traditional: '上元夜',
        simplified: '上元夜',
        pinyin: 'Shàng Yuán Yè',
      },
      english: 'Night of the Shangyuan Festival',
    },
    author: {
      chinese: {
        traditional: '崔液',
        simplified: '崔液',
        pinyin: 'Cuī Yè',
      },
      english: 'Cui Ye',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '玉漏銀壺且莫催',
          simplified: '玉漏银壶且莫催',
          pinyin: 'Yù lòu yín hú qiě mò cuī',
        },
        english: 'Jade water-clocks and silver urns—do not press the time;',
      },
      {
        chinese: {
          traditional: '鐵關金鎖徹明開',
          simplified: '铁关金锁彻明开',
          pinyin: 'Tiě guān jīn suǒ chè míng kāi',
        },
        english: 'Iron gates and golden locks stand open till dawn',
      },
      {
        chinese: {
          traditional: '誰家見月能閒坐',
          simplified: '谁家见月能闲坐',
          pinyin: 'Shéi jiā jiàn yuè néng xián zuò',
        },
        english: 'Who, seeing the moon, could stay at home?',
      },
      {
        chinese: {
          traditional: '何處聞燈不看來',
          simplified: '何处闻灯不看来',
          pinyin: 'Hé chù wén dēng bù kàn lái',
        },
        english: 'Where lanterns glow, who would not come to see?',
      },
    ],
  },
  {
    id: 'lanterns-on-the-fifteenth',
    title: {
      chinese: {
        traditional: '正月十五夜燈',
        simplified: '正月十五夜灯',
        pinyin: 'Zhèng Yuè Shíwǔ Yè Dēng',
      },
      english: 'Lanterns on the Night of the Fifteenth',
    },
    author: {
      chinese: {
        traditional: '張祜',
        simplified: '张祜',
        pinyin: 'Zhāng Hù',
      },
      english: 'Zhang Hu',
    },
    form: {
      traditional: '七言絕句',
      simplified: '七言绝句',
    },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '千門開鎖萬燈明',
          simplified: '千门开锁万灯明',
          pinyin: 'Qiān mén kāi suǒ wàn dēng míng',
        },
        english: 'A thousand gates unlocked, ten thousand lanterns bright',
      },
      {
        chinese: {
          traditional: '正月中旬動帝京',
          simplified: '正月中旬动帝京',
          pinyin: 'Zhèng yuè zhōng xún dòng dì jīng',
        },
        english: 'In mid-first month, the imperial capital stirs',
      },
      {
        chinese: {
          traditional: '三百內人連袖舞',
          simplified: '三百内人连袖舞',
          pinyin: 'Sān bǎi nèi rén lián xiù wǔ',
        },
        english: 'Three hundred palace ladies dance, sleeves linked',
      },
      {
        chinese: {
          traditional: '一聲菩薩萬人驚',
          simplified: '一声菩萨万人惊',
          pinyin: 'Yī shēng pú sà wàn rén jīng',
        },
        english: 'One cry of “Bodhisattva!” startles ten thousand souls',
      },
    ],
  },
  {
    id: 'drinking-alone-by-moonlight',
    title: {
      chinese: {
        traditional: '月下獨酌',
        simplified: '月下独酌',
        pinyin: 'Yuè Xià Dú Zhuó',
      },
      english: 'Drinking Alone by Moonlight',
    },
    author: {
      chinese: { traditional: '李白', simplified: '李白', pinyin: 'Lǐ Bái' },
      english: 'Li Bai',
    },
    form: { traditional: '七言古詩', simplified: '七言古诗' },
    formEnglish: 'Seven-character ancient verse',
    verses: [
      {
        chinese: {
          traditional: '花間一壺酒',
          simplified: '花间一壶酒',
          pinyin: 'Huā jiān yī hú jiǔ',
        },
        english: 'A jug of wine among the blossoms',
      },
      {
        chinese: {
          traditional: '獨酌無相親',
          simplified: '独酌无相亲',
          pinyin: 'Dú zhuó wú xiāng qīn',
        },
        english: 'I drink alone, no friends at hand',
      },
      {
        chinese: {
          traditional: '舉杯邀明月',
          simplified: '举杯邀明月',
          pinyin: 'Jǔ bēi yāo míng yuè',
        },
        english: 'I raise my cup to invite the bright moon',
      },
      {
        chinese: {
          traditional: '對影成三人',
          simplified: '对影成三人',
          pinyin: 'Duì yǐng chéng sān rén',
        },
        english: 'With my shadow, we become three',
      },
    ],
  },
  {
    id: 'farewell-to-meng-haoran',
    title: {
      chinese: {
        traditional: '送孟浩然之廣陵',
        simplified: '送孟浩然之广陵',
        pinyin: 'Sòng Mèng Hào Rán Zhī Guǎng Líng',
      },
      english: 'Farewell to Meng Haoran at Yellow Crane Tower',
    },
    author: {
      chinese: { traditional: '李白', simplified: '李白', pinyin: 'Lǐ Bái' },
      english: 'Li Bai',
    },
    form: { traditional: '七言絕句', simplified: '七言绝句' },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '故人西辭黃鶴樓',
          simplified: '故人西辞黄鹤楼',
          pinyin: 'Gù rén xī cí huáng hè lóu',
        },
        english: 'My old friend departs west from Yellow Crane Tower',
      },
      {
        chinese: {
          traditional: '煙花三月下揚州',
          simplified: '烟花三月下扬州',
          pinyin: 'Yān huā sān yuè xià yáng zhōu',
        },
        english: 'In the flowery mist of March, bound for Yangzhou',
      },
      {
        chinese: {
          traditional: '孤帆遠影碧空盡',
          simplified: '孤帆远影碧空尽',
          pinyin: 'Gū fān yuǎn yǐng bì kōng jìn',
        },
        english: "A lone sail's distant shadow vanishes in the blue",
      },
      {
        chinese: {
          traditional: '唯見長江天際流',
          simplified: '唯见长江天际流',
          pinyin: 'Wéi jiàn cháng jiāng tiān jì liú',
        },
        english: 'Only the Yangtze flows to the horizon',
      },
    ],
  },
  {
    id: 'song-of-everlasting-sorrow',
    title: {
      chinese: {
        traditional: '長恨歌',
        simplified: '长恨歌',
        pinyin: 'Cháng Hèn Gē',
      },
      english: 'Song of Everlasting Sorrow (excerpt)',
    },
    author: {
      chinese: { traditional: '白居易', simplified: '白居易', pinyin: 'Bái Jū Yì' },
      english: 'Bai Juyi',
    },
    form: { traditional: '七言古詩', simplified: '七言古诗' },
    formEnglish: 'Seven-character ancient verse',
    verses: [
      {
        chinese: {
          traditional: '漢皇重色思傾國',
          simplified: '汉皇重色思倾国',
          pinyin: 'Hàn huáng zhòng sè sī qīng guó',
        },
        english: 'The Han emperor sought one beautiful enough to topple kingdoms',
      },
      {
        chinese: {
          traditional: '御宇多年求不得',
          simplified: '御宇多年求不得',
          pinyin: 'Yù yǔ duō nián qiú bù dé',
        },
        english: 'Through many years of reign, he looked but could not find',
      },
      {
        chinese: {
          traditional: '楊家有女初長成',
          simplified: '杨家有女初长成',
          pinyin: 'Yáng jiā yǒu nǚ chū zhǎng chéng',
        },
        english: 'The Yang family had a daughter just come of age',
      },
      {
        chinese: {
          traditional: '養在深閨人未識',
          simplified: '养在深闺人未识',
          pinyin: 'Yǎng zài shēn guī rén wèi shí',
        },
        english: 'Raised in the inner chambers, unknown to the world',
      },
    ],
  },
  {
    id: 'autumn-thoughts',
    title: {
      chinese: {
        traditional: '秋思',
        simplified: '秋思',
        pinyin: 'Qiū Sī',
      },
      english: 'Autumn Thoughts',
    },
    author: {
      chinese: { traditional: '張籍', simplified: '张籍', pinyin: 'Zhāng Jí' },
      english: 'Zhang Ji',
    },
    form: { traditional: '七言絕句', simplified: '七言绝句' },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '洛陽城裏見秋風',
          simplified: '洛阳城里见秋风',
          pinyin: 'Luò yáng chéng lǐ jiàn qiū fēng',
        },
        english: 'In Luoyang city, I feel the autumn wind',
      },
      {
        chinese: {
          traditional: '欲作家書意萬重',
          simplified: '欲作家书意万重',
          pinyin: 'Yù zuò jiā shū yì wàn chóng',
        },
        english: 'Wanting to write home, ten thousand thoughts arise',
      },
      {
        chinese: {
          traditional: '復恐匆匆說不盡',
          simplified: '复恐匆匆说不尽',
          pinyin: 'Fù kǒng cōng cōng shuō bù jìn',
        },
        english: 'Fearing my hurried words cannot say enough',
      },
      {
        chinese: {
          traditional: '行人臨發又開封',
          simplified: '行人临发又开封',
          pinyin: 'Xíng rén lín fā yòu kāi fēng',
        },
        english: 'The messenger about to leave, I open it again',
      },
    ],
  },
  {
    id: 'bamboo-stone',
    title: {
      chinese: {
        traditional: '竹石',
        simplified: '竹石',
        pinyin: 'Zhú Shí',
      },
      english: 'Bamboo and Stone',
    },
    author: {
      chinese: { traditional: '鄭燮', simplified: '郑燮', pinyin: 'Zhèng Xiè' },
      english: 'Zheng Xie',
    },
    form: { traditional: '七言絕句', simplified: '七言绝句' },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '咬定青山不放鬆',
          simplified: '咬定青山不放松',
          pinyin: 'Yǎo dìng qīng shān bù fàng sōng',
        },
        english: 'Gripping the green mountain, never letting go',
      },
      {
        chinese: {
          traditional: '立根原在破岩中',
          simplified: '立根原在破岩中',
          pinyin: 'Lì gēn yuán zài pò yán zhōng',
        },
        english: 'Roots established in the broken rocks',
      },
      {
        chinese: {
          traditional: '千磨萬擊還堅勁',
          simplified: '千磨万击还坚劲',
          pinyin: 'Qiān mó wàn jī hái jiān jìng',
        },
        english: 'Through countless trials, still steadfast',
      },
      {
        chinese: {
          traditional: '任爾東西南北風',
          simplified: '任尔东西南北风',
          pinyin: 'Rèn ěr dōng xī nán běi fēng',
        },
        english: 'Let winds blow from all directions',
      },
    ],
  },
  {
    id: 'moonlit-night',
    title: {
      chinese: {
        traditional: '月夜',
        simplified: '月夜',
        pinyin: 'Yuè Yè',
      },
      english: 'Moonlit Night',
    },
    author: {
      chinese: { traditional: '杜甫', simplified: '杜甫', pinyin: 'Dù Fǔ' },
      english: 'Du Fu',
    },
    form: { traditional: '五言律詩', simplified: '五言律诗' },
    formEnglish: 'Five-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '今夜鄜州月',
          simplified: '今夜鄜州月',
          pinyin: 'Jīn yè fū zhōu yuè',
        },
        english: 'Tonight, the moon over Fuzhou',
      },
      {
        chinese: {
          traditional: '閨中只獨看',
          simplified: '闺中只独看',
          pinyin: 'Guī zhōng zhǐ dú kàn',
        },
        english: 'In her chamber, she watches alone',
      },
      {
        chinese: {
          traditional: '遙憐小兒女',
          simplified: '遥怜小儿女',
          pinyin: 'Yáo lián xiǎo ér nǚ',
        },
        english: 'From afar I think of our young children',
      },
      {
        chinese: {
          traditional: '未解憶長安',
          simplified: '未解忆长安',
          pinyin: 'Wèi jiě yì cháng ān',
        },
        english: "Too young to remember Chang'an",
      },
      {
        chinese: {
          traditional: '香霧雲鬟濕',
          simplified: '香雾云鬟湿',
          pinyin: 'Xiāng wù yún huán shī',
        },
        english: 'Fragrant mist dampens her cloudy hair',
      },
      {
        chinese: {
          traditional: '清輝玉臂寒',
          simplified: '清辉玉臂寒',
          pinyin: 'Qīng huī yù bì hán',
        },
        english: 'Clear moonlight chills her jade arms',
      },
      {
        chinese: {
          traditional: '何時倚虛幌',
          simplified: '何时倚虚幌',
          pinyin: 'Hé shí yǐ xū huǎng',
        },
        english: 'When shall we lean by the window curtain',
      },
      {
        chinese: {
          traditional: '雙照淚痕乾',
          simplified: '双照泪痕干',
          pinyin: 'Shuāng zhào lèi hén gān',
        },
        english: 'Together in moonlight, tears dried?',
      },
    ],
  },
  {
    id: 'passing-huaqing-palace',
    title: {
      chinese: {
        traditional: '過華清宮',
        simplified: '过华清宫',
        pinyin: 'Guò Huá Qīng Gōng',
      },
      english: 'Passing Huaqing Palace',
    },
    author: {
      chinese: { traditional: '杜牧', simplified: '杜牧', pinyin: 'Dù Mù' },
      english: 'Du Mu',
    },
    form: { traditional: '七言絕句', simplified: '七言绝句' },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '長安回望繡成堆',
          simplified: '长安回望绣成堆',
          pinyin: 'Cháng ān huí wàng xiù chéng duī',
        },
        english: "Looking back at Chang'an, embroidered hills pile up",
      },
      {
        chinese: {
          traditional: '山頂千門次第開',
          simplified: '山顶千门次第开',
          pinyin: 'Shān dǐng qiān mén cì dì kāi',
        },
        english: "On the mountain, a thousand palace gates open one by one",
      },
      {
        chinese: {
          traditional: '一騎紅塵妃子笑',
          simplified: '一骑红尘妃子笑',
          pinyin: 'Yī qí hóng chén fēi zǐ xiào',
        },
        english: 'A single rider in red dust makes the consort smile',
      },
      {
        chinese: {
          traditional: '無人知是荔枝來',
          simplified: '无人知是荔枝来',
          pinyin: 'Wú rén zhī shì lì zhī lái',
        },
        english: "No one knows he's brought her fresh lychees",
      },
    ],
  },
  {
    id: 'spring-river-flower-moon-night',
    title: {
      chinese: {
        traditional: '春江花月夜',
        simplified: '春江花月夜',
        pinyin: 'Chūn Jiāng Huā Yuè Yè',
      },
      english: 'Spring River Flower Moon Night (excerpt)',
    },
    author: {
      chinese: { traditional: '張若虛', simplified: '张若虚', pinyin: 'Zhāng Ruò Xū' },
      english: 'Zhang Ruoxu',
    },
    form: { traditional: '七言古詩', simplified: '七言古诗' },
    formEnglish: 'Seven-character ancient verse',
    verses: [
      {
        chinese: {
          traditional: '春江潮水連海平',
          simplified: '春江潮水连海平',
          pinyin: 'Chūn jiāng cháo shuǐ lián hǎi píng',
        },
        english: 'Spring river tide waters level with the sea',
      },
      {
        chinese: {
          traditional: '海上明月共潮生',
          simplified: '海上明月共潮生',
          pinyin: 'Hǎi shàng míng yuè gòng cháo shēng',
        },
        english: 'Bright moon over ocean rises with the tide',
      },
      {
        chinese: {
          traditional: '灩灩隨波千萬里',
          simplified: '滟滟随波千万里',
          pinyin: 'Yàn yàn suí bō qiān wàn lǐ',
        },
        english: 'Shimmering with waves for thousands of miles',
      },
      {
        chinese: {
          traditional: '何處春江無月明',
          simplified: '何处春江无月明',
          pinyin: 'Hé chù chūn jiāng wú yuè míng',
        },
        english: 'Where on the spring river is there no bright moon?',
      },
    ],
  },
  {
    id: 'night-rain-sent-north',
    title: {
      chinese: {
        traditional: '夜雨寄北',
        simplified: '夜雨寄北',
        pinyin: 'Yè Yǔ Jì Běi',
      },
      english: 'Night Rain, Sent North',
    },
    author: {
      chinese: { traditional: '李商隱', simplified: '李商隐', pinyin: 'Lǐ Shāng Yǐn' },
      english: 'Li Shangyin',
    },
    form: { traditional: '七言絕句', simplified: '七言绝句' },
    formEnglish: 'Seven-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '君問歸期未有期',
          simplified: '君问归期未有期',
          pinyin: 'Jūn wèn guī qī wèi yǒu qī',
        },
        english: 'You ask when I will return—there is no date',
      },
      {
        chinese: {
          traditional: '巴山夜雨漲秋池',
          simplified: '巴山夜雨涨秋池',
          pinyin: 'Bā shān yè yǔ zhǎng qiū chí',
        },
        english: 'Night rain in the mountains of Ba fills the autumn pools',
      },
      {
        chinese: {
          traditional: '何當共剪西窗燭',
          simplified: '何当共剪西窗烛',
          pinyin: 'Hé dāng gòng jiǎn xī chuāng zhú',
        },
        english: 'When shall we trim the candle by the western window',
      },
      {
        chinese: {
          traditional: '卻話巴山夜雨時',
          simplified: '却话巴山夜雨时',
          pinyin: 'Què huà bā shān yè yǔ shí',
        },
        english: 'And talk together of night rain in the mountains of Ba',
      },
    ],
  },
];

export const poems: Poem[] = basePoems;
