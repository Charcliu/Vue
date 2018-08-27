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

**注意 ⚠️**

- 跟组件和 prop 不同，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。并且 v-on 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 v-on:myEvent 将会变成 v-on:myevent——导致 myEvent 不可能被监听到。
- 因此推荐始终使用 kebab-case 的事件名

### 将原生事件绑定到组件

```
<my-comp @click.native="doThis"></my-comp>
<div @click="doThis">我是元素</div>
Vue.component('my-comp', {
    template: '<div>我是组件</div>'
});
var app = new Vue({
    el: "#app",
    data: {
        lovingVue: false
    },
    methods: {
        doThis: function () {
            console.log('click');
        }
    }
})
```

**点击[我是组件][我是元素]都可以触发 doThis 函数，如果组件 click 事件去掉 native 修饰将不会触发 doThis 事件，因为 Vue 把它当做组件的自定义事件了，而组件的自定义事件的触发需要使用 this.$emit('click')。**

### .sync 修饰符实现双向绑定

```
<text-document v-bind:show="doc.show" v-on:update:show="val => doc.show=val"></text-document>
<text-document v-bind:show.sync="doc.show"></text-document>
<button @click="openShow">Open</button>
    Vue.component('text-document', {
    props: ['show'],
    data() {
        return {}
    },
    template: '<div v-show="show"><h1>Hello Vue</h1><button @click="closeShow">Close</button></div>',
    methods: {
        closeShow() {
            this.$emit("update:show", false)
        }
    }
})
var app = new Vue({
    el: "#app",
    data: {
        lovingVue: false,
        doc: {
            show: true
        }
    },
    methods: {
        doThis: function () {
            console.log('click');
        },
        openShow() {
            this.doc.show = true
        }
    }
})
```

> 使用 sync 和 update 语法可以时子组件修改 prop 传入的值，同时修改父组件的值，当然使用$emit 也可以实现相同的效果，不过使用 sync 和 update 可以省去在父组件中定义响应方法，在一些比较复杂的场景中，使用  这种双向绑定更加方便。
