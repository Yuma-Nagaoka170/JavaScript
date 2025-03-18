const button = document.getElementById('check-btn');
button.addEventListener('click', validation);
function validation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const output =document.getElementById('output');
   
    let errors = [];

    if(name.trim() === '') {
        errors.push('名前が入力されていません');
    }else if (name.length > 10) {
        errors.push('名前は10文字を越えています。');
    }

    const emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+$/;
    if(!emailPattern.test(email)) {
        errors.push('メールアドレスの入力形式が正しくありません');
    }

    if(errors.length > 0) {
        output.innerHTML = errors.join('<br>');
    } else {
       output.innerHTML = '';
       alert('バリデーションOKです。');
    }
}