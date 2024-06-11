const container = document.querySelector('.CustomTab')
const primary = container.querySelector('.nav-tabs')
const primaryItems = container.querySelectorAll('.nav-tabs > li:not(.-more)')
container.classList.add('--jsfied')

// insert "more" button and duplicate the list

primary.insertAdjacentHTML('beforeend', `
  <li class="-more">
    <button type="button" aria-haspopup="true" aria-expanded="false">
	<i><svg id="Page-1" width="21" height="20" viewBox="0 0 21 20">
	<g id="Dribbble-Light-Preview" transform="translate(-139 -200)">
	  <g id="icons" transform="translate(56 160)">
		<path id="menu_navigation_grid-_1528_" data-name="menu_navigation_grid-[#1528]" d="M101.9,57.009a1.063,1.063,0,0,1-1.1.991h-3.15a.98.98,0,0,1-1-.991v-3a.994.994,0,0,1,1-1.009h3.15a1.077,1.077,0,0,1,1.1,1.009ZM100.8,51h-3.15a3.044,3.044,0,0,0-3.1,3.009v3A3.029,3.029,0,0,0,97.653,60h3.15a3.112,3.112,0,0,0,3.2-2.991v-3A3.127,3.127,0,0,0,100.8,51ZM90.35,57.009a1.063,1.063,0,0,1-1.1.991H86.1a.98.98,0,0,1-1-.991v-3A.994.994,0,0,1,86.1,53h3.15a1.077,1.077,0,0,1,1.1,1.009ZM89.253,51H86.1A3.044,3.044,0,0,0,83,54.009v3A3.029,3.029,0,0,0,86.1,60h3.15a3.112,3.112,0,0,0,3.2-2.991v-3A3.127,3.127,0,0,0,89.253,51ZM101.9,46.009a1.063,1.063,0,0,1-1.1.991h-3.15a.98.98,0,0,1-1-.991v-3a.994.994,0,0,1,1-1.009h3.15a1.077,1.077,0,0,1,1.1,1.009ZM100.8,40h-3.15a3.044,3.044,0,0,0-3.1,3.009v3A3.029,3.029,0,0,0,97.653,49h3.15a3.112,3.112,0,0,0,3.2-2.991v-3A3.127,3.127,0,0,0,100.8,40ZM90.35,46.009a1.063,1.063,0,0,1-1.1.991H86.1a.98.98,0,0,1-1-.991v-3A.994.994,0,0,1,86.1,42h3.15a1.077,1.077,0,0,1,1.1,1.009ZM89.253,40H86.1A3.044,3.044,0,0,0,83,43.009v3A3.029,3.029,0,0,0,86.1,49h3.15a3.112,3.112,0,0,0,3.2-2.991v-3A3.127,3.127,0,0,0,89.253,40Z" fill="#003d7c" fill-rule="evenodd"/>
	  </g>
	</g>
  </svg>
  </i>
    </button>
    <ul class="nav-tabs-responsive">
      ${primary.innerHTML}
    </ul>
  </li>
`)
const secondary = container.querySelector('.nav-tabs-responsive')
const secondaryItems = secondary.querySelectorAll('li')
const allItems = container.querySelectorAll('li')
const moreLi = primary.querySelector('.-more')
const moreBtn = moreLi.querySelector('button')
moreBtn.addEventListener('click', (e) => {
  e.preventDefault()
  container.classList.toggle('--show-secondary')
  moreBtn.setAttribute('aria-expanded', container.classList.contains('--show-secondary'))
})

// adapt tabs

const doAdapt = () => {
  // reveal all items for the calculation
  allItems.forEach((item) => {
    item.classList.remove('--hidden')
  })

  // hide items that won't fit in the Primary
  let stopWidth = moreBtn.offsetWidth
  let hiddenItems = []
  const primaryWidth = primary.offsetWidth
  primaryItems.forEach((item, i) => {
    if(primaryWidth >= stopWidth + item.offsetWidth) {
      stopWidth += item.offsetWidth
    } else {
      item.classList.add('--hidden')
      hiddenItems.push(i)
    }
  })
  
  // toggle the visibility of More button and items in Secondary
  if(!hiddenItems.length) {
    moreLi.classList.add('--hidden')
    container.classList.remove('--show-secondary')
    moreBtn.setAttribute('aria-expanded', false)
  }
  else {  
    secondaryItems.forEach((item, i) => {
      if(!hiddenItems.includes(i)) {
        item.classList.add('--hidden')
      }
    })
  }
}

doAdapt() // adapt immediately on load
window.addEventListener('resize', doAdapt) // adapt on window resize

// hide Secondary on the outside click

document.addEventListener('click', (e) => {
  let el = e.target
  while(el) {
    if(el === secondary || el === moreBtn) {
      return;
    }
    el = el.parentNode
  }
  container.classList.remove('--show-secondary')
  moreBtn.setAttribute('aria-expanded', false)
})