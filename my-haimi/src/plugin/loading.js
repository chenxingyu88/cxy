
import Loading from '@/components/Loading'

export default {
  install (Vue, options) {
    const VueLoading = Vue.extend(Loading)

    let loading = new VueLoading()
    // 手动创建一个未挂载的实例
    loading.$mount()

    // 挂载
    document.querySelector('body').appendChild(loading.$el)

    Vue.prototype.$loading = {
      show: () => {
        loading.show()
      },
      hide: () => {
        loading.hide()
      }
    }
  }
}
