import router from './router'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.css' // progress bar custom style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
