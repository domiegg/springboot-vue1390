import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import dictionary from '@/views/modules/dictionary/list'
        import gonggao from '@/views/modules/gonggao/list'
        import shenherizhi from '@/views/modules/shenherizhi/list'
        import xiangmu from '@/views/modules/xiangmu/list'
        import xiangmuguanliyuan from '@/views/modules/xiangmuguanliyuan/list'
        import yonghu from '@/views/modules/yonghu/list'
        import zhuanjia from '@/views/modules/zhuanjia/list'
        import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'
        import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
        import dictionaryXiangmu from '@/views/modules/dictionaryXiangmu/list'
        import dictionaryXiangmuYesno from '@/views/modules/dictionaryXiangmuYesno/list'
        import dictionaryZhuanjia1 from '@/views/modules/dictionaryZhuanjia1/list'
        import dictionaryZhuanjia2 from '@/views/modules/dictionaryZhuanjia2/list'
        import dictionaryZhuanjia3 from '@/views/modules/dictionaryZhuanjia3/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型名称',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '是否使用',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryXiangmu',
        name: '项目类型名称',
        component: dictionaryXiangmu
    }
    ,{
        path: '/dictionaryXiangmuYesno',
        name: '项目管理员审核类型名称',
        component: dictionaryXiangmuYesno
    }
    ,{
        path: '/dictionaryZhuanjia1',
        name: '专家1审核类型名称',
        component: dictionaryZhuanjia1
    }
    ,{
        path: '/dictionaryZhuanjia2',
        name: '专家2审核类型名称',
        component: dictionaryZhuanjia2
    }
    ,{
        path: '/dictionaryZhuanjia3',
        name: '专家3审核类型名称',
        component: dictionaryZhuanjia3
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/shenherizhi',
        name: '审核日志',
        component: shenherizhi
      }
    ,{
        path: '/xiangmu',
        name: '项目',
        component: xiangmu
      }
    ,{
        path: '/xiangmuguanliyuan',
        name: '项目管理员',
        component: xiangmuguanliyuan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhuanjia',
        name: '专家账户',
        component: zhuanjia
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
