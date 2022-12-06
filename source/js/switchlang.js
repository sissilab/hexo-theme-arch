let shareIcon2 = document.querySelector('#switchlang-icon')
let shareContent2 = document.querySelector('.switchlang-content')
shareIcon2 && shareIcon2.addEventListener("click", openOrHideShareContent, false)

function openOrHideShareContent() {
  let isHidden = shareContent2.classList.contains('hidden')
  if (isHidden) {
    shareContent2.classList.remove('hidden')
  } else {
    shareContent2.classList.add('hidden')
  }
}
