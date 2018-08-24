### Vue 组件

- 声明组件

```
Vue.component('hello-world', {
    data() {
        return {

        }
    },
    template: '<div>Hello World</div>'
})
<!-- 在根组件中使用组件，如果声明时名称为驼峰命名，在使用时也要使用如下方式 比如组件声明为helloWorld 标签应该写为 <hello-world> -->
<div id="app">
    <hello-world></hello-world>
</div>
```

> 组件也是 Vue 的实例，也具有 data、methods、computed、created 等函数和生命周期钩子，唯一的区别是，组件没有 el 属性。

- 组件复用

```
<div id="app">
    <hello-world></hello-world>
    <hello-world></hello-world>
    <hello-world></hello-world>
</div>
<!-- 每个组件都维护了自己的数据count，每调用一次组件就会创建一个新的实例。所以data必须为函数，因此每个组件对象都可以维护一个返回对象的的独立拷贝。 -->
Vue.component('hello-world', {
    data() {
        return {
            count: 0
        }
    },
    template: '<div @click="count++">Hello World{{count}}</div>'
})
```

### Vue 组件的组织方式

![Vue组件树](https://cn.vuejs.org/images/components.png)


