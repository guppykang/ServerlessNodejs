<template>
  <view class="container">
  <text class="text-color-primary">{{msg}}</text>
  </view>
</template>

<script>
export default {
    data: function() {
        return {
            msg: "Hello World"
        }
    }
}
</script>



<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
