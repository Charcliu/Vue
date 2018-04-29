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
  		const userId = 123
		this.$router.push({ name: 'User', params: { userId }}) // -> /user/123
		//this.$router.push({ path: `/user/${userId}` }) // -> /user/123
  		//this.$router.push('user/k')*/
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
