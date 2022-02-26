let getGoods = () => {

  //localStorage.clear()

  const renderGoods = (goods) => {
    //console.log(goods)

    const goodsContainer = document.querySelector('.long-goods-list')
    goodsContainer.innerHTML = ''
    
    goods.forEach(good => {
      const goodBlock = document.createElement('div')

      goodBlock.classList.add('col-lg-3')
      goodBlock.classList.add('col-sm-6')

      goodBlock.innerHTML = `
        <div class="goods-card">
						<span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
						<img src="db/${good.img}" alt="${good.name}" class="goods-image">
						<h3 class="goods-title">${good.name}</h3>
						<p class="goods-description">${good.description}</p>
						<button class="button goods-card-btn add-to-cart" data-id="${good.id}">
							<span class="button-price">$${good.price}</span>
						</button>
				</div>
      `
      goodsContainer.append(goodBlock)
    })
  }

  const getData = (value, category) => {
    fetch('../db/db.json')
    .then((response) => response.json())
    .then((data) => {

      const array = category ? data.filter((item) => item[category] === value) : data

      localStorage.setItem('goods', JSON.stringify(array))

      if (window.location.pathname !== '/goods.html'){
        window.location.href = '/goods.html'
      }
      else{
        renderGoods(array)     
      }

      
      
    })
  }

  try{
  const linkViewAll = document.querySelector('.more')
  //console.dir(linkViewAll)

  
    linkViewAll.addEventListener('click', (e) => {
        e.preventDefault()
        //window.location.href = '/goods.html'
        getData('all')

        // fetch('../db/db.json')
        // .then((response) => response.json())
        // .then((data) => {
          
        //   localStorage.setItem('goods', JSON.stringify(data))
        //   renderGoods(data)
        //   console.dir(data)
        // })
        
    })
  }
  catch(e){

  }
      

  

  const links = document.querySelectorAll(".navigation-link")

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const linkValue = link.textContent;
      const category = link.dataset.field

      getData(linkValue, category)
    })
  })

  // localStorage.setItem('goods', JSON.stringify({name: 'all'}))

  // const goods = JSON.parse(localStorage.getItem('goods'))

  // console.log(localStorage)

  // localStorage.removeItem('goods')

  // console.log(localStorage)
  
  if (localStorage.getItem('goods') && window.location.pathname === '/goods.html'){
    renderGoods(JSON.parse(localStorage.getItem('goods')))
  }

}

getGoods()

