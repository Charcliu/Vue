# Vue 事件处理

- 内联事件处理

```
<button @click="num++">ADD{{num}}</button>
```

- 通过方法处理

```
<button @click="popWindow">PopWindow</button>
methods: {
    popWindow() {
        this.showPop = true;
    }
}
```

- 访问原始 DOM 事件
  **方法不含有参数可以直接访问 event 对象**

  ```
  <button @click="popWindow">PopWindow</button>
  methods: {
      popWindow(event) {
          console.log(event);
      }
  }
  ```

  **方法含有参数，通过$event 传入**

  ```
  <button @click="warn('msg',$event)">Warn</button>
  methods: {
      warn(msg, event) {
          console.log(msg, event)
      }
  }
  <button @click="popWindow($event)">PopWindow</button>
  methods: {
      popWindow(event) {
          console.log(event);
      }
  }
  ```
