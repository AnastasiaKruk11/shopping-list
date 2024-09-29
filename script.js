/* Новые элементы должны добавляться в список по нажатию на Enter */
const saveInput = document.querySelector('#input');
const groceriesItems = document.querySelector('#items');

saveInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = saveInput.value;

        const newItem = document.createElement('div');
        newItem.textContent = itemText;

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        })

        if (itemText != '') {
            groceriesItems.append(newItem);
        }

        saveInput.value = '';
    }

})

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */


/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */