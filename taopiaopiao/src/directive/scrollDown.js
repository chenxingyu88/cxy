let isScrollDown = () => {
  let scrollTop = document.body.scrollTop
  let winHeight = window.outerHeight
  let bodyHeight = document.body.clientHeight

  if (bodyHeight - scrollTop <= winHeight + 50) {
    return true
  } else {
    return false
  }
}

let scrollEventFn = ''

export default {
  inserted (el, binding) {
    scrollEventFn = (e) => {
      if (isScrollDown()) {
        binding.value()
      }
    }
    document.addEventListener('scroll', scrollEventFn, false)
  },
  unbind () {
    document.removeEventListener('scroll', scrollEventFn)
  },
  update () {
  }
}
