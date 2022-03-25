const getAdvideAPI = async () => {
  try {
    const containerId = document.getElementById('advice_id')
    const containerMessage = document.getElementById('advice_message')
    containerId.textContent = 'ADVICE #00'
    containerMessage.textContent = 'Loading...'
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    containerId.textContent = `ADVICE #${data.slip.id}`
    containerMessage.textContent = `"${data.slip.advice}"`
  } catch (error) {
    alert('Error, verifica tu conexion a internet.')
  }
}

const button = document.getElementById('btn-dice')
button.addEventListener('click', getAdvideAPI)

window.onload = getAdvideAPI()

window.onresize = (event) => {
  const widthScreen = event.target.screen.width
  if (widthScreen <= 600) {
    const src = document.getElementById('img-divider').src.split('/images/')
    const newSrc = `${src[0]}/images/pattern-divider-mobile.svg`
    document.getElementById('img-divider').src = newSrc
    console.log(newSrc)
  } else if (widthScreen >= 600) {
    const src = document.getElementById('img-divider').src.split('/images/')
    const newSrc = `${src[0]}/images/pattern-divider-desktop.svg`
    document.getElementById('img-divider').src = newSrc
  }
}