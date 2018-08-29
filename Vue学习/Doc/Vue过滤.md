### Vue 过滤

- 全局定义

```
<input type="text" v-model='upper'>
<h4>{{upper|toUpper}}</h4>
Vue.filter('toUpper', function (value) {
    return value.toUpperCase()
})
```

- 局部定义

```
<input type="text" v-model='lower'>
<h4>{{lower|toLower}}</h4>
var app = new Vue({
    el: '#app',
    data: {
        upper: '',
        lower: ''
    },
    filters: {
        toLower(value) {
            return value.toLowerCase()
        }
    }
})
```
![Vue过滤.png](https://upload-images.jianshu.io/upload_images/12034021-2519652dd6c60d70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 过滤器串联

> 过滤之后的值会依次传入到下一级过滤器中

```
<input type="text" v-model='upper'>
<h4>{{upper|toUpper|addSuffix}}</h4>
    Vue.filter('toUpper', function (value) {
    return value.toUpperCase()
})
var app = new Vue({
    el: '#app',
    data: {
        upper: '',
        lower: ''
    },
    filters: {
        addSuffix(value) {
            if (value) {
                return value + '@zhiliao.com'
            }
        }
    }
})
```
![过滤器串联.png](https://upload-images.jianshu.io/upload_images/12034021-8d35490f19cf7164.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
