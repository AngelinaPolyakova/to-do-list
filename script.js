let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		// здесь будет код для добавление новой li в список

        let li = document.createElement('li');
        li.classList.add('li');
        list.appendChild(li);


        let newDo = document.createElement('span');
        newDo.classList.add('new-do');
        newDo.innerHTML = input.value;
        input.value = '';
        li.appendChild(newDo);

        let edit = document.createElement('span');
        edit.classList.add('edit');
        edit.innerHTML = 'Редактировать';
        edit.addEventListener('click', function(e) {
            let inputEdit = document.createElement('input');
            inputEdit.value = newDo.innerHTML;
            inputEdit.addEventListener('keypress', function(event) {
                if (event.key == 'Enter') {
                    newDo.innerHTML = inputEdit.value;
                    inputEdit.replaceWith(newDo);
                }
            })
            newDo.replaceWith(inputEdit)
        });
        li.appendChild(edit);

        let done = document.createElement('span');
        done.classList.add('done');
        done.innerHTML = 'Сделано!';
        done.addEventListener('click', function(e) {
            e.target.previousElementSibling.previousElementSibling.classList.add('done-through');
        });
        li.appendChild(done);

        let remove = document.createElement('span');
        remove.classList.add('remove');
        remove.innerHTML = 'Удалить';
        remove.addEventListener('click', function(e) {
            e.target.parentNode.remove();
        });
        li.appendChild(remove);
	}
});

