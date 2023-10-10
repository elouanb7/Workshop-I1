<template>
  <div class="card">
    <div class="card-title">
      <slot name="title"/>
    </div>
    <div class="card-content">
      <slot name="content"/>
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>


export default {
  name: "Card",
  props: {
    width: {
      type: String,
      default: "50vw"
    },
    height: {
      type: String,
      default: "10vh"
    },
  },
};
</script>

<style scoped>

.card{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  width: v-bind(width);
  height: v-bind(height);
  margin-bottom: 20px;
}

.card-content{
  width: 100%;
  text-align: center;
}

.card-title {
  width: 100%;
  font-weight: bolder;
  font-size: x-large;
}

@media screen and (min-width: 900px) {

}

@media screen and (max-width: 900px) {
  .card{
    width: 80vw;
  }
}
</style>
