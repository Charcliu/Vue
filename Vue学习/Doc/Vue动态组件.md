### Vue 动态组件

> 通过 Vue 的 <component> 元素加一个特殊的 is 特性来实现。currentComponent 可以包括
>
> - 已注册组件的名字
> - 一个组件的选项对象

```
<component :is="currentComponent"></component>
Vue.component('capax', {
    data() {
        return {

        }
    },
    template: `<h1>Capax</h1>`
})
Vue.component('opex', {
    data() {
        return {

        }
    },
    template: `<h1>Opex</h1>`
})
var app = new Vue({
    el: '#app',
    data: {
        navs: [{
            name: 'Capax',
            id: 1
        }, {
            name: 'Opex',
            id: 2
        }],
        currentComponent: 'capax'
    },
    methods: {
        changeComponent(item) {
            this.currentComponent = item.name.toLowerCase()
        }
    }
})
```

### 在动态组件上使用 keep-alive

> 上面我们使用 is 特性能够动态切换组件，但是在切换的过程中，都会去创建一个新的组件实例，如果你想保存之前组件的状态，就可以使用<keep-alive></keep-alive>元素将组件包裹起来，如此组件切换就会被缓存起来，下次切换还是保存了之前的状态

```
<keep-alive>
    <component :is="currentComponent"></component>
</keep-alive>
```
