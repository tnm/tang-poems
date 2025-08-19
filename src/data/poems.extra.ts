import { Poem } from '../types/poem';

// Add any additional poems here. They will be automatically included in the app.
// Tip: Keep `id` URL-friendly and unique. Use Traditional/Simplified/Pinyin where possible.
export const extraPoems: Poem[] = [
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
        english: 'Among the flowers, a jug of wine',
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
      chinese: { traditional: '崔顥', simplified: '崔颢', pinyin: 'Cuī Hào' },
      english: 'Cui Hao',
    },
    form: { traditional: '七言律詩', simplified: '七言律诗' },
    formEnglish: 'Seven-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '昔人已乘黃鶴去',
          simplified: '昔人已乘黄鹤去',
          pinyin: 'Xī rén yǐ chéng huáng hè qù',
        },
        english: 'The ancients have ridden away on the yellow crane',
      },
      {
        chinese: {
          traditional: '此地空餘黃鶴樓',
          simplified: '此地空余黄鹤楼',
          pinyin: 'Cǐ dì kōng yú huáng hè lóu',
        },
        english: 'Here remains only the Yellow Crane Tower',
      },
      {
        chinese: {
          traditional: '黃鶴一去不復返',
          simplified: '黄鹤一去不复返',
          pinyin: 'Huáng hè yī qù bù fù fǎn',
        },
        english: 'The yellow crane, once gone, never returns',
      },
      {
        chinese: {
          traditional: '白雲千載空悠悠',
          simplified: '白云千载空悠悠',
          pinyin: 'Bái yún qiān zǎi kōng yōu yōu',
        },
        english: 'White clouds drift emptily for a thousand years',
      },
      {
        chinese: {
          traditional: '晴川歷歷漢陽樹',
          simplified: '晴川历历汉阳树',
          pinyin: 'Qíng chuān lì lì hàn yáng shù',
        },
        english: 'Clear river reveals each Hanyang tree',
      },
      {
        chinese: {
          traditional: '芳草萋萋鸚鵡洲',
          simplified: '芳草萋萋鹦鹉洲',
          pinyin: 'Fāng cǎo qī qī yīng wǔ zhōu',
        },
        english: 'Fragrant grass grows thick on Parrot Isle',
      },
      {
        chinese: {
          traditional: '日暮鄉關何處是',
          simplified: '日暮乡关何处是',
          pinyin: 'Rì mù xiāng guān hé chù shì',
        },
        english: 'At sunset, where is my homeland?',
      },
      {
        chinese: {
          traditional: '煙波江上使人愁',
          simplified: '烟波江上使人愁',
          pinyin: 'Yān bō jiāng shàng shǐ rén chóu',
        },
        english: 'Mist over the river brings sorrow',
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
      chinese: { traditional: '孟浩然', simplified: '孟浩然', pinyin: 'Mèng Hào Rán' },
      english: 'Meng Haoran',
    },
    form: { traditional: '五言絕句', simplified: '五言绝句' },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '春眠不覺曉',
          simplified: '春眠不觉晓',
          pinyin: 'Chūn mián bù jué xiǎo',
        },
        english: 'Spring sleep—unaware of dawn',
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
        english: 'Last night came sounds of wind and rain',
      },
      {
        chinese: {
          traditional: '花落知多少',
          simplified: '花落知多少',
          pinyin: 'Huā luò zhī duō shǎo',
        },
        english: 'How many flowers have fallen?',
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
        english: 'A lone sail\'s distant shadow vanishes in the blue',
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
      chinese: { traditional: '柳宗元', simplified: '柳宗元', pinyin: 'Liǔ Zōng Yuán' },
      english: 'Liu Zongyuan',
    },
    form: { traditional: '五言絕句', simplified: '五言绝句' },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '千山鳥飛絕',
          simplified: '千山鸟飞绝',
          pinyin: 'Qiān shān niǎo fēi jué',
        },
        english: 'A thousand mountains—no bird flies',
      },
      {
        chinese: {
          traditional: '萬徑人蹤滅',
          simplified: '万径人踪灭',
          pinyin: 'Wàn jìng rén zōng miè',
        },
        english: 'Ten thousand paths—no human trace',
      },
      {
        chinese: {
          traditional: '孤舟蓑笠翁',
          simplified: '孤舟蓑笠翁',
          pinyin: 'Gū zhōu suō lì wēng',
        },
        english: 'A lone boat, an old man in raincoat and hat',
      },
      {
        chinese: {
          traditional: '獨釣寒江雪',
          simplified: '独钓寒江雪',
          pinyin: 'Dú diào hán jiāng xuě',
        },
        english: 'Alone, fishing the cold river snow',
      },
    ],
  },
  {
    id: 'climbing-stork-tower',
    title: {
      chinese: {
        traditional: '登鸛雀樓',
        simplified: '登鹳雀楼',
        pinyin: 'Dēng Guàn Què Lóu',
      },
      english: 'Climbing Stork Tower',
    },
    author: {
      chinese: { traditional: '王之渙', simplified: '王之涣', pinyin: 'Wáng Zhī Huàn' },
      english: 'Wang Zhihuan',
    },
    form: { traditional: '五言絕句', simplified: '五言绝句' },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '白日依山盡',
          simplified: '白日依山尽',
          pinyin: 'Bái rì yī shān jìn',
        },
        english: 'The white sun sinks behind the mountains',
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
        english: 'To see a thousand miles',
      },
      {
        chinese: {
          traditional: '更上一層樓',
          simplified: '更上一层楼',
          pinyin: 'Gèng shàng yī céng lóu',
        },
        english: 'Climb one floor higher',
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
        english: 'The Han emperor, prizing beauty, sought one to topple kingdoms',
      },
      {
        chinese: {
          traditional: '御宇多年求不得',
          simplified: '御宇多年求不得',
          pinyin: 'Yù yǔ duō nián qiú bù dé',
        },
        english: 'Through many years of reign, he sought but could not find',
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
        english: 'In Luoyang city, I see the autumn wind',
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
        english: 'Through countless trials, still standing strong',
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
    id: 'spring-morning-rain',
    title: {
      chinese: {
        traditional: '春夜喜雨',
        simplified: '春夜喜雨',
        pinyin: 'Chūn Yè Xǐ Yǔ',
      },
      english: 'Spring Night Rain',
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
          traditional: '好雨知時節',
          simplified: '好雨知时节',
          pinyin: 'Hǎo yǔ zhī shí jié',
        },
        english: 'Good rain knows its season',
      },
      {
        chinese: {
          traditional: '當春乃發生',
          simplified: '当春乃发生',
          pinyin: 'Dāng chūn nǎi fā shēng',
        },
        english: 'Coming with spring, it brings life',
      },
      {
        chinese: {
          traditional: '隨風潛入夜',
          simplified: '随风潜入夜',
          pinyin: 'Suí fēng qián rù yè',
        },
        english: 'Following wind, it steals into night',
      },
      {
        chinese: {
          traditional: '潤物細無聲',
          simplified: '润物细无声',
          pinyin: 'Rùn wù xì wú shēng',
        },
        english: 'Moistening things, fine and silent',
      },
      {
        chinese: {
          traditional: '野徑雲俱黑',
          simplified: '野径云俱黑',
          pinyin: 'Yě jìng yún jù hēi',
        },
        english: 'Country paths and clouds all dark',
      },
      {
        chinese: {
          traditional: '江船火獨明',
          simplified: '江船火独明',
          pinyin: 'Jiāng chuán huǒ dú míng',
        },
        english: 'River boat lights alone shine bright',
      },
      {
        chinese: {
          traditional: '曉看紅濕處',
          simplified: '晓看红湿处',
          pinyin: 'Xiǎo kàn hóng shī chù',
        },
        english: 'At dawn, seeing red wet places',
      },
      {
        chinese: {
          traditional: '花重錦官城',
          simplified: '花重锦官城',
          pinyin: 'Huā zhòng jǐn guān chéng',
        },
        english: 'Flowers weigh heavy in Brocade City',
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
        english: 'From afar I pity our young children',
      },
      {
        chinese: {
          traditional: '未解憶長安',
          simplified: '未解忆长安',
          pinyin: 'Wèi jiě yì cháng ān',
        },
        english: 'Too young to remember Chang\'an',
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
        english: 'Looking back at Chang\'an, embroidered hills pile up',
      },
      {
        chinese: {
          traditional: '山頂千門次第開',
          simplified: '山顶千门次第开',
          pinyin: 'Shān dǐng qiān mén cì dì kāi',
        },
        english: 'A thousand gates open in sequence on the mountain',
      },
      {
        chinese: {
          traditional: '一騎紅塵妃子笑',
          simplified: '一骑红尘妃子笑',
          pinyin: 'Yī qí hóng chén fēi zǐ xiào',
        },
        english: 'A rider in red dust makes the consort smile',
      },
      {
        chinese: {
          traditional: '無人知是荔枝來',
          simplified: '无人知是荔枝来',
          pinyin: 'Wú rén zhī shì lì zhī lái',
        },
        english: 'No one knows it\'s lychees arriving',
      },
    ],
  },
  {
    id: 'night-mooring-at-maple-bridge',
    title: {
      chinese: {
        traditional: '楓橋夜泊',
        simplified: '枫桥夜泊',
        pinyin: 'Fēng Qiáo Yè Bó',
      },
      english: 'Night Mooring at Maple Bridge',
    },
    author: {
      chinese: { traditional: '張繼', simplified: '张继', pinyin: 'Zhāng Jì' },
      english: 'Zhang Ji',
    },
    form: { traditional: '七言絕句', simplified: '七言绝句' },
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
        english: 'River maples, fishing fires face my troubled sleep',
      },
      {
        chinese: {
          traditional: '姑蘇城外寒山寺',
          simplified: '姑苏城外寒山寺',
          pinyin: 'Gū sū chéng wài hán shān sì',
        },
        english: 'Outside Suzhou, Cold Mountain Temple',
      },
      {
        chinese: {
          traditional: '夜半鐘聲到客船',
          simplified: '夜半钟声到客船',
          pinyin: 'Yè bàn zhōng shēng dào kè chuán',
        },
        english: 'Midnight bell reaches the traveler\'s boat',
      },
    ],
  },
  {
    id: 'sent-north-on-rainy-night',
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
        english: 'You ask my return date—there is no date',
      },
      {
        chinese: {
          traditional: '巴山夜雨漲秋池',
          simplified: '巴山夜雨涨秋池',
          pinyin: 'Bā shān yè yǔ zhǎng qiū chí',
        },
        english: 'Night rain on Ba Mountain swells the autumn pool',
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
        english: 'And speak of this night rain on Ba Mountain?',
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
    id: 'departing-from-baidi-city',
    title: {
      chinese: {
        traditional: '早發白帝城',
        simplified: '早发白帝城',
        pinyin: 'Zǎo Fā Bái Dì Chéng',
      },
      english: 'Departing from Baidi City at Dawn',
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
          traditional: '朝辭白帝彩雲間',
          simplified: '朝辞白帝彩云间',
          pinyin: 'Zhāo cí bái dì cǎi yún jiān',
        },
        english: 'At dawn, leaving Baidi among colored clouds',
      },
      {
        chinese: {
          traditional: '千里江陵一日還',
          simplified: '千里江陵一日还',
          pinyin: 'Qiān lǐ jiāng líng yī rì huán',
        },
        english: 'A thousand miles to Jiangling, returned in a day',
      },
      {
        chinese: {
          traditional: '兩岸猿聲啼不住',
          simplified: '两岸猿声啼不住',
          pinyin: 'Liǎng àn yuán shēng tí bù zhù',
        },
        english: 'Monkeys cry ceaselessly on both banks',
      },
      {
        chinese: {
          traditional: '輕舟已過萬重山',
          simplified: '轻舟已过万重山',
          pinyin: 'Qīng zhōu yǐ guò wàn chóng shān',
        },
        english: 'My light boat has passed ten thousand mountains',
      },
    ],
  },
  {
    id: 'thoughts-on-a-quiet-night',
    title: {
      chinese: {
        traditional: '靜夜思',
        simplified: '静夜思',
        pinyin: 'Jìng Yè Sī',
      },
      english: 'Thoughts on a Quiet Night',
    },
    author: {
      chinese: { traditional: '李白', simplified: '李白', pinyin: 'Lǐ Bái' },
      english: 'Li Bai',
    },
    form: { traditional: '五言絕句', simplified: '五言绝句' },
    formEnglish: 'Five-character quatrain',
    verses: [
      {
        chinese: {
          traditional: '床前明月光',
          simplified: '床前明月光',
          pinyin: 'Chuáng qián míng yuè guāng',
        },
        english: 'Before my bed, bright moonlight',
      },
      {
        chinese: {
          traditional: '疑是地上霜',
          simplified: '疑是地上霜',
          pinyin: 'Yí shì dì shàng shuāng',
        },
        english: 'Like frost upon the ground',
      },
      {
        chinese: {
          traditional: '舉頭望明月',
          simplified: '举头望明月',
          pinyin: 'Jǔ tóu wàng míng yuè',
        },
        english: 'I raise my head to see the bright moon',
      },
      {
        chinese: {
          traditional: '低頭思故鄉',
          simplified: '低头思故乡',
          pinyin: 'Dī tóu sī gù xiāng',
        },
        english: 'Lower it, and think of home',
      },
    ],
  },
  {
    id: 'lushan-waterfall',
    title: {
      chinese: {
        traditional: '望廬山瀑布',
        simplified: '望庐山瀑布',
        pinyin: 'Wàng Lú Shān Pù Bù',
      },
      english: 'Viewing the Waterfall at Mount Lu',
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
          traditional: '日照香爐生紫煙',
          simplified: '日照香炉生紫烟',
          pinyin: 'Rì zhào xiāng lú shēng zǐ yān',
        },
        english: 'Sunlight on Incense Burner Peak raises purple mist',
      },
      {
        chinese: {
          traditional: '遙看瀑布掛前川',
          simplified: '遥看瀑布挂前川',
          pinyin: 'Yáo kàn pù bù guà qián chuān',
        },
        english: 'From afar, the waterfall hangs before the river',
      },
      {
        chinese: {
          traditional: '飛流直下三千尺',
          simplified: '飞流直下三千尺',
          pinyin: 'Fēi liú zhí xià sān qiān chǐ',
        },
        english: 'Flying waters plunge straight down three thousand feet',
      },
      {
        chinese: {
          traditional: '疑是銀河落九天',
          simplified: '疑是银河落九天',
          pinyin: 'Yí shì yín hé luò jiǔ tiān',
        },
        english: 'As if the Milky Way falls from the ninth heaven',
      },
    ],
  },
  {
    id: 'grass',
    title: {
      chinese: {
        traditional: '草',
        simplified: '草',
        pinyin: 'Cǎo',
      },
      english: 'Grass',
    },
    author: {
      chinese: { traditional: '白居易', simplified: '白居易', pinyin: 'Bái Jū Yì' },
      english: 'Bai Juyi',
    },
    form: { traditional: '五言律詩', simplified: '五言律诗' },
    formEnglish: 'Five-character regulated verse',
    verses: [
      {
        chinese: {
          traditional: '離離原上草',
          simplified: '离离原上草',
          pinyin: 'Lí lí yuán shàng cǎo',
        },
        english: 'Lush grass on the ancient plain',
      },
      {
        chinese: {
          traditional: '一歲一枯榮',
          simplified: '一岁一枯荣',
          pinyin: 'Yī suì yī kū róng',
        },
        english: 'Each year withers and flourishes',
      },
      {
        chinese: {
          traditional: '野火燒不盡',
          simplified: '野火烧不尽',
          pinyin: 'Yě huǒ shāo bù jìn',
        },
        english: 'Wildfire cannot burn it all',
      },
      {
        chinese: {
          traditional: '春風吹又生',
          simplified: '春风吹又生',
          pinyin: 'Chūn fēng chuī yòu shēng',
        },
        english: 'Spring breeze brings it back to life',
      },
      {
        chinese: {
          traditional: '遠芳侵古道',
          simplified: '远芳侵古道',
          pinyin: 'Yuǎn fāng qīn gǔ dào',
        },
        english: 'Distant fragrance invades the ancient road',
      },
      {
        chinese: {
          traditional: '晴翠接荒城',
          simplified: '晴翠接荒城',
          pinyin: 'Qíng cuì jiē huāng chéng',
        },
        english: 'Sunny green reaches the ruined city',
      },
      {
        chinese: {
          traditional: '又送王孫去',
          simplified: '又送王孙去',
          pinyin: 'Yòu sòng wáng sūn qù',
        },
        english: 'Again sending off the noble youth',
      },
      {
        chinese: {
          traditional: '萋萋滿別情',
          simplified: '萋萋满别情',
          pinyin: 'Qī qī mǎn bié qíng',
        },
        english: 'Lush and thick with parting sorrow',
      },
    ],
  },
];


