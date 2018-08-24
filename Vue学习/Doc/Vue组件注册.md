### 组件注册

- 组件名

> 字母全小写且必须包含一个连字符

- 组件名大小写

    - 使用 kebab-case
    >   Vue.component('my-component-name', { /* ... */ })
    >   当使用 kebab-case (短横线分隔命名) 定义一个组件时，必须在引用这个自定义元素时使用 kebab-case， <my-component-name>。


    - 使用 PascalCase
    >   Vue.component('MyComponentName', { /* ... */ })
    >   引用组件时，<my-component-name> 和 <MyComponentName> 都可以使用

- 全局注册

>  全局注册的组件可以使用在任何Vue实例中（类似于全局变量）

```
// 全局注册
Vue.component('hello-world', {
    data() {
        return {
            count: 0
        }
    },
    template: '<div @click="count++">Hello World{{count}}</div>'
})
```

- 局部注册

> 局部注册的组件只能在根实例生命了组件属性的实例中使用（类似于局部变量）

```
// 局部注册
var local_a = {
    data() {
        return {
            count: 0
        }
    },
    template: `<div @click="count++">
                    Local Conponent{{count}}
                    <hello-world></hello-world>
                </div>`
}
var app = new Vue({
    el: "#app",
    data: {

    },
    components: {
        'local_a': local_a
    }
})
```

- 模块系统中使用组件

```
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
  // ...
}
```
