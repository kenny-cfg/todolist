const buttonElements = document.getElementsByTagName('button')
const inputElements = document.getElementsByTagName('input')
const listContainerElements = document.getElementsByTagName('ul')
const todoListItems = ['TODO FROM JS 1', 'TODO FROM JS 2', 'TODO FROM JS 3']

if (buttonElements.length !== 1) {
  throw new Error('Only one button allowed')
}

if (inputElements.length !== 1) {
  throw new Error('Only one input box allowed')
}

if (listContainerElements.length !== 1) {
  throw new Error('Only one list container allowed')
}

const buttonElement = buttonElements[0]
const inputElement = inputElements[0]
const listContainerElement = listContainerElements[0]

refreshList()

buttonElement.addEventListener('click', () => {
  const newTodoItem = inputElement.value
  todoListItems.append(newTodoItem)
  refreshList()
})

function refreshList() {
  listContainerElement.innerHTML = ''
  for (const todoItem of todoListItems) {
    const newListItem = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.addEventListener('click', () => {
      console.log('HELLO')
    })
    deleteButton.innerText = 'Delete'
    newListItem.innerText = `${todoItem} `
    newListItem.append(deleteButton)
    listContainerElement.append(newListItem)
  }
}