<template>
    <div class="container">
      <div v-for="(card, index) in cards" :key="index" class="card" @click="flipCard(card,index)">
        <div class="card-inner" :class="{ flipped: card.isFlipped }">
            <template v-if="card.show">
          <div class="card-front" v-if="!card.isFlipped">
            <img :src="card.backSrc" alt="背面图片">
          </div>
          <div class="card-back" v-else>
            <img :src="card.frontSrc" alt="正面图片">
          </div></template>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import index from './index.js'
  export default {
    name: 'HelloWorld',
     mixins: [index],
  }
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(239,228,176,.5);
  }
  .card {
    margin: 10px;
    width: 18%;
  }
  
  .card-inner {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border: 1px solid #ebebeb;
  }
  
  .card-inner.flipped {
    transform: rotateY(180deg);
  }
  
  .card-front, .card-back {
    backface-visibility: hidden;
  }
  
  .card-front {
    width: 100%;
    height: 100%;
  }
  
  .card-back {
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
  }
    img {
    width: 100%;
    height: 100%;
        object-fit: cover;
    }
  </style>
  