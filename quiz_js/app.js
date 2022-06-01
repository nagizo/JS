const quiz = [
    {
        question: 'ドラゴンボールZの登場キャラクターの中で 合体/吸収 を除いたことを条件とした時もっとも戦闘力の高いキャラクターは誰か？',
        answers: [
        '孫悟空',
        'ベジータ',
        '孫悟飯',
        'ヤムチャ',
        ],
        correct: '孫悟飯'
    }, {
        question: 'スーパーサイヤ人になる時の引き金とは？',
        answers: [
            '怒り',
            '悲しみ',
            '喜び',
            '恐怖',
        ],
        correct: '怒り',
    }, {
        question: 'フリーザとの戦いの後地球に戻った際に皆に披露した能力とは？',
        answers: [
            '瞬間移動',
            '未来予知',
            '気弾の吸収',
            '１秒間の時間停止',
        ],
        correct: '瞬間移動',
    },　{
        question: 'セルとの戦いで、悟空が自分の命犠牲にして地球を救った時際の皆に向けたセリフとは？',
        answers: [
            'またな！',
            '死ぬなよみんな、、、',
            'ちくしょぉぉぉ！',
            'バイバイみんな',
        ],
        correct: 'バイバイみんな',
    },　{
        question: '悟空はフュージョンを誰から学んだか？',
        answers: [
            'メタモル星人',
            'ナメック星人',
            'ヤードラット星人',
            'ツフル星人',
        ],
        correct: 'メタモル星人',
    },　{
        question: '一神龍はどんなマイナスエネルギー（ドラゴンボールで願いを叶えて際に生じるエネルギー）から生み出された邪悪龍か？',
        answers: [
            'ベジータとナッパが来襲した際に死んだ悟空を生き返らせた際に生じたマイナスエネルギー',
            'ウパの父ボラを生き返らせた際に生じたマイナスエネルギー',
            'フリーザに殺された人々を生き返らせた際に生じたマイナスエネルギー',
            'ウーロンがギャルのパンティーをもらった際に生じたマイナスエネルギー',
        ],
        correct: 'フリーザに殺された人々を生き返らせた際に生じたマイナスエネルギー',
    }, {
        question: '次の選択肢の中から間違っているものはどれ？',
        answers: [
            '桃白白は元サラリーマン',
            '仙豆は一年に１０粒しか取れない',
            '天津飯にはかめはめ波が効かない',
            '孫悟空は天下一武道会で１度しか優勝していない',
        ],
        correct: '仙豆は一年に１０粒しか取れない',
    }, {
        question: 'ピッコロが今まで圧倒されていた人造人間１７号に対して互角に戦えるようになった理由とは？',
        answers: [
            '精神と時の部屋で一年分の修行をしたから',
            '同じナメック星人のネイルと融合したから',
            '神様と融合したから',
            'Mr.ポポの能力で弱体化されたから',
        ],
        correct: '神様と融合したから',
    }, {
        question: '天下一武道会の会場がある島は次のどこか？',
        answers: [
            'パパイヤ島',
            'ゼリー島',
            'ヨーグル島',
            'サタンシティ',
        ],
        correct: 'パパイヤ島',
    }, {
        question: 'Mrサタンの本名は次のうちのどれか？',
        answers: [
            'マイケル',
            'マリオ',
            'マーク',
            'マージ',
        ],
        correct: 'マーク',
    }, 
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');    
let buttonLength = $button.length;
//クイズの問題、選択肢を定義
const setupQizu = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength ) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex ++;
    }
}
setupQizu();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!!!');
        score++;
    }　else {
        window.alert('不正解!');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        //問題数がまだあればこちらを実行
        setupQizu();
    }　else {
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は'　+ score + '/' + quizLength　+ '問' + 'です！')
    }
};
//ボタンをクリックした時の正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) { 
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
