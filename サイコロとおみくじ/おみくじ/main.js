// 要素取得
const omikuji = document.getElementById("omikuji");

// getElementByIdは，HTML側にid属性をつけておくと，そのID指定することで要素を取り出すことができる．


// 運気
const unki = [  //変数unkioに配列で運気の種類を入れる
    "大吉",
    "吉",
    "中吉",
    "小吉",
    "末吉",
    "凶",
    "大凶" //配列の時，最後のコンマは要らない！　配列のカウントは0から始まるが今回は文字のため関係ない
]

// 結果
// function kekka() {  
//     const nmb = Math.floor(Math.random() * unki.length); //乱数にunkiの配列数(length)を掛ける
//     omikuji.innerHTML = unki[nmb];  //omikujiの中身を配列unkiのnmb番号に変更
// }

// // イベント
// omikuji.addEventListener("click", kekka, false);
// // 対象要素.addEventListener( 種類, 関数, false);


// addEventListerメソッドであらうイベントが発生したときに実行したい処理を登録することができる．


// 無名関数を設定する方法
omikuji.addEventListener("click", function kekka() {
    const nmb = Math.floor(Math.random() * unki.length);
    omikuji.innerHTML = unki[nmb]; //省略なしだったら，document.getElementById("omikuji").innerHTML = unki[nmb];
}, false);
// innerHTMLとはhtml要素の中身を変更することができるjsの便利な関数
// 

// アロー関数を設定する方法
// omikuji.addEventListener("click", (kekka) => {
//     const nmb = Math.floor(Math.random() * unki.length);
//     omikuji.innerHTML = unki[nmb];
// }, false);

