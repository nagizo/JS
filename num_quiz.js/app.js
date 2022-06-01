const start = document.querySelector('.StartBtn');
let forecas = document.querySelector('.ForecasNumber');
let correct = document.querySelector('.CorrectNumber');
const decision = document.querySelector('.DecisionBtn')





/*
1~100にランダムで値を決める
 */
start.addEventListener('click', function() {
    correct = Math.floor(Math.random() *100)+1;
    console.log(correct);
});


decision.addEventListener('click', function() {
    
    let ForcasNum = parseInt(forecas.value);

    if ((ForcasNum === correct)) {
        alert('正解です');
    } else if (ForcasNum >= correct) {
        alert('答えより大きいです');

    }　else {
        alert('答えより小さいです');
    }
});
