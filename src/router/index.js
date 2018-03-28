import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about'
import BaseConfigure from '@/components/base-configure'
import UserConfigure from '@/components/user-configure'
import SSHConfigure from '@/components/ssh-configure'
import InstallApplication from '@/components/install-applications'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: About,
    },
    {
      path: '/base-application',
      name: 'base-application',
      component: BaseConfigure,
    },
    {
      path: '/user-configure',
      name: 'user-configure',
      component: UserConfigure,
    },
    {
      path: '/ssh-configure',
      name: 'ssh-configure',
      component: SSHConfigure,
    },
    {
      path: '/install-applications',
      name: 'install-applications',
      component: InstallApplication,
    },
  ],
})
