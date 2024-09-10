
<template>
    <div v-on:click="countClicks">
        <h>{{ name }}</h>
        <p>{{ message }}</p>
        <p id="red">You have clicked me {{ clicks }} times.</p>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                name: 'Apples',
                message: 'I like Apples',
                clicks: 0
            }
        },
        methods: {
            countClicks() {
                this.clicks++;  
            }
        },
    };
</script>

<style>
#red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }
</style>