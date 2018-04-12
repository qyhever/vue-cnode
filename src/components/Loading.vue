<template>
  <!-- <div class="loading"> -->
    <div class="loading-spinner" :style="{
      'border-top-color': color,
      'border-left-color': color,
      'border-bottom-color': color,
      'width': size + 'px',
      'height': size + 'px'
    }"></div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Loading',
  props: {
    color: {
      type: String,
      default: '#80bd01'
    },
    size: {
      type: Number,
      default: 28
    }
  }
}
</script>

<style scoped lang="stylus">
// .loading
//   position fixed
//   top 0
//   left 0
//   right 0
//   bottom 0
.loading-spinner
  position absolute
  top 20%
  left 50%
  border 4px solid transparent
  border-radius 50%
  animation spinner-rotate 0.8s infinite linear
@keyframes spinner-rotate
  0%
    transform: translateX(-50%) rotate(0deg)
  100%
    transform: translateX(-50%) rotate(360deg)
</style>