# Vue 列表渲染

> Vue 使用 v-for 指令渲染一组数据

## 渲染数组

```
<ul>
    <li v-for="(item,index) in todoList"> {{index}} - {{item.message}}</li>
</ul>
data: {
    todoList: [
        {
            message: "CSS3"
        }, {
            message: "Vue"
        }, {
            message: "微信小程序"
        }
    ]
}
```

## 渲染对象

```
<div v-for="(value,key,index) of studentObj">{{index}} . {{key}} : {{value}}</div>
data: {
    studentObj: {
        name: "Liming",
        age: 24,
        sex: "female"
    }
}
```

**在 v-for 指令中可以使用 of 分隔符替换 in 分隔符**

## v-for 中的 key 值

> Vue 在 v-for 遍历  一组数据时，采用“就地复用”策略，也是说在数据或者  顺序发生改变时候，Vue 不会去重绘和重拍 DOM 元素，而是就地复用每个元素。当 v-for 的每一项设置了 key 值之后，每个具有唯一的 id，为每个节点标示了自己的身份，从而实现重绘和重排。

```
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

**key 使用场景**

> 建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

## 数组更新检测

- 变异方法（原数组会被修改）触发视图更新
  - push()
  - pop()
  - shift()
  - unshift()
  - splice()
  - sort()
  - reverse()
- 非变异方法（原数组不会被修改）不触发视图更新
  - filter()
  - concat()
  - slice()
    **使用非变异方法时，可以用新数组替换旧数组,来触发视图更新**

```
<!-- 用新数组替换旧数组 -->
app.todoList = app.todoList.filter(function (item) {
  return item.message.match(/Vue/)
})
```

## Vue 不能检测一下变动

- 当你利用索引直接设置一个项时，例如：vm.items[index] = newValue

```
<!-- Vue不能检测到变动 -->
app.todoList[1] = { message:"newValue"}
<!-- 使用如下方式实现相同效果，同时触发更新 -->
Vue.set(app.todoList, 1, {message:"newValue"})
app.todoList.splice(1, 1, { message:"newValue"})
```

- 当你修改数组的长度时，例如：vm.items.length = newLength

```
<!-- Vue不能检测到变动 -->
app.todoList.length = 2
<!-- 使用如下方式实现相同效果，同时触发更新 -->
app.todoList.splice(newLength)
```

## Vue 不能检测对象属性的添加或删除

```
<!-- `vm.a` 现在是响应式的 -->
var vm = new Vue({
    data: {
        a: 1
    }
})

<!-- `vm.b` 不是响应式的 -->
vm.b = 2

<!-- 使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性 -->
Vue.set(vm.data, 'b', 2);
<!-- 为已有对象赋予多个新属性 -->
vm.data = Object.assign({}, vm.data, {
  a: 1,
  b: 2
})
```

## 显示过滤/排序结果

> 想要显示一个数组的过滤或排序副本，而不实际改变或重置原始数据,在这种情况下，可以创建返回过滤或排序数组的计算属性。

```
<h4>Computed TODOLIST</h4>
<ul>
    <li v-for="(item,index) in filterToDoList"> {{index}} - {{item.message}}<button @click="removeItem(index)">REMOVE</button></li>
</ul>
data: {
    todoList: [
        {
            message: "CSS3"
        }, {
            message: "Vue"
        }, {
            message: "微信小程序"
        }
    ]
}
computed: {
    filterToDoList: function () {
        return this.todoList.filter(function (item) {
            return item.message.match(/[a-z]+/i);
        })
    }
}
```

## 遍历对象为数字

```
<div><span v-for="item in 10">{{item}}</span></div>
```

## v-for VS v-if

> v-for 和 v-if 同时作用于元素时，首先是 v-for 遍历出所有节点，然后 v-if 作用于每一个节点上，判断是否显示

```
<ul>
    <li v-for="(item,index) in todoList" v-if="index / 2 === 0"> {{index}} - {{item.message}}</li>
</ul>
```

## v-for 作用于组件

**组件中使用 v-for 时，key 是必须的，使用 props 属性传递值到组件里**

```
<ul>
    <todo-list v-for="(item,index) in todoList" :key="index" :msg="item.message"></todo-list>
</ul>
<!-- 使用is语法，实现的效果与 <todo-item> 相同 -->
<ul>
    <li v-for="(item,index) in todoList" :key="index" :msg="item.message" is="todo-list"></li>
</ul>
Vue.component("todo-list", {
    props: ['msg'],
    template: "<li>{{msg}}</li>"
})
```
