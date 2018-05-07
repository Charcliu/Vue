axios Vue推荐的类似Ajax的东西。。。

安装axios
cnpm install axios --save 
引入axios

main.js中

	// 引入axios
	import axios from 'axios'
	Vue.prototype.$http= axios


配置代理

config/index.js

	proxyTable: {
        '/home': {       // 代理名称，所有url以/home开头的都会被代理转发
            target: 'http://192.168.31.245:8081/',  // 代理转发到的服务器，也就是后台服务器 
            changeOrigin: true,                     // 开启代理  
            pathRewrite: {'^/home': '/home'}        // 前面对url进行正则表达式匹配，然后替换url匹配项为后面的内容转发到后台 
            										   前台http://localhost:8080/home/helloSpring转发为
            										   	   http://192.168.31.245:8081/home/helloSpring
        }  
    }

axios请求
	
	this.$http({
        method: 'get',
        url: '/home/helloSpring',
    }).then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })

    如果后台请求接口为http://192.168.31.245:8081/home/helloSpring,请求写法和代理配置如上。
    前端使用webpack-dev-server启动Express小型服务器实现热加载，端口号默认为8080

    1.当axios请求/home/helloSpring的时候，代理就会拦截到/home开头的请求
    2.代理target属性为后台服务地址。设置changeOrigin为true开启代理。
    3.所以前台localhost:8080/home/helloSping请求，localhost:8080就会被替换为http://192.168.31.245:8081 
    4.然后请求代理到 http://192.168.31.245:8081/home/helloSpring


    如果axios请求如下 后台接口为http://192.168.31.245:8081/home/helloSpring

    this.$http({
        method: 'get',
        url: '/test/home/helloSpring',
    }).then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })

    代理配置为
    proxyTable: {
        '/test/home': {       // 代理名称，所有url以/home开头的都会被代理转发
            target: 'http://192.168.31.245:8081/',  // 代理转发到的服务器，也就是后台服务器 
            changeOrigin: true,                     // 开启代理  
            pathRewrite: {'/test/home': '/home'}        // /test/home路径替换为/home转发到后台 前台请求
            												http://localhost:8080/test/home/helloSping 转发为
            												http://192.168.31.245:8081/home/helloSpring
        }  
    }