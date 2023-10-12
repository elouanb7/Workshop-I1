<script setup>
import Card from "@/components/cards/Card.vue";
import SvgIcon from "@/components/icons/SvgIcon.vue";
import SkewCard from "@/components/cards/SkewCard.vue";
</script>

<template>
  <div class="container">
    <div class="presentation-container">
      <span style="font-weight: 300; max-width: 400px">Bienvenue sur <span style="font-weight: 500;">Parler sans peur,</span><br><br>
        Sur ce site, nous nous engageons à fournir un espace sécurisé et de soutien pour les personnes qui sont confrontées au harcèlement, que ce soit en ligne ou hors ligne. Nous croyons en l'importance de l'empathie, de la compréhension et de la solidarité pour aider ceux qui sont touchés par le harcèlement à surmonter leurs difficultés.</span>
      <div class="image-container">
        <img src="https://www.shutterstock.com/image-photo/annoyed-unhappy-married-couple-arguing-260nw-1302585070.jpg" alt="">
      </div>
    </div>
    <div class="redirect-meet">
      <span style="font-weight: 300; max-width: 400px">Prenez un rendez-vous afin d'échanger avec des personnes qui ont subies/ont fait subir du harcèlement. Ces échanges permettent de faire évoluer les mentalités et aider tout le monde à aller mieux.</span>
      <div class="btn-container">
        <RouterLink to="/book" class="btn">Prendre un RDV</RouterLink>
      </div>
    </div>
    <div class="description">
      Ressources et Informations: Nous fournissons des ressources complètes pour vous aider à comprendre ce qu'est le harcèlement, comment le reconnaître, et comment vous protéger.
      <br><br>
      Soutien Communautaire: Rejoignez notre communauté bienveillante où vous pouvez partager votre expérience, poser des questions et trouver un soutien émotionnel auprès d'autres personnes qui ont vécu des situations similaires.
      <br><br>
      Conseils et Astuces: Découvrez des conseils pratiques pour faire face au harcèlement, gérer le stress et prendre des mesures pour votre bien-être.
      <br><br>
      Signaler le Harcèlement: Apprenez comment signaler le harcèlement aux autorités compétentes et aux plateformes en ligne, et recevez des conseils sur les étapes à suivre.
      <br><br>
      Actualités et Sensibilisation: Restez informé des dernières nouvelles et développements en matière de lutte contre le harcèlement, et contribuez à sensibiliser davantage.
      <br><br>
      Notre engagement :
      <br><br>
      Nous nous engageons à maintenir un espace sûr, respectueux et inclusif. Le harcèlement ne sera en aucun cas toléré sur ce site. Notre objectif est de créer une communauté bienveillante pour aider les victimes de harcèlement à se sentir soutenues et écoutées.
      <br><br>
      N'hésitez pas à explorer notre site et à rejoindre notre communauté. Vous n'êtes pas seul(e), et nous sommes là pour vous aider à surmonter le harcèlement. Ensemble, nous pouvons faire une différence.
      <br><br>
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


.redirect-meet {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
  height: 20vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-container{
  width: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.presentation-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-top: 20px;
}

.description {
  margin-top: 100px;
}


@media screen and (max-width: 900px) {
  #intro {
    height: 20vh;
  }
}

</style>
