<template>
<h2>Hi, My name is Krishna Pandit and I am working in {{ cname }} company.</h2>
</template>

<script>
export default {  
  name: 'MyJob',
  props: {
    cname: String
  }
}
</script>