# Vue 条件渲染

- v-if v-else-if v-else

```
<div v-if="current === 'Name'">Name</div>
<div v-else-if="current === 'Address'">Address</div>
<div v-else="current === 'Email'">Email</div>
```

**v-else-if 必须跟在 v-if 后面，v-else 必须跟在 v-if 或者 v-else-if 后面**

- 使用 template 切换多个元素

> 如果需要一次切换多个元素，可以使用 template 元素当作一个不可见的包裹元素，在其上面使用 v-if 实现效果。渲染结果不会显示 tempalte 元素。

```
<template v-if="show">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</template>
```

- v-if 中使用 key 复用元素

> Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。

```
<!-- 复用input -->
<template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username">
</template>
<template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address">
</template>
<!-- 当元素中key值不一样的时候，Vue不进行复用（这两个元素是完全独立的，不要复用它们） -->
<template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username">
</template>
<template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email">
</template>
```

- v-show

> v-show 渲染的元素一直显示在 DOM 中，只是简单的切换 display 状态。

```
<div v-show="current === 'Name'">Name</div>
<div v-show="current === 'Address'">Address</div>
<div v-show="current === 'Email'">Email</div>
```

**注意，v-show 不支持\<template> 元素，也不支持 v-else。**

# v-if VS v-show

- v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

| 指令   | 弊端             | 备注                 |
| ------ | ---------------- | -------------------- |
| v-if   | 更高的切换开销   | 适用于切换不高的场景 |
| v-show | 更高的初始化开销 | 适用于切换频繁的场景 |
