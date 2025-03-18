

// ボタンがクリックされたときのイベントリスナーを追加
function changeText() {
    const text = document.getElementById('message'); // HTMLの<p>要素を取得
    setTimeout(() => {text.textContent = '文字が変更されました！'; } , 3000)// テキストを変更
}