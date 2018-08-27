### 子组件到父组件通讯

```
<div :style="{'font-size' : fontSize + 'rem'}">
    <msg-component :post="post" @change-font-size="changeFontSize">
    </msg-component>
</div>
Vue.component('msg-component', {
    props: ['post'],
    data() {
        return {

        }
    },
    template: '<span @click="changeFontSize">{{post}}</span>',
    methods: {
        changeFontSize() {
            // 调用父组件方法
            this.$emit('change-font-size', 0.1)
        }
    }
})
var app = new Vue({
    el: "#app",
    data: {
        post: "Hello Vue",
        fontSize: 1
    },
    methods: {
        // 子组件传递的值将会作为第一个参数传入这个方法
        changeFontSize(val) {
            this.fontSize += val;
        }
    }
})
```

- 在子组件调用 DOM 处定义子组件访问方法和父组件调用方法，声明方式为@子组件回掉方法="父组件调用方法"
- 在子组件内使用 $emit 方法调用子组件回掉函数
-  父组件中定义  父组件调用方法

### 自定义事件用于创建支持 v-model 的自定义输入组件

```
<custom-input v-model="searchText"></custom-input>
Vue.component('custom-input', {
    props: ['value'],
    template: `
        <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        >
    `
})
var app = new Vue({
    el: "#app",
    data: {
        post: "Hello Vue",
        fontSize: 1,
        searchText: ""
    },
    methods: {
        // 子组件传递的值将会作为第一个参数传入这个方法
        changeFontSize(val) {
            this.fontSize += val;
        }
    }
})
```

> 为了让它正常工作，这个组件内的 \<input> 必须：
>
> - 将其 value 特性绑定到一个名叫 value 的 prop 上
> - 在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
