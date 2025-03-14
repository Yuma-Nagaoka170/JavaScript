const userNames = ['candm太郎', 'candm次郎', 'candm三郎','candm 四郎'];

console.log(userNames);

const newValue = 'candm花子';
userNames.splice(1, 0, newValue)

userNames[5] = 'candm五郎';

console.log(userNames);

console.log(userNames[2]);
