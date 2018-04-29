<template>
    <div class="recruit">
        <h1>{{msg}}</h1>
        <div @click = "goToUser">Go To User</div>
    </div>
</template>

<script>
export default {
	  name: 'Recruit',
	  data () {
	    return {
	      msg: 'Recruit Page'
	    }
	  },
	  methods : {
	  	goToUser : function(){
	  		// 编程式导航
	  		const userId = 123
			this.$router.push({ name: 'User', params: { userId }}) // -> /user/123
			//this.$router.push({ path: `/user/${userId}` }) // -> /user/123
	  		//this.$router.push('user/k')*/
	  	}
	  },
	  beforeRouteEnter (to, from, next) {
	    // 在渲染该组件的对应路由被 confirm 前调用
	    // 不！能！获取组件实例 `this`
	    // 因为当守卫执行前，组件实例还没被创建
	    next()
	  },
	  beforeRouteLeave (to, from, next) {
	    // 导航离开该组件的对应路由时调用
	    // 可以访问组件实例 `this`
	    next()
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
