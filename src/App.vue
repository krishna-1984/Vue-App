<template> 
  <div id="app" class="content-container">
    <HeaderComponent />
    <router-view />
      <h1>Food Item</h1>
      <div id="wrapper">
        <food-item 
          food-name="Apples"
          food-desc="Apples are a type of fruit that grow on trees."
          v-bind:is-favorite="true"/>
        <food-item 
          food-name="Pizza"
          food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
          v-bind:is-fovorite="false"/>
        <food-item 
          food-name="Rice"
          food-desc="Rice is a type of grain that people like to eat."
          v-bind:is-favorite="false"/>    
      </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent, FooterComponent
  }
}
</script>

<style scoped>
.content-container {
  padding-bottom: 100px; /* Adjust this value to the height of your footer */
}
#wrapper {
  display: flex !important;
  flex-wrap: wrap !important;
}
#wrapper > div {
  border: dashed black 1px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>
