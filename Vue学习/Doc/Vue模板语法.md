- 模板语法
    -  Render 
    -  template
    -  el

> Vue模板语法具有三种方式，能够被渲染成虚拟DOM加载到页面，优先级由上到下。

# 插值

## 文本

> 使用“Mustache”语法 (双大括号) 的文本插值

````
<span>{{message}}</span>
````
绑定的数据对象上 message 属性发生了改变，插值处的内容**都会**更新。
> 使用 v-once 指令
````
<span v-once>{{message}}</span>
````
绑定的数据对象上 message 属性发生了改变，插值处的内容**不会**更新。

## 原始HTML
> 双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，需要使用 v-html 指令
````
<!-- 输出 <span style='color:red;'>This should be red</span> -->
<div>{{rawHtml}}</div>
<!-- 输出 This should be red -->
<div v-html="rawHtml"></div>
````

## 特性
> “Mustache”语法不能作用于HTML特性上，应该使用V-bind语法

````
<button v-bind:disabled="isButtonDisabled">Button</button>
用于绑定HTML特性
````

## 使用JavaScript表达式
> 这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。每个绑定都只能包含单个表达式，模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。

````
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
````
## 指令缩写
````
v-bind 缩写
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
v-on 缩写
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>
````