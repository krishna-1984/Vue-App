<template>
  Hello World {{ msg }}
  <Test />
</template>

<script>
import Test from './Test.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Test
  }
}
</script>