> Vue官方生命周期图
每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

![lifecycle.png](https://upload-images.jianshu.io/upload_images/12034021-455d4d9cd712b877.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 主要包含如下生命周期
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed
### 创建Vue实例，查看各生命周期中具体的内容：
````
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
</head>

<body>
    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div id="app">
        <!-- 绑定到Dom文本 -->
        <div>{{message}}</div>
        <input type="text" v-model="message" />
    </div>
    <script src="../plugin/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            // template: "<h1>{{message +'这是在template中的'}}</h1>", //在vue配置项中修改的
            // render: function (createElement) {
            //     return createElement('h1', 'this is createElement')
            // },
            data: {
                message: "Hello World"
            },
            beforeCreate: function () {
                console.group("---beforeCreate---");
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            created: function () {
                console.group("---created---");
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            beforeMount: function () {
                console.group("---beforeMount---");
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            mounted: function () {
                console.group("---mounted---");
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            beforeUpdate: function () {
                console.group("---beforeUpdate---");
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            updated: function () {
                console.group("---updated---");
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            beforeDestroy: function () {
                console.group("---beforeDestroy---");
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            destroyed: function () {
                console.group("---destroyed---");
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            }
        })
    </script>
</body>

</html>
````
## 执行结果如下
![20180812141119.png](https://upload-images.jianshu.io/upload_images/12034021-5a34c703a805e580.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 通过上图我们可以看到
- new Vue() ---> beforeCreate
>初始化事件和生命周期 此时\$el,\$data,message均未初始化

- beforeCreate ---> created
>进行初始化事件，进行数据的观测，此时\$el未初始化,\$data,message已初始化

- created ---> beforeMount
````
 el: "#app",
 // template: "<h1>{{message +'这是在template中的'}}</h1>", 
 // render: function (createElement) {
 //     return createElement('h1', 'this is createElement')
 // }
````
> - 模板编译存在如下几种情况：
> - 首先判断对象是否有el选项。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上调vm.$mount(el)
>  - 如果vue实例对象中有template参数选项，则将其作为模板编译成render函数。
> - 如果存在render函数，则以render函数渲染
> - 可以看编译优先级为：
render函数选项 > template选项 > el
> - 编译完成，此时\$el,\$data,message均已初始化，触发beforeMount

![WX20180812-144339@2x.png](https://upload-images.jianshu.io/upload_images/12034021-a45e920122b93dda.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- beforeMount ---> mounted
> 在mounted之前只是对模版进行编译解析，具体内容还是模板内容。在mounted之后根据实例中\$el属性值创建了虚拟DOM并且跟实例中的数据进行绑定，然后替换掉\$el属性值。

![WX20180812-145914@2x.png](https://upload-images.jianshu.io/upload_images/12034021-97ce038a8854556f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- Mounted ---> beforeUpdate
> 更新数据,在data 修改后，触发beforeUpdate
- beforeUpdate ---> updated
> 重新编译virtual DOM，并且显示到页面上
- mounted --> beforeDestroy --> destroyed
> 调用vm.\$destroy()方法后，触发beforeDestroy,然后断开数据监控，完成后触发destroyed。调用\$destroy后，修改实例数据，页面显示不会发生变化，但是实例中元素绑定的事件能正常执行。