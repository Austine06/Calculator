
const screen = document.querySelector('#a-textarea');
const buttons = document.querySelectorAll('.numbers button');
const equalTo = document.querySelector('#equalto');
const backspace = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.menu-list')
const panel = document.querySelector('.numbers')


console.log(menu)
buttons.forEach(eachButton => {
    eachButton.addEventListener('click', (e) => {
        if(eachButton.hasAttribute('data-num')){
            let value = e.target.dataset.num;
            screen.value += value;
        }
    })
});


equalTo.addEventListener('click', (e) => {
    if(screen.value === " "){
        screen.value = " ";
    }else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

backspace.addEventListener('click', (e) => {
    screen.value = screen.value.toString().slice(0, -1);
    })

clear.addEventListener('click', (e) => {
    screen.value = '';
})

menuButton.addEventListener('click', (e) => {
    menu.style.display = 'block';
    // panel.style.marginTop = '48px';
})