const buttonElements = document.getElementsByTagName('button')
const inputElements = document.getElementsByTagName('input')
const listContainerElements = document.getElementsByTagName('ul')

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

buttonElement.addEventListener('click', () => {
  const newTodoItem = inputElement.value
  const newListItemElement = document.createElement('li')
  newListItemElement.innerText = newTodoItem
  listContainerElement.append(newListItemElement)
})