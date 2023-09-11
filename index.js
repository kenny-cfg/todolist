const buttonElements = document.getElementsByTagName('button')
const inputElements = document.getElementsByTagName('input')

if (buttonElements.length !== 1) {
  throw new Error('Only one button allowed')
}

if (inputElements.length !== 1) {
  throw new Error('Only one input box allowed')
}

const buttonElement = buttonElements[0]
const inputElement = inputElements[0]

buttonElement.addEventListener('click', () => {
  const newTodoItem = inputElement.value
  console.log('Button clicked, input is: ', newTodoItem)
})