### Vue处理边界之$root、$parent、$refs

**下面的功能都是有风险的，尽量避免使用**

> Vue 子组件可以通过 $root 属性访问父组件实例的属性和方法

```
<div id="app">
    <root-obj></root-obj>
</div>
Vue.component('root-obj', {
    data() {
        return {

        }
    },
    template: `<div>
                    <button @click='getRoot'>$Root</button>
                </div>`,
    methods: {
        getRoot() {
            console.log(this)
            console.log(this.$root)
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        msg: 'Root'
    }
})
```

### $root 和$parent 的区别

> $root 和 $parent 都能够实现访问父组件的属性和方法，两者的区别在于，如果存在多级子组件，通过$parent 访问得到的是它最近一级的父组件，通过$root 访问得到的是根父组件

```
<div id="app">
    <root-obj></root-obj>
</div>
Vue.component('root-obj', {
    data() {
        return {

        }
    },
    template: `<div>
                    <button @click='getRoot'>子组件</button>
                    <child-component></child-component>
                </div>`,
    methods: {
        getRoot() {
            console.log(this)
            console.log(this.$root)
            console.log(this.$parent)
        }
    }
})
Vue.component('child-component', {
    data() {
        return {

        }
    },
    template: `<div>
                <button @click='getRoot'>子子组件</button>
                </div>`,
    methods: {
        getRoot() {
            console.log(this)
            console.log(this.$root)
            console.log(this.$parent)
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        msg: 'Root'
    }
})
```

### $refs 访问子组件实例

> 通过在子组件标签定义 ref 属性，在父组件中可以使用$refs 访问子组件实例

```
<button @click='refView'>通过ref访问子组件</button>
Vue.component('base-input', {
    data() {
        return {
            msg: 'base-input'
        }
    },
    template: `<input type='text'/>`
})
var app = new Vue({
    el: '#app',
    data: {
        msg: 'Root'
    },
    methods: {
        refView() {
            console.log(this.$refs.baseInput)
            this.$refs.baseInput.$el.focus()
        }
    }
})
```
