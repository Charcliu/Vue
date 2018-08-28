### Vue 自定义指令

- 全局定义

```
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})
```

- 局部定义

```
<input type="text" v-focus>
<div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
// 局部定义指令
directives: {
    focus: {
        inserted: function (el, binding, vnode, oldVnode) {
            console.log(el)
            console.log(binding)
            console.log(vnode)
            console.log(oldVnode)
            // 聚焦元素
            el.focus()
        }
    },
    demo: {
        bind: function (el, binding, vnode) {
            var s = JSON.stringify
            el.innerHTML =
                'name: ' + s(binding.name) + '<br>' +
                'value: ' + s(binding.value) + '<br>' +
                'expression: ' + s(binding.expression) + '<br>' +
                'argument: ' + s(binding.arg) + '<br>' +
                'modifiers: ' + s(binding.modifiers) + '<br>' +
                'vnode keys: ' + Object.keys(vnode).join(', ')
        }

    }
}
```

### Vue 指令生命周期钩子

- bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
- componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- unbind：只调用一次，指令与元素解绑时调用。

### Vue 指令生命周期钩子参数

- el：指令所绑定的元素，可以用来直接操作 DOM 。
- binding：一个对象，包含以下属性：
  - name：指令名，不包括 v- 前缀。
  - value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
  - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
  - expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
  - arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
  - modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
- vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
- oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

### bind update 触发行为

```
Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value
})
```
