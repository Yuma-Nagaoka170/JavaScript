let num = Math.floor(Math.random() * 5);

console.log('最初の値は' + num + 'です。');

while(num !== 0) {
  num = Math.floor(Math.random() * 5);
  console.log('現在の値は' + num + 'です。');
}