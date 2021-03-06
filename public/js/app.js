const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOn = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value
    messageOn.textContent = 'Loading forcast for location ' + location
    messageTwo.textContent = ''

    const url = '/weather?address=' + location
    fetch(url).then( (response) => {
        response.json().then( (data) => {
            if (data.error) {
                console.log('Error=' + data.error)
                messageOn.textContent = data.error

            } else {
                console.log('location=' + data.location)
                console.log('forecast=' + data.forecast)
                messageOn.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
