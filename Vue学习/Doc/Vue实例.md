- 创建Vue实例
````
var vm = new Vue({
    <!-- 选项 -->
})
````
---
- 数据与方法
  
当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

> **值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的。也就是说如果你添加一个新的属性，比如：**

````
var vm = new Vue({
    data:{
        a: 1
    }
})

vm.b = 2
````
***这时对 b 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值。***

> **使用 Object.freeze()冻结的属性对象，会阻止修改现有的属性，也意味着响应系统无法再追踪变化。**
````
var obj = {
    foo: 'bar'
}

Object.freeze(obj);

var app = new Vue({
    el: "#app",
    data: obj
})
````

> **Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来。**

````
var data = {
    foo: 'bar'
}
var app = new Vue({
    el: "#app",
    data: data
})
// app.$data === data
console.log(app.$data);
// app.$el === document.getElementById("app")
console.log(app.$el);
// $watch实例方法
app.$watch('foo', function(newValue, oldValue){
    // 这个回调将在 `vm.a` 改变后调用
    console.log(newValue + " " + oldValue);
})
````

