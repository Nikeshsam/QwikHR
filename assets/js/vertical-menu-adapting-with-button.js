const container1 = document.querySelector('.vertical-menu-adapting')
const primary1 = container1.querySelector('.-primary')
const primaryItems1 = container1.querySelectorAll('.-primary > li:not(.-more)')
container1.classList.add('--jsfied')

// insert "more" button and duplicate the list

primary1.insertAdjacentHTML('beforeend', `
  <li class="-more">
    <button type="button" aria-haspopup="true" aria-expanded="false">
        <i>
            <svg width="20" height="10" viewBox="0 0 45.002 10.001">
                <path data-name="Path 1829" d="M22.5 0a5 5 0 1 0 5 5 5 5 0 0 0-5-5ZM5 0a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm35 0a5 5 0 1 0 5 5 5 5 0 0 0-5-5Z"/>
            </svg>
        </i> 
        <span>More</span> 
    </button>
    <ul class="-secondary">
      ${primary1.innerHTML} 
    </ul>
  </li>
`)
const secondary1 = container1.querySelector('.-secondary')
const secondaryItems1 = secondary1.querySelectorAll('li')
const allItems1 = container1.querySelectorAll('li')
const moreLi1 = primary1.querySelector('.-more')
const moreBtn1 = moreLi1.querySelector('button')
moreBtn1.addEventListener('click', (e) => {
  e.preventDefault()
  container1.classList.toggle('--show-secondary')
  moreBtn1.setAttribute('aria-expanded', container1.classList.contains('--show-secondary'))
})

// adapt tabs

const doAdapt1 = () => {
    
  // reveal all items for the calculation
  allItems1.forEach((item) => {
    item.classList.remove('--hidden')
  })

  // hide items that won't fit in the Primary
  let stopWidth1 = moreBtn1.offsetHeight;
  //let navHeight = container1.offsetHeight;
  let hiddenItems1 = [];
  const primaryWidth1 = window.innerHeight-50;
  
  primaryItems1.forEach((item, i) => {
    if(primaryWidth1 >= stopWidth1 + item.offsetHeight) {
      stopWidth1 += item.offsetHeight  
    } else {
      item.classList.add('--hidden')
      hiddenItems1.push(i)
    }
  })
  
  // toggle the visibility of More button and items in Secondary
  if(!hiddenItems1.length) {
    moreLi1.classList.add('--hidden')
    container1.classList.remove('--show-secondary')
    moreBtn1.setAttribute('aria-expanded', false)
  }
  else {  
    secondaryItems1.forEach((item, i) => {
      if(!hiddenItems1.includes(i)) {
        item.classList.add('--hidden')
      }
    })
  }
}

doAdapt1() // adapt immediately on load
window.addEventListener('resize', doAdapt1) // adapt on window resize

$('.nav-link').on('click', function(){
  setTimeout(function(){ doAdapt1() }, 30);
});

// hide Secondary on the outside click

document.addEventListener('click', (e) => {
  let el = e.target
  while(el) {
    if(el === secondary1 || el === moreBtn1) {
      return;
    }
    el = el.parentNode
  }
  container1.classList.remove('--show-secondary')
  moreBtn1.setAttribute('aria-expanded', false)
})


function myFunction(that) {
  
  var dropdowns = document.getElementsByClassName("sidebar-dropdown");
  for (let i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("show")) {
      openDropdown.classList.remove("show");
    }
  }

  let nextSibling = that.nextElementSibling;
  nextSibling.classList.toggle("show");
}
