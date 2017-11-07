let isScrollTop = () => {
  let scrollTop = document.body.scrollTop

  if (scrollTop >= 40) {
    return true
  } else {
    return false
  }
}

let scrollEventFn = ''

export default {
  inserted (el, binding) {
    scrollEventFn = (e) => {
      if (isScrollTop()) {
        binding.value()
      }
    }
    document.addEventListener('scroll', scrollEventFn, false)
  },
  unbind () {
    document.removeEventListener('scroll', scrollEventFn)
  }
}
