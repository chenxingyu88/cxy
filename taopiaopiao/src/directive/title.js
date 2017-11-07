export default {
  update (el, binding) {
    document.title = binding.value
    console.log(binding.value)
  }
}
