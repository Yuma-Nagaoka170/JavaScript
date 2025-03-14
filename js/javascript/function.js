const sayGoodMorning = () => {
    console.log('おはようございます！');
    console.log('昨日はよく眠れましたか？');
    console.log('今日も一日頑張りましょう！');
}
const sayGoodEvening = () => {
    console.log('こんばんは！');
    console.log('今日も一日お疲れ様でした！');
    console.log('明日も頑張りましょう！');
}
    sayGoodMorning();

    sayGoodEvening();

    const calculateTotal = (price, shippingFee) => {
        console.log(price + shippingFee + '円');
    }

    calculateTotal(1200, 600);

    const double = (num) => {
        return num * 2;
    }

    console.log(double(30));

    const userName = 'C&M太郎';
    console.log(userName);

    const useValiable = () => {
        console.log(userName);
    }

    useValiable();