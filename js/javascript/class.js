class Product{
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
    describe(){
        console.log('この商品は' + this.name + 'です。')
    }
}

const shampoo = new Product('シャンプー', 1200, 'ヘアケア');
const coffee = new Product('コーヒー', 500, '飲料');

console.log(shampoo);
console.log(coffee);

shampoo.describe();
coffee.describe();

const user = {
    name: 'C&M太郎',
    age: 36,
    gender: '男性',
        greet:function() {
            console.log(this.name + '、' + this.age + '歳' + this.gender + 'です。よろしくお願いします！');
        }
    };
    
    user.greet();

