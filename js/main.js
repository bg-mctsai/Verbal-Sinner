
const scenes = [
    {
        "scene": "scene1",
        "duration": 7,
        "dialogues": [
            {
                "speaker": "旁白",
                "line": "你很早就學會一件事。在家裡，你最好不要佔位置。"
            },
            {
                "speaker": "EQ 系統",
                "line": "家人不是討厭你。他們只是已經習慣——你不存在。連你的生日，他們都記成別人的。你的存在，只是他們生活中的背景噪音。"
            }
        ],
        "images": [
            "images/scene1/1.jpg",
            "images/scene1/2.jpg",
            "images/scene1/3.jpg"
        ]
    },
    {
        "scene": "scene2",
        "duration": 8,
        "dialogues": [
            {
                "speaker": "旁白",
                "line": "你不是沒能力。只是你的努力，永遠寫在別人的名字下面。"
            },
            {
                "speaker": "EQ 系統",
                "line": "你把「好相處」當成生存技能。結果呢？他們只記得你很便宜。便宜到——連黑鍋都讓你背。離職那天，你的位置立刻被填滿。沒有人記得你叫什麼名字。"
            }
        ],
        "images": [
            "images/scene2/1.jpg",
            "images/scene2/2.jpg",
            "images/scene2/3.jpg"
        ]
    },
    {
        "scene": "scene3",
        "duration": 8,
        "dialogues": [
            {
                "speaker": "旁白",
                "line": "你以為那是陪伴。後來才明白，你只是填補空白的選項。"
            },
            {
                "speaker": "EQ 系統",
                "line": "殘酷一點說。他不是背叛你。他從來沒有選過你。你連被背叛的資格都沒有。你以為的愛情，只是他無聊時的消遣。分手後三天，他公開了新戀情。你才發現，你從來沒有被公開過。"
            }
        ],
        "images": [
            "images/scene3/1.jpg",
            "images/scene3/2.jpg",
            "images/scene3/3.jpg"
        ]
    },
    {
        "scene": "scene4",
        "duration": 7,
        "dialogues": [
            {
                "speaker": "旁白",
                "line": "那一天，你沒有崩潰。因為你早就，沒有力氣崩潰了。"
            },
            {
                "speaker": "EQ 系統",
                "line": "你不是突然撐不住。你是一直撐，卻從沒被接住。連求救，都沒有人接。你連崩潰的資格都沒有。因為崩潰，需要有人在意。"
            }
        ],
        "images": [
            "images/scene4/1.jpg",
            "images/scene4/2.jpg",
            "images/scene4/3.jpg"
        ]
    },
    {
        "scene": "scene5",
        "duration": 6,
        "dialogues": [
            {
                "speaker": "旁白",
                "line": "你的生命，在那一刻停止了。最後一個念頭是：沒有人會在意。連你自己，都習慣了不被在意。"
            }
        ],
        "images": [
            "images/scene5/1.jpg",
            "images/scene5/2.jpg",
            "images/scene5/3.jpg"
        ]
    },
    {
        "scene": "scene6",
        "duration": 7,
        "dialogues": [
            {
                "speaker": "旁白",
                "line": "世界繼續前進。沒有人突然失去方向。因為你，從來不是任何人的重心。連你的葬禮，都只有你一個人。"
            },
            {
                "speaker": "EQ 系統",
                "line": "更正一下。不是「只有你一個人」。是連你都不在場。你的遺物被當垃圾丟掉。你的訃聞，連名字都寫錯。你的一生，就這樣被徹底抹除。"
            }
        ],
        "images": [
            "images/scene6/1.jpg",
            "images/scene6/2.jpg",
            "images/scene6/3.jpg"
        ]
    },
    {
        "scene": "scene7",
        "duration": 7,
        "dialogues": [
            {
                "speaker": "EQ 系統",
                "line": "總結你的一生。過度討好、害怕衝突、把界線讓給所有人、連被傷害，都不敢說痛、連被利用，都說服自己那是愛。你不是善良。你只是不敢要。你以為的善良，只是軟弱的包裝。你以為的忍耐，只是不敢反抗的藉口。而世界，從不尊重不敢要的人。更不會尊重，連反抗都不敢的人。你連死，都死得這麼安靜。"
            }
        ],
        "images": [
            "images/scene7/1.jpg",
            "images/scene7/2.jpg",
            "images/scene7/3.jpg"
        ]
    },
    {
        "scene": "scene8",
        "duration": 6,
        "dialogues": [
            {
                "speaker": "EQ 系統",
                "line": "我不會安慰你。因為你的一生，已經證明了安慰沒有用。但我給你一個機會。不是重來一次忍耐的人生，而是——重新學會怎麼面對。這一次，你必須學會說「不」。你必須學會要。"
            }
        ],
        "images": [
            "images/scene8/1.jpg",
            "images/scene8/2.jpg",
            "images/scene8/3.jpg"
        ]
    },
    {
        "scene": "scene9",
        "duration": 4,
        "dialogues": [
            {
                "speaker": "EQ 系統",
                "line": "這一次，沒有人會自動尊重你。沒有人會自動愛你。沒有人會自動在意你。你要學會——用對話站住自己，用言語爭取尊重，用嘴砲贏得位置。才有人站在你身邊。"
            }
        ],
        "images": [
            "images/scene9/1.jpg",
            "images/scene9/2.jpg",
            "images/scene9/3.jpg"
        ]
    }
];

