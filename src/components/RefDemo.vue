<template>
  <div>
    <div v-for="item in 10" :key="item" ref="liRef"></div>
  </div>
</template>
<script>
export default {
  name: 'Vue2Demo',
  data() {
    return {}
  },
  mounted() {
    console.log('refs', this.$refs.liRef)
    // refs (10) [div, div, div, div, div, div, div, div, div, div]
  }
}
</script>
