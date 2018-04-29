<template>
    <div class="user">
    	<h1>{{msg}}</h1>
        <!-- <h1>{{$route.params.id}}</h1> -->
        <h1>{{userId}}</h1>
        <div @click = "goToAbout">Go To About</div>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'User',
  props: ['userId'],
  data () {
    return {
      msg: 'User Page'
    }
  },
  methods : {
    goToAbout : function(){
      this.$router.push('About')
    }
  }
  /*beforeRouteUpdate (to, from, next) {
    console.log(to, from, next)
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
