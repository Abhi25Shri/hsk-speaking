// HSK 1 Vocabulary Data
const hsk1Words = [
    // Greetings
    { chinese: '你好', pinyin: 'nǐ hǎo', english: 'Hello', category: 'greetings' },
    { chinese: '谢谢', pinyin: 'xièxie', english: 'Thank you', category: 'greetings' },
    { chinese: '不客气', pinyin: 'búkèqi', english: 'You are welcome', category: 'greetings' },
    { chinese: '再见', pinyin: 'zàijiàn', english: 'Goodbye', category: 'greetings' },
    { chinese: '早上好', pinyin: 'zǎo shang hǎo', english: 'Good morning', category: 'greetings' },
    { chinese: '晚上好', pinyin: 'wǎn shang hǎo', english: 'Good evening', category: 'greetings' },
    { chinese: '对不起', pinyin: 'duìbúqǐ', english: 'Sorry', category: 'greetings' },
    { chinese: '没关系', pinyin: 'méi guānxi', english: 'Never mind', category: 'greetings' },

    // Numbers
    { chinese: '一', pinyin: 'yī', english: 'One', category: 'numbers' },
    { chinese: '二', pinyin: 'èr', english: 'Two', category: 'numbers' },
    { chinese: '三', pinyin: 'sān', english: 'Three', category: 'numbers' },
    { chinese: '四', pinyin: 'sì', english: 'Four', category: 'numbers' },
    { chinese: '五', pinyin: 'wǔ', english: 'Five', category: 'numbers' },
    { chinese: '六', pinyin: 'liù', english: 'Six', category: 'numbers' },
    { chinese: '七', pinyin: 'qī', english: 'Seven', category: 'numbers' },
    { chinese: '八', pinyin: 'bā', english: 'Eight', category: 'numbers' },
    { chinese: '九', pinyin: 'jiǔ', english: 'Nine', category: 'numbers' },
    { chinese: '十', pinyin: 'shí', english: 'Ten', category: 'numbers' },

    // Family
    { chinese: '妈妈', pinyin: 'māma', english: 'Mother', category: 'family' },
    { chinese: '爸爸', pinyin: 'bàba', english: 'Father', category: 'family' },
    { chinese: '哥哥', pinyin: 'gēge', english: 'Older brother', category: 'family' },
    { chinese: '妹妹', pinyin: 'mèimei', english: 'Younger sister', category: 'family' },
    { chinese: '弟弟', pinyin: 'dìdi', english: 'Younger brother', category: 'family' },
    { chinese: '姐姐', pinyin: 'jiějie', english: 'Older sister', category: 'family' },
    { chinese: '家', pinyin: 'jiā', english: 'Home/Family', category: 'family' },
    { chinese: '儿子', pinyin: 'érzi', english: 'Son', category: 'family' },

    // Food
    { chinese: '米饭', pinyin: 'mǐfàn', english: 'Rice', category: 'food' },
    { chinese: '面', pinyin: 'miàn', english: 'Noodles', category: 'food' },
    { chinese: '水', pinyin: 'shuǐ', english: 'Water', category: 'food' },
    { chinese: '茶', pinyin: 'chá', english: 'Tea', category: 'food' },
    { chinese: '咖啡', pinyin: 'kāfēi', english: 'Coffee', category: 'food' },
    { chinese: '鸡', pinyin: 'jī', english: 'Chicken', category: 'food' },
    { chinese: '鱼', pinyin: 'yú', english: 'Fish', category: 'food' },
    { chinese: '蔬菜', pinyin: 'shūcài', english: 'Vegetables', category: 'food' },

    // Actions & Verbs
    { chinese: '吃', pinyin: 'chī', english: 'Eat', category: 'actions' },
    { chinese: '喝', pinyin: 'hē', english: 'Drink', category: 'actions' },
    { chinese: '睡', pinyin: 'shuì', english: 'Sleep', category: 'actions' },
    { chinese: '看', pinyin: 'kàn', english: 'Look/Watch', category: 'actions' },
    { chinese: '说', pinyin: 'shuō', english: 'Speak', category: 'actions' },
    { chinese: '听', pinyin: 'tīng', english: 'Listen', category: 'actions' },
    { chinese: '读', pinyin: 'dú', english: 'Read', category: 'actions' },
    { chinese: '写', pinyin: 'xiě', english: 'Write', category: 'actions' },
    { chinese: '走', pinyin: 'zǒu', english: 'Walk', category: 'actions' },
    { chinese: '坐', pinyin: 'zuò', english: 'Sit', category: 'actions' },
    { chinese: '站', pinyin: 'zhàn', english: 'Stand', category: 'actions' },
    { chinese: '去', pinyin: 'qù', english: 'Go', category: 'actions' },
    { chinese: '来', pinyin: 'lái', english: 'Come', category: 'actions' },
];

// Dialogues for practice
const dialogues = [
    {
        id: 1,
        title: 'Greeting Dialogue',
        lines: [
            {
                speaker: 'Person A',
                chinese: '你好！',
                pinyin: 'Nǐ hǎo!',
                english: 'Hello!'
            },
            {
                speaker: 'Person B',
                chinese: '你好！你好吗？',
                pinyin: 'Nǐ hǎo! Nǐ hǎo ma?',
                english: 'Hello! How are you?'
            },
            {
                speaker: 'Person A',
                chinese: '我很好，谢谢。你呢？',
                pinyin: 'Wǒ hěn hǎo, xièxie. Nǐ ne?',
                english: 'I am very well, thank you. And you?'
            },
            {
                speaker: 'Person B',
                chinese: '我也很好，谢谢。',
                pinyin: 'Wǒ yě hěn hǎo, xièxie.',
                english: 'I am also very well, thank you.'
            }
        ]
    },
    {
        id: 2,
        title: 'Introduction Dialogue',
        lines: [
            {
                speaker: 'Person A',
                chinese: '你叫什么名字？',
                pinyin: 'Nǐ jiào shénme míngzi?',
                english: 'What is your name?'
            },
            {
                speaker: 'Person B',
                chinese: '我叫李明。你呢？',
                pinyin: 'Wǒ jiào Lǐ Míng. Nǐ ne?',
                english: 'My name is Li Ming. And you?'
            },
            {
                speaker: 'Person A',
                chinese: '我叫王芳。很高兴认识你。',
                pinyin: 'Wǒ jiào Wáng Fāng. Hěn gāoxìng rènshi nǐ.',
                english: 'My name is Wang Fang. Nice to meet you.'
            },
            {
                speaker: 'Person B',
                chinese: '我也很高兴认识你。',
                pinyin: 'Wǒ yě hěn gāoxìng rènshi nǐ.',
                english: 'I am also very pleased to meet you.'
            }
        ]
    },
    {
        id: 3,
        title: 'Polite Phrases Dialogue',
        lines: [
            {
                speaker: 'Person A',
                chinese: '请问，洗手间在哪里？',
                pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?',
                english: 'Excuse me, where is the restroom?'
            },
            {
                speaker: 'Person B',
                chinese: '洗手间在那边。请跟我来。',
                pinyin: 'Xǐshǒujiān zài nàbiān. Qǐng gēn wǒ lái.',
                english: 'The restroom is over there. Please follow me.'
            },
            {
                speaker: 'Person A',
                chinese: '谢谢你的帮助！',
                pinyin: 'Xièxie nǐ de bāngzhù!',
                english: 'Thank you for your help!'
            },
            {
                speaker: 'Person B',
                chinese: '不客气，再见！',
                pinyin: 'Búkèqi, zàijiàn!',
                english: 'You are welcome, goodbye!'
            }
        ]
    }
];
