/*console.time('hello');
console.log(53+44); 
console.log([3,5,7,88]);
console.log({harry:'hehe',marks:55});
console.table({harry:'hehe',marks:55});
console.timeEnd('hello');*/



/*let a=document.body;
console.log(a);
let element=document.createElement('li');
element.innerText='new created';
let ul= document.querySelector('ul.this');
ul.appendChild(element);*/

/*let str='python';
let links=document.links;
let href;
Array.from(links).forEach(function(element){
    href=element.href;
    if(href.includes(str)){
    console.log(href);
}})*/

/*let divElem=document.createElement('div');
let text=document.createTextNode('this is my new creatd div btw');
divElem.appendChild(text);
divElem.setAttribute('id','para');
divElem.setAttribute('style','border:2px solid black ; margin:24px ; padding:5px;');
let container=document.querySelector('.container');
let first=document.getElementById('myfirst');
container.insertBefore(divElem,first);*/

/*let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}*/
let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons)
{
    item.addEventListener('click',function(e){
        buttonText=e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })

}

