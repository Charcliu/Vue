<template>
    <div class="testVuex">
        <h1>我是TestVuex的Message Info : {{gettersMsg}}</h1>
        <div @click = "updateState">修改Vuex状态(通过Store)</div>
        <hello></hello>
        <hello-one></hello-one>
    </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapGetters } from 'vuex'
import hello from './VuexComponent/Hello'
import helloOne from './VuexComponent/Hello1'

export default {
	
	  name: 'TestVuex',
	  data () {
	    return {
	      
	    }
	  },
	  computed : {
	  	 //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
	  	 ...mapGetters([
		      'gettersMsg',
		    ])
	  },
	  components : {
	  	hello,
	  	helloOne
	  },
	  methods : {
	  	updateState : function(){
	  		this.$store.commit('mutationsMsg', { msg : "我是通过Store修改后的值"})
	  	}
	  }
	  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
