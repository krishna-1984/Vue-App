
<template>
    <div>
        <h3>{{ foodName }}</h3>
        <img src="/images/img_quality.svg" v-show="foodIsFavorite">
        <p>{{ foodDesc }}</p>
        <b-button variant="success" v-on:click="toggleFavorite">Favorite</b-button>
    </div>
</template>

<script>
    export default{
        props: [ 'foodName', 'foodDesc', 'isFavorite' ],

        data() {
            return {
                foodIsFavorite: this.isFavorite
            }
        },
        methods: {
            toggleFavorite() {
                this.foodIsFavorite = !this.foodIsFavorite;
            }
        }     
    };
</script>

<style>
    #red {
        font-weight: bold ;
        color: rgb(144, 12, 12);
    }
    img {
        height: 1.5em;
        float: right;
    }
</style>