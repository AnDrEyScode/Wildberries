let getGoods = () => {

  localStorage.clear()

  const getData = () => {
    fetch('/db/db.json')
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('goods', JSON.stringify(data))
    })
  }

  const links = document.querySelectorAll(".navigation-link")

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      getData()
    })
  })

  // localStorage.setItem('goods', JSON.stringify({name: 'all'}))

  // const goods = JSON.parse(localStorage.getItem('goods'))

  // console.log(localStorage)

  // localStorage.removeItem('goods')

  // console.log(localStorage)
  

}

getGoods()