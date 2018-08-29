### Vue模板定义

- template定义

```
Vue.component('normal', {
    data() {
        return {

        }
    },
    template: `
        <div>
            <h1>Normal template</h1>
        </div>
    `
})
```

- 内联定义

```
<inline-template inline-template>
    <div>
        <h1>内联模板</h1>
        <p>These are compiled as the component's own template.</p>
        <p>Not parent's transclusion content.</p>
    </div>
</inline-template>
Vue.component('inline-template', {
    data() {
        return {

        }
    }
})
```

- X-Templates(script定义)

```
<script type="text/x-template" id="hello-world-template">
    <div>
        <h1>X-Templates模板</h1>
        <p>Hello hello hello</p>
    </div>
</script>
Vue.component('x-template', {
    data() {
        return {

        }
    },
    template: '#hello-world-template'
})
```