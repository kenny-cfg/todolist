const buttonElements = document.getElementsByTagName('button')
const listContainerElements = document.getElementsByTagName('ul')
const todoListItems = ['TODO FROM JS 1', 'TODO FROM JS 2', 'TODO FROM JS 3']

if (buttonElements.length !== 1) {
  throw new Error('Only one button allowed')
}

if (listContainerElements.length !== 1) {
  throw new Error('Only one list container allowed')
}

const buttonElement = buttonElements[0]
const listContainerElement = listContainerElements[0]

refreshList()

buttonElement.addEventListener('click', () => {
  const newTodoItem = getInputElement().value
  todoListItems.push(newTodoItem)
  refreshList()
})

function getInputElement() {
  const inputElements = document.getElementsByTagName('input')
  if (inputElements.length !== 1) {
    throw new Error('Only one input box allowed')
  }
  return inputElements[0]
}

function refreshList() {
  clearElements()
  for (let i = 0; i < todoListItems.length; i++) {
    const todoItem = todoListItems[i]
    const newListItem = makeNewListItem(todoItem, i)
    listContainerElement.append(newListItem)
  }
}

function clearElements() {
  getInputElement().value = ''
  listContainerElement.innerHTML = ''
}

function makeNewListItem(todoItem, i) {
  const newListItem = document.createElement('li')
  const deleteButton = document.createElement('button')
  deleteButton.addEventListener('click', () => {
    todoListItems.splice(i, 1)
    refreshList()
  })
  deleteButton.innerText = 'Delete'
  newListItem.innerText = `${todoItem} `
  newListItem.append(deleteButton)
  return newListItem
}