<template>
  <nav class="navbar">
    <div class="nav-links" @click="toggleMobileMenu">
      <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/book">Prendre un Rendez-Vous</RouterLink></li>
        <li><RouterLink to="/">Mes Rendez-Vous</RouterLink></li>
        <li><a @click="toggleTheme">
          <SvgIcon class="toggleTheme" :name="currentTheme"/>
        </a></li>
      </ul>
    </div>
  </nav>
  <div id="navbar-container">
    <RouterLink to="/" id="title">Parler Sans Peur</RouterLink>
    <a id="menu" @click="toggleMobileMenu">Menu</a>
  </div>
</template>

<script>

import {computed, defineComponent} from 'vue';
import {useGlobalStore} from '@/stores/global';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const globalStore = useGlobalStore();

    return {
      toggleTheme: globalStore.toggleTheme,
      currentTheme: computed(() => {
        return globalStore.getCurrentTheme === 'dark' ? 'moon' : 'sun';
      }),
    };
  },
  methods: {
    toggleMobileMenu() {
      const navLinks = document.querySelector(".nav-links");
      const body = document.querySelector('body');

      if (navLinks.classList.contains('mobile-menu')) {
        navLinks.classList.remove('mobile-menu');
        body.classList.remove('no-scroll');
        document.removeEventListener('scroll', this.handleScroll);
        setTimeout(() => {
          navLinks.style.visibility = 'hidden';
        }, 300); // Ajustez le délai pour correspondre à la durée de transition
      } else {
        navLinks.style.visibility = 'visible';
        body.classList.add('no-scroll');
        document.addEventListener('scroll', this.handleScroll, { passive: false });

        // Forcer une nouvelle mise en page avant d'ajouter la classe 'mobile-menu'
        // pour déclencher la transition
        window.getComputedStyle(navLinks).transform;

        navLinks.classList.add('mobile-menu');
      }
    },
    handleScroll(event) {
      const navLinks = document.querySelector(".nav-links");
      if (navLinks.classList.contains('mobile-menu')) {
        event.preventDefault();
        event.stopPropagation();
        event.returnValue = false;
        return false;
      }
    }
  }
});
</script>

<style scoped>

.navbar {
  display: block;
}

.navbar .nav-links ul {
  display: flex;
  flex-direction: column;
}

#menu {
  display: block;
  cursor: pointer;
  opacity: 75%;
  stroke: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

#title {
  font-weight: 600;
  font-size: 1.4em;
}

.toggleTheme {
  cursor: pointer;
}

.nav-links {
  top: 0;
  left: 0;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
}

.nav-links ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar .nav-links ul li {
  margin: 25px 0;
}

.mobile-menu {
  opacity: 1;
  visibility: visible;
}

@media screen and (min-width: 900px) {

  #navbar-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

}

@media screen and (max-width: 900px) {

  .nav-links {
    top: 0;
    left: 0;
    display: flex;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(80px);
    -webkit-backdrop-filter: blur(80px);
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .nav-links ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar .nav-links ul li {
    margin: 25px 0;
  }

  #navbar-container {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 5%;
    padding: 30px;
    box-sizing: border-box;
  }

  .mobile-menu {
    opacity: 1;
    visibility: visible;
  }

  .redirections-container{
    display: none;
  }
}


</style>
