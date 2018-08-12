# 计算属性

> 模板内使用计算属性是很方便的，设计的目的只是为了简单运算。在模板中放入太多的逻辑会让模板过重且难以维护。所以，对于任何复杂逻辑，你都应当使用计算属性。
````
<!-- 复杂运算 -->
<div>{{message.split('').reverse().join('')}}</div>
<!-- 计算属性代替复杂运算 -->
<div>{{reverseMessage}}</div>
computed: {
    <!-- 计算属性的getter -->
    reverseMessage: function () {
        return this.message.split('').reverse().join('');
    }
}
````

## Computed VS Methods

> 我们可以使用方法达到和计算属性同样的效果<br/>区别在于计算属性具有**缓存**，只有当计算属性**所依赖的属性发生改变**时，才会重新去计算，而**方法每次都会去重新计算结果**。

````
<div>{{reverseMessage}}</div>
<div>{{_reverseMessage()}}</div>
computed: {
    reverseMessage: function () {
        return this.message.split('').reverse().join('');
    }
},
methods: {
    _reverseMessage: function () {
        return this.message.split('').reverse().join('');
    }
}
````

## Watch VS Computed
- watch
````
<div>{{fullName}}</div>
data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: ""
}
watch: {
    firstName: function (val) {
        this.fullName = val + " " + this.lastName;
    },
    lastName: function (val) {
        this.fullName = this.firstName + " " + val;
    }
}
````
- computed
````
<div>{{fullName}}</div>
data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: ""
}
computed: {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
````
> watch是观察某一个属性的变化，重新计算属性值。computed是通过所依赖的属性的变化重新计算属性值。
> 大部分情况下watch和computed几乎没有差别。但如果要在数据变化的同时**进行异步操作或者是比较大的开销，那么watch为最佳选择**。

## 计算属性的Setter

> 计算属性默认只有get，在需要的时候也可以设置set方法

````
fullName: {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (val) {
        this.firstName = val.split(' ')[0];
        this.lastName = val.split(' ')[1];
    }
}
````