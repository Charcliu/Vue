<template>
    <div class="hello">
        <h1>我是Hello的Message Info : {{msg}}</h1>
        <div @click = "updateState">修改Vuex状态(通过Mutation)</div>
    </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapGetters, mapMutations } from 'vuex'
export default {
	  name: 'Hello',
	  data () {
	    return {
	      
	    }
	  },
	  computed : {
	  	 //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性,如果你想将一个 getter 属性另取一个名字，使用对象形式
	  	 ...mapGetters({
		      msg : 'gettersMsg',
		    })
	  },
	  methods : {
	  		updateState :function(){
	  			this.updateMsg({ msg: "我是通过Mutation修改后的值" })
	  		},
	  		...mapMutations({
		      updateMsg : 'mutationsMsg' // 将 `this.updateMsg()` 映射为 `this.$store.commit('mutationsMsg')`
		    })
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
    	background-color: yellow;
    }
</style>
