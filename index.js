const buttonElement = document.getElementsByTagName('button')

if (buttonElement.length !== 1) {
  throw new Error('Only one button allowed')
}