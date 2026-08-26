/* ==========================================================
   js/data-zh.js
   汉语没有时态变位（动词形式不变），
   但用「时体助词」和时间信号词表达时间关系。
   本练习聚焦：了 / 过 / 着 / 在 / 是...的 / 才

   beforePinyin/afterPinyin: Pinyin für den festen Satztext,
   wird von app.js als Hover-Tooltip angezeigt.
========================================================== */

const chineseExercise = {

    language: "zh",

    title: "汉语时体助词练习",

    description:
        "根据句子中的时间信号词，填入正确的时体助词（了 / 过 / 着 等）。",

    ui: {

        check: "✓ 检查",

        solution: "📖 答案",

        reset: "🔄 重新"

    },

    labels: {

        signal: "💡 信号词",

        tense: "💡 语法点",

        formation: "💡 结构"

    },

    messages: {

        perfect: "🏆 太棒了！全部正确！",

        good: "👏 很好！",

        ok: "👍 做得不错，继续练习。",

        tryAgain: "📚 继续加油！",

        solutionsShown:
            "答案已显示。"

    },

    story: [

{
before:"昨天我吃",
beforePinyin:"Zuótiān wǒ chī",
after:"晚饭。",
afterPinyin:"wǎnfàn.",
verb:"吃 (chī)",
answer:"了",
signal:"昨天",
tense:"完成体（了）",
formation:"动词 + 了"
},

{
before:"她已经看",
beforePinyin:"Tā yǐjīng kàn",
after:"这本书。",
afterPinyin:"zhè běn shū.",
verb:"看 (kàn)",
answer:"了",
signal:"已经",
tense:"完成体（了）",
formation:"已经 + 动词 + 了"
},

{
before:"他曾经去",
beforePinyin:"Tā céngjīng qù",
after:"中国。",
afterPinyin:"Zhōngguó.",
verb:"去 (qù)",
answer:"过",
signal:"曾经",
tense:"经历体（过）",
formation:"曾经 + 动词 + 过"
},

{
before:"我还没吃",
beforePinyin:"Wǒ hái méi chī",
after:"北京烤鸭。",
afterPinyin:"Běijīng kǎoyā.",
verb:"吃 (chī)",
answer:"过",
signal:"还没",
tense:"经历体否定（没...过）",
formation:"还没 + 动词 + 过"
},

{
before:"他现在",
beforePinyin:"Tā xiànzài",
after:"打电话。",
afterPinyin:"dǎ diànhuà.",
verb:"打电话 (dǎ diànhuà)",
answer:"在",
signal:"现在",
tense:"进行体（在）",
formation:"在 + 动词"
},

{
before:"窗户开",
beforePinyin:"Chuānghu kāi",
after:"，风很大。",
afterPinyin:", fēng hěn dà.",
verb:"开 (kāi)",
answer:"着",
signal:"状态描述",
tense:"持续体（着）",
formation:"动词 + 着"
},

{
before:"火车快要开",
beforePinyin:"Huǒchē kuàiyào kāi",
after:"。",
afterPinyin:".",
verb:"开 (kāi)",
answer:"了",
signal:"快要",
tense:"将要发生（快要...了）",
formation:"快要 + 动词 + 了"
},

{
before:"他就要毕业",
beforePinyin:"Tā jiùyào bìyè",
after:"。",
afterPinyin:".",
verb:"毕业 (bìyè)",
answer:"了",
signal:"就要",
tense:"将要发生（就要...了）",
formation:"就要 + 动词 + 了"
},

{
before:"我从来没去",
beforePinyin:"Wǒ cónglái méi qù",
after:"欧洲。",
afterPinyin:"Ōuzhōu.",
verb:"去 (qù)",
answer:"过",
signal:"从来没",
tense:"经历体否定（从来没...过）",
formation:"从来没 + 动词 + 过"
},

{
before:"他正吃",
beforePinyin:"Tā zhèng chī",
after:"饭的时候，电话响了。",
afterPinyin:"fàn de shíhou, diànhuà xiǎng le.",
verb:"吃 (chī)",
answer:"着",
signal:"正...的时候",
tense:"进行状态（正...着）",
formation:"正 + 动词 + 着"
},

{
before:"我",
beforePinyin:"Wǒ",
after:"去年在北京学的中文。",
afterPinyin:"qùnián zài Běijīng xué de Zhōngwén.",
verb:"学 (xué)",
answer:"是",
signal:"强调过去的时间/地点",
tense:"是...的 强调句",
formation:"是 + 时间/地点 + 动词 + 的"
},

{
before:"他昨天很晚",
beforePinyin:"Tā zuótiān hěn wǎn",
after:"回家。",
afterPinyin:"huí jiā.",
verb:"回家 (huí jiā)",
answer:"才",
signal:"很晚",
tense:"才（强调较晚才发生）",
formation:"...才 + 动词"
},

{
before:"她曾经住",
beforePinyin:"Tā céngjīng zhù",
after:"上海。",
afterPinyin:"Shànghǎi.",
verb:"住 (zhù)",
answer:"过",
signal:"曾经",
tense:"经历体（过）",
formation:"曾经 + 动词 + 过"
},

{
before:"他已经学",
beforePinyin:"Tā yǐjīng xué",
after:"三年中文了。",
afterPinyin:"sān nián Zhōngwén le.",
verb:"学 (xué)",
answer:"了",
signal:"已经...了",
tense:"持续到现在的动作",
formation:"已经 + 动词 + 了 + 时长 + 了"
},

{
before:"他躺",
beforePinyin:"Tā tǎng",
after:"看电视。",
afterPinyin:"kàn diànshì.",
verb:"躺 (tǎng)",
answer:"着",
signal:"伴随状态",
tense:"持续体（着，表示方式）",
formation:"动词1 + 着 + 动词2"
}

]

};
