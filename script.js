/* Новые элементы должны добавляться в список по нажатию на Enter */
const saveInput = document.querySelector('#input');
const groceriesItems = document.querySelector('#items');

saveInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = saveInput.value;

        const newItem = document.createElement('div');
        newItem.classList.add('newItem');
        newItem.textContent = itemText;

        if (itemText != '') {
            groceriesItems.append(newItem);
        }

        saveInput.value = '';
    }

    const savedItems = document.querySelectorAll('.newItem');

    for (let savedItem of savedItems) {
        savedItem.addEventListener('click', function() {
            savedItem.classList.toggle('done');
        })
    }
})

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */


/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */