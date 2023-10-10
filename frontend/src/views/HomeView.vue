<script setup>
import Card from "@/components/cards/Card.vue";
import SvgIcon from "@/components/icons/SvgIcon.vue";
import SkewCard from "@/components/cards/SkewCard.vue";
</script>

<template>
  <div class="container">
    <div class="presentation-container">
      <span style="font-weight: 300; max-width: 400px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, necessitatibus.</span>
      <div class="btn-container">
        <RouterLink to="/" class="btn">Prendre un RDV</RouterLink>
      </div>
    </div>
    <div class="redirect-meet">
      <span style="font-weight: 300; max-width: 400px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, necessitatibus.</span>
      <div class="btn-container">
        <RouterLink to="/book" class="btn">Prendre un RDV</RouterLink>
      </div>
    </div>

    <!--    <Card height="20vh">
          <template #content>
            <a href="#education">
              <SvgIcon class="down-arrow" name="arrow-down-circle"/>
            </a>
          </template>
        </Card>-->
    <!--    <Card height="20vh">
          <template #content>
            <img src="../assets/images/cadden.png">
          </template>
        </Card>-->
    <!--    <SkewCard height="20vh" width="50vw">
          <template #content>
            test
          </template>
        </SkewCard>-->
  </div>
</template>

<style scoped>

#root {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.redirect-meet {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 20vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.presentation-container {
  
}


@media screen and (max-width: 900px) {
  #intro {
    height: 20vh;
  }
}

</style>
