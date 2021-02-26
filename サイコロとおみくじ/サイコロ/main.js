// 要素取得
const saikoro = document.getElementById("saikoro");

// サイの目
function sainome() {
    const nmb = Math.floor(Math.random() * 6 + 1); // 変数nmbにMath.random()の乱数を代入する
    saikoro.innerHTML = nmb;　// 変数saikoroの中身を変数nmbに変更(innerHTML)する
}

// クリックイベント
// -addEventLister(挙動, 変数名, true or false);
saikoro.addEventListener("click", sainome, false); // 変数saikoroをクリックしたときに関数sainome()を実行する．


