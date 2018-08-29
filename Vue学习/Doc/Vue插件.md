### Vue 插件

> 插件通常会为 Vue 添加全局功能。插件的范围没有限制——一般有下面几种：
>
> - 添加全局方法或者属性，如: vue-custom-element
> - 添加全局资源：指令/过滤器/过渡等，如 vue-touch
> - 通过全局 mixin 方法添加一些组件选项，如: vue-router
> - 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
> - 一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 vue-router

- 开发插件

> Vue.js 的插件应当有一个公开方法 install 。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象

```
var MyPlugin = {};
MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        console.log('myGlobalMethod')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            console.log('my-directive')
        }
    })

    // 3. 注入组件
    Vue.mixin({
        created: function () {
            console.log('created')
        }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        console.log('$myMethod')
    }
}
```

- 使用插件

```
<div v-my-directive></div>
Vue.use(MyPlugin);
var app = new Vue({
    el: '#app',
    data: {},
    mounted() {
        Vue.myGlobalMethod()
        this.$myMethod()
    }
})    
```

![Vue插件.png](https://upload-images.jianshu.io/upload_images/12034021-d472e2bb5193cfc7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

