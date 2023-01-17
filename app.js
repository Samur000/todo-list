const input = document.querySelector('#input')
const addBtn = document.querySelector('#btn-add')
const todos = document.querySelector('.todos')

addBtn.addEventListener('click', () => {
   if (input.value !== '') {
      addTodo()
      input.value = ''
   } else {
      alert('Строка пустая!');
   }
})

function addTodo() {

   // Создание todo элемента
   const todo = document.createElement('div')
   todo.classList.add('todo')
   todo.innerHTML = input.value
   todos.append(todo)

   // Создание кнопки выполнено
   const btnDone = document.createElement('button')
   btnDone.innerHTML = 'Выполнено'
   btnDone.classList.add('btn-done')
   btnDone.addEventListener('click', () => {
      todo.classList.toggle('done')
      btnDone.classList.toggle('done-btn-style')
   })

   //Создание кнопки удалить
   const btnDelete = document.createElement('button')
   btnDelete.innerHTML = 'Удалить'
   btnDelete.classList.add('btn-delete')
   btnDelete.addEventListener('click', () => {
      todo.remove()
   })

   const div = document.createElement('span')
   div.append(btnDone, btnDelete)

   todo.append(div)

}

