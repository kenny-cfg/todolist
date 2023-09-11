const buttonElements = document.getElementsByTagName('button')

if (buttonElements.length !== 1) {
  throw new Error('Only one button allowed')
}

const buttonElement = buttonElements[0]

buttonElement.addEventListener('click', () => {
  console.log('Button clicked')
})