const backgroundLayer = document.getElementById('background-layer');
const dialogueBox = document.getElementById('dialogue-box');
const speakerElement = document.getElementById('speaker');
const dialogueTextElement = document.getElementById('dialogue-text');
const startButton = document.getElementById('start-button');
const refuseButton = document.getElementById('refuse-button');

let currentSceneIndex = 0;
let currentDialogueIndex = 0;
let imageInterval;

function showDialogue() {
    const scene = scenes[currentSceneIndex];
    const dialogue = scene.dialogues[currentDialogueIndex];
    speakerElement.textContent = dialogue.speaker;
    dialogueTextElement.textContent = dialogue.line;
    dialogueBox.style.display = 'block';
}

function nextDialogue() {
    const scene = scenes[currentSceneIndex];
    currentDialogueIndex++;
    if (currentDialogueIndex < scene.dialogues.length) {
        showDialogue();
    } else {
        nextScene();
    }
}

function nextScene() {
    clearInterval(imageInterval);
    currentSceneIndex++;
    currentDialogueIndex = 0;
    if (currentSceneIndex < scenes.length) {
        playScene();
    } else {
        endIntro();
    }
}

function playScene() {
    const scene = scenes[currentSceneIndex];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        backgroundLayer.style.backgroundImage = `url(${scene.images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % scene.images.length;
    }

    changeBackgroundImage();
    imageInterval = setInterval(changeBackgroundImage, 2000); 
    
    showDialogue();
    setTimeout(nextDialogue, scene.duration * 1000 / scene.dialogues.length);
}

function endIntro() {
    dialogueBox.style.display = 'none';
    startButton.style.display = 'block';
    refuseButton.style.display = 'block';
    backgroundLayer.style.backgroundImage = `url('images/scene9/3.jpg')`; 
}


startButton.addEventListener('click', () => {
    // 進入遊戲主體
    console.log("遊戲開始");
});

// 開場動畫結束後，每秒檢查是否可以點擊 "我拒絕" 按鈕
let refuseCount = 0;
setInterval(() => {
    refuseCount++;
    if (refuseCount >= 5) {
        refuseButton.disabled = false;
        refuseButton.textContent = "我拒絕 (可點擊)"
    }
}, 1000);

refuseButton.addEventListener('click', () => {
    if(!refuseButton.disabled){
        // 觸發拒絕後的彩蛋或結局
        console.log("觸發拒絕結局");
    }
});


playScene();
