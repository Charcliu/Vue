- 第一种

```
//lib.js 文件
let bar = "stringBar";
let foo = "stringFoo";
let fn0 = function() {
    console.log("fn0");
};
let fn1 = function() {
    console.log("fn1");
};
export{ bar , foo, fn0, fn1}

//main.js文件
import {bar,foo, fn0, fn1} from "./lib";
console.log(bar+"_"+foo);
fn0();
fn1();
```

- 第二种(as)

```
//lib.js文件
let fn0 = function() {
    console.log("fn0");
};
let obj0 = {}
export { fn0 as foo, obj0 as bar};

//main.js文件
import {foo, bar} from "./lib";
foo();
console.log(bar);
```

- 第三种

```
//lib.js文件
export let foo = ()=> {console.log("fnFoo") ;return "foo"},bar = "stringBar";

//main.js文件
import {foo, bar} from "./lib";
console.log(foo());
console.log(bar);
```

- 第四种

```
//lib.js
export default "string";

//main.js
import defaultString from "./lib";
console.log(defaultString);
```

- 第五种

```
//lib.js
let fn = () => "string";
export {fn as default};

//main.js
import defaultFn from "./lib";
console.log(defaultFn());
```

- 第六种
```
//lib.js
export * from "./other";
//如果只想导出部分接口， 只要把接口名字列出来
//export {foo,fnFoo} from "./other";

//other.js
export let foo = "stringFoo", fnFoo = function() {console.log("fnFoo")};

//main.js
import {foo, fnFoo} from "./lib";
console.log(foo);
console.log(fnFoo());
```