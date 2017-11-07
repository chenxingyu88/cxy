import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/Login'

import Root from '@/views/Root/index'
import SalaryBar from '@/views/SalaryBar'
import PaySlip from '@/views/SalaryBar/children/PaySlip'
import PayrollManagement from '@/views/SalaryBar/children/PayrollManagement'
import EmployeeFeedback from '@/views/SalaryBar/children/EmployeeFeedback'
import EnterpriseService from '@/views/EnterpriseService'
import PayrollService from '@/views/EnterpriseService/children/PayrollService'
import ReportFrm from '@/views/EnterpriseService/children/ReportFrm'
import BusinessManagement from '@/views/BusinessManagement'
import BusinessAccount from '@/views/BusinessManagement/children/BusinessAccount'
import EmployeeFile from '@/views/BusinessManagement/children/EmployeeFile'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home
  }
]
const router = new Router({
  routes: routes
})
let routerArr = [
  {
    path: '/root',
    name: 'Root',
    meta: {
      title: '权限管理'
    },
    component: Root
  },
  {
    path: '/salarybar',
    name: 'SalaryBar',
    meta: {
      title: '工资条'
    },
    component: SalaryBar,
    children: [
      {
        path: 'payslip',
        name: 'PaySlip',
        meta: {
          title: '发工资条'
        },
        component: PaySlip
      },
      {
        path: 'payrollmanagement',
        name: 'PayrollManagement',
        meta: {
          title: '工资条管理'
        },
        component: PayrollManagement
      },
      {
        path: 'employeefeedback',
        name: 'EmployeeFeedback',
        meta: {
          title: '员工反馈'
        },
        component: EmployeeFeedback
      }
    ]
  },
  {
    path: '/enterpriseservice',
    name: 'EnterpriseService',
    meta: {
      title: '企业服务'
    },
    component: EnterpriseService,
    children: [
      {
        path: 'payrollseservice',
        name: 'PayrollService',
        meta: {
          title: '薪税服务'
        },
        component: PayrollService
      },
      {
        path: 'reportform',
        name: 'ReportFrm',
        meta: {
          title: '报表'
        },
        component: ReportFrm
      }
    ]
  },
  {
    path: '/businessmanagement',
    name: 'BusinessManagement',
    meta: {
      title: '企业管理'
    },
    component: BusinessManagement,
    children: [
      {
        path: 'businessaccount',
        name: 'BusinessAccount',
        meta: {
          title: '企业账户'
        },
        component: BusinessAccount
      },
      {
        path: 'employeefile',
        name: 'EmployeeFile',
        meta: {
          title: '员工档案'
        },
        component: EmployeeFile
      }
    ]
  }
]

router.flg = false

function getRouter (name) {
  let routerItem = ''
  for (let i = 0; i < routerArr.length; i++) {
    if (routerArr[i].name === name) {
      routerItem = routerArr[i]
    }
  }
  return routerItem
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let userInfo = window.localStorage.getItem('userInfo')
  if (from.path === '/login') {
    router.flg = false
    router.options.routes = routes
  }
  if (userInfo) {
    if (to.path === '/login') {
      next('/home')
    } else {
      if (router.flg === false) {
        router.flg = true
        let rootArr = JSON.parse(userInfo).root.split(',')
        let newRootArr = []
        for (let i = 0; i < rootArr.length; i++) {
          newRootArr.push(getRouter(rootArr[i]))
        }
        router.addRoutes(newRootArr)
        let newRouter = router.options.routes.concat(newRootArr)
        router.options.routes = newRouter
        next(to.path)
      }
      next()
    }
  } else {
    router.flg = false
    router.options.routes = routes
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
  next()
})
export {
  router,
  routerArr
}

