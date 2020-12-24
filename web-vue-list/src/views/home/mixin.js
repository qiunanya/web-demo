// mixin可以作为主页面的函数扩展和data扩展，当多个组件使用类似数据或者方法时就可以使用mixin来做，提高代码复用性，高效开发
import { sumTotal } from './utils.js'
export default {
  name: 'mixin',
  data () {
    return {
      name: 'mixin',
      formCustom: {
        name: '',
        code: ''
      }
    }
  },
  created () {
    console.log('mixin...', this.name);
  },
  mounted () {
    console.log('mixin...mounted');
    console.log('mixin调用求和方法sumTotal', sumTotal(50, 50))
  },
  methods: {
    initData: function () {
      console.log('mixin....init');
    }
  }
}
