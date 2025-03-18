const btn=document.getElementById('output-btn');

btn.addEventListener('click', ()=>{
    console.log('ボタンがクリックされました');

});

const addBtn=document.getElementById('add-btn');
const parentList=document.getElementById('present-list');

addBtn.addEventListener('click', ()=>{
    const childlist=document.createElement('li');

    childlist.textContent='これはlist要素です。';

    parentList.appendChild(childlist);
});

const countBtn=document.getElementById('count-btn');

countBtn.addEventListener('click', ()=>{
    const text = document.forms.textForm.textBox.value;

    console.log(text.length + '文字');
});

const areaBtn=document.getElementById('area-btn');

areaBtn.addEventListener('click', ()=>{
    const area=document.forms.areaForm.area.value;

    console.log(area);
});

const osBtn=document.getElementById('os-btn');
osBtn.addEventListener('click', ()=>{
    const os=document.forms.osForm.os;

    for(let i=0; i<os.length; i++){
        if(os[i].checked){
            console.log(os[i].value);
        }
    }
});
