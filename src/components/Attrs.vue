<template>
  <label>
    <input type="text" v-bind="$attrs" />
  </label>
  <!-- <div v-bind="$attrs">
      <div>ssd</div>
  </div> -->
</template>
<script>
export default {
  inheritAttrs: false
}
</script>