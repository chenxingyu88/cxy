<template>
  <div class="page">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '我的'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page{
      color: #f00;
  }
</style>
