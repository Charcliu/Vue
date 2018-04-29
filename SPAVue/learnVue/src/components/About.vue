<template>
    <div class="about">
        <h1>{{msg}}</h1>
        <div @click = "goToRecruit">Go To Recruit</div>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About Page'
    }
  },
  methods : {
    goToRecruit : function(){
        this.$router.push("recruit")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
