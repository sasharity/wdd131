const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#favchap');
const li = document.createElement('li');
const deletebutton = document.createElement('button');
li.textContent = input.value;
deletebutton.textContent = '❌';

li.append(deletebutton);
list.append(li);

buttonElement.addEventllistener('click', function(){
    if (input.value.trim() !== "") {
        const button = document.querySelector('button');
    }
    deletebutton.addEventListener('click', function (){
        list.removeChild(li);
        input.focus();
    });
    input.value = '';
    input.focus();
})
