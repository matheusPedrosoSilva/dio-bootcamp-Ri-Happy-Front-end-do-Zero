const emojis = [
    "😜",
    "😜",
    "😎",
    "😎",
    "😂",
    "😂",
    "🤑",
    "🤑",
    "🤯",
    "🤯",
    "🤬",
    "🤬",
    "🤓",
    "🤓",
    "😈",
    "😈",
];
let openCards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2: -1));

const state = {
    view: {

    },
    values: {

    },
    action: {

    },
}

    function init() {

    };

init()