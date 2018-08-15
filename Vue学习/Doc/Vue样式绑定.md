# 绑定 Class

- 对象语法
  - 内联绑定
  ```
  <div v-bind:class="{ active: isActive, 'text-danger': hasError }">
  </div>
  data: {
      isActive: true,
      hasError: false
  }
  ```
  -  非内联绑定
  ```
  <div v-bind:class="classObject"></div>
  data: {
      classObject: {
          active: true,
          'text-danger': false
      }
  }
  ```
  - 使用计算属性返回样式对象
  ```
  Red:
  <input type="radio" name="style" id="red" v-model="currentChoose" value="red">
  Blue:
  <input type="radio" name="style" id="blue" v-model="currentChoose" value="blue">
  <div v-bind:class="classObj"></div>
  </div>
  data: {
      currentChoose: "red"
  },
  computed: {
      classObj: function () {
          return {
              styleRed: this.currentChoose === "red",
              styleBlue: this.currentChoose === "blue"
          }
      }
  }
  ```
- 数组语法
  - Normal
  ```
  <div v-bind:class="[currentStyle]"></div>
  data: {
      currentStyle: "styleBlue"
  }
  ```
  - 数组语法使用三元表达式
  ```
  <div v-bind:class="[currentStyle === 'styleRed' ? 'styleRed' : 'styleBlue']"></div>
  data: {
      currentStyle: "styleBlue"
  }
  ```
  - 数组语法中使用对象
  ```
  <div v-bind:class="[{styleRed: showRed, styleBlue: !showRed}]"></div>
  showRed: function () {
    return this.currentChoose === "red" ? true : false;
  }
  ```
- 用在组件上

> 当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖。

```
<my-component class="styleBlue"></my-component>
Vue.component('my-component', {
    template: '<div class="child"></div>'
});
<!-- 渲染为 -->
<div class="child styleBlue"></div>
<!-- 对于带数据绑定的也合适 -->
<my-component v-bind:class="{styleRed:showRed}"></my-component>
```

# 绑定内联样式

- 对象语法
  - 内联绑定
  ```
  <div v-bind:style="{width : styleWidth + 'px', 'height' : styleHeight + 'px', 'background-color' : styleColor}"></div>
  data: {
      styleWidth: 100,
      styleHeight: 100,
      styleColor: '#111111'
  }
  ```
  - 非内联绑定
  ```
  <div v-bind:style="styleObject"></div>
  computed: {
      styleObject: function () {
          return {
              'width': this.styleWidth + 'px',
              'height': this.styleHeight + 'px',
              'background-color': this.styleColor
          }
      }
  }
  ```
- 数组语法

```
<div v-bind:style="[styleObject, styleRadius]"></div>
computed: {
    styleObject: function () {
        return {
            'width': this.styleWidth + 'px',
            'height': this.styleHeight + 'px',
            'background-color': this.styleColor
        }
    },
    styleRadius: function () {
        return { 'border-radius': this.radius + 'px' }
    }
}
```

> 总结
> 使用 Vue Style 绑定具有动态性，能够根据数据变化响应式修改页面呈现，Vue 绑定 Class 就比较死板，只能通过修改 Class 去修改。
> 举个例子。如果动态修改 div 的宽度，使用绑定 Class 就很难实现，你不可能定义很多个 Class，只有 Width 属性不一样，每次根据数据去切换 Class，如果使用 Style 实现，直接可以将数据和样式绑定在一起，数据改变样式改变。
