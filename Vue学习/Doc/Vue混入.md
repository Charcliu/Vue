### Vue 混入

**混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。**

- 数据对象合并
  > 数据对象在内部会进行浅合并 (一层属性深度)，在和组件的数据发生冲突时以组件数据优先

```
var mixin = {
    data() {
        return {
            msg_mixins: 'mixins',
            msg: '123'
        }
    }
}
var app = new Vue({
    mixins: [mixin],
    el: '#app',
    data: {
        msg: 'app'
    }
})
```

- 钩子函数合并

> 同名钩子函数将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。

```
var mixin = {
    data() {
        return {
            msg_mixins: 'mixins',
            msg: '123'
        }
    },
    created: function () {
        console.log('混入对象的钩子被调用')
    }
}
var app = new Vue({
    mixins: [mixin],
    el: '#app',
    data: {
        msg: 'app'
    },
    created: function () {
        console.log('组件钩子被调用')
    }
})
```

![混入钩子函数.png](https://upload-images.jianshu.io/upload_images/12034021-5ece44f1a8265f2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- methods, components 和 directives合并

> methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。

```
var mixin = {
    data() {
        return {
            msg_mixins: 'mixins',
            msg: '123'
        }
    },
    created: function () {
        console.log('混入对象的钩子被调用')
    },
    methods: {
        foo: function () {
            console.log('foo')
        },
        conflicting: function () {
            console.log('from mixin')
        }
    }
}
var app = new Vue({
    mixins: [mixin],
    el: '#app',
    data: {
        msg: 'app'
    },
    created: function () {
        console.log('组件钩子被调用')
    },
    methods: {
        bar: function () {
            console.log('bar')
        },
        conflicting: function () {
            console.log('from self')
        }
    }
})
```

![方法混合.png](https://upload-images.jianshu.io/upload_images/12034021-918b5130fcc87214.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 全局混入

> 一旦使用全局混入对象，将会影响到 所有 之后创建的 Vue 实例。

```
Vue.mixin({
    created: function () {
        console.log('全局混入')
    }
})
```

![全局混入.png](https://upload-images.jianshu.io/upload_images/12034021-cc28cb2394dc5de5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
