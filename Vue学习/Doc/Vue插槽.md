### Vue 插槽

> 插槽用于向组件传递内容，插槽内可以包含任何模板代码，包括 HTML，甚至组件。如果 组件 没有包含一个 <slot> 元素，则任何传入它的内容都会被抛弃。

```
<slot-conponent>
    Fluently
</slot-conponent>
Vue.component('slot-conponent', {
    data() {
        return {

        }
    },
    template: `
        <div>
            Hello <slot></slot>
        </div>
    `
})
var app = new Vue({
    el: '#app',
    data: {}
})
<!-- 渲染为 -->
<div>
    Hello Fluently
</div>
```

### 具名插槽

> 定义具体名称的插槽，组件内的内容会根据名称自动匹配到模板对应的地方。如果没有匹配项，则显示在默认插槽上，否则不显示。

```
<!-- 具名插槽 -->
<slot-name>
    <template slot="header">
        <h1>header</h1>
    </template>
    <template slot="footer">
        <h1>footer</h1>
    </template>
    <template slot="main">
        <h1>main</h1>
    </template>
    <template><h1>默认插槽</h1></template>
</slot-name>
<!-- 具名插槽另一种写法 -->
<slot-name>
    <h1 slot="header">header</h1>
    <h1 slot="footer">footer</h1>
    <h1 slot="main">main</h1>
    <h1>默认插槽</h1>
</slot-name>
Vue.component('slot-name', {
data() {
    return {

    }
},
template: `
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
        <!-- 默认插槽 -->
        <div>
            <slot></slot>
        </div>
    </div>
`
})
```

### 默认插槽

> 为插槽提供默认内容，同时允许覆盖默认内容

```
<slot-default></slot-default>
<slot-default>Modify</slot-default>
Vue.component('slot-default', {
    data() {
        return {

        }
    },
    template: `
        <div>
            <slot>Default</slot>
        </div>
    `
})
```

### 插槽编译作用域

> 父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。

```
<!-- 插槽编译作用域 -->
<slot-scope>{{msg}}</slot-scope>
<!-- 访问出错，父级作用域模板不能访问子级数据 -->
<slot-scope>{{childMsg}}</slot-scope>
Vue.component('slot-scope', {
    data() {
        return {
            childMsg: 'childScope'
        }
    },
    template: `
        <div>
            <slot>{{childMsg}}</slot>
        </div>
    `
})
var app = new Vue({
    el: '#app',
    data: {
        msg: 'Scope'
    }
})
```

### 作用域插槽

> 组件能够从子组件获取数据（slot-scope 特性从子组件获取数据），根据数据去独立渲染对应的表现

```
<todo-list v-bind:todos="todos">
    <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
    <template slot-scope="slotProps">
        <!-- 为待办项自定义一个模板，-->
        <!-- 通过 `slotProps` 定制每个待办项。-->
        <span v-if="slotProps.todo.isComplete">✓</span>
        {{ slotProps.todo.text }}
    </template>
</todo-list>
Vue.component('todo-list', {
    props: ['todos'],
    data() {
        return {

        }
    },
    template: `<ul>
                <li v-for="todo in todos" v-bind:key="todo.id">
                    <slot v-bind:todo="todo">
                        <!-- 回退的内容 -->
                        {{ todo.text }}
                    </slot>
                </li>
                </ul>`
})
var app = new Vue({
    el: '#app',
    data: {
        msg: 'Scope',
        todos: [{
            text: 'Java',
            id: 1,
            isComplete: false
        }, {
            text: 'JavaScript',
            id: 2,
            isComplete: true
        }, {
            text: 'Vue',
            id: 3,
            isComplete: true
        }]
    }
})
```

### 解构 slot-scope

> 下面两种 template 具有相同的效果，通过解构 slot-scope 能够使作用域插槽变得更干净一些

```
<!-- 作用域插槽 -->
<todo-list v-bind:todos="todos">
    <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
    <template slot-scope="slotProps">
        <!-- 为待办项自定义一个模板，-->
        <!-- 通过 `slotProps` 定制每个待办项。-->
        <span v-if="slotProps.todo.isComplete">✓</span>
        {{ slotProps.todo.text }}
    </template>
</todo-list>

<!-- 解构Slot -->
<todo-list v-bind:todos="todos">
    <template slot-scope="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
    </template>
</todo-list>
```
