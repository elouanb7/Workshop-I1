<template>
  <div :style="cardStyle" :class="[ 'skew-card', componentThemeClass ]" @mouseenter="startPerspective"
       @mouseleave="resetPerspective">
    <div class="card-title">
      <slot name="title"/>
    </div>
    <div class="card-content">
      <slot name="content"/>
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
<!--    <div class="shine-effect" :style="shineEffectStyle"></div>-->
  </div>
</template>

<script>


import {computed} from "vue";
import {useGlobalStore} from "@/stores/global";

export default {
  name: "Skew-card",
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
  setup() {
    const globalStore = useGlobalStore();
    return {
      currentTheme: computed(() => {
        return globalStore.getCurrentTheme === "dark" ? "dark-theme" : "light-theme";
      }),
    };
  },
  data() {
    return {
      cursorPosition: {x: 0, y: 0},
      isHovered: false,
      mouse: {x: 0, y: 0}
    };
  },
  computed: {
    cardStyle() {
      if (this.isHovered) {
        return {
          transform: `perspective(700px) rotateY(${this.cursorPosition.x}deg) rotateX(${this.cursorPosition.y}deg)`,
          boxShadow: `0px ${this.cursorPosition.y}px 6px rgba(0, 0, 0, 0.2)`
        };
      } else {
        return {
          transform: "",
          boxShadow: ""
        };
      }
    },
    componentThemeClass() {
      return `component-${this.currentTheme}`;
    },
    /*shineEffectStyle() {
      console.log("mouseX", this.mouse.x, "mouseY", this.mouse.y)
      return {
        top: `calc(-50px + ${this.mouse.y}px)`,
        left: `calc(-40px + ${this.mouse.x}px)`,
      };
    },*/
  },
  mounted() {
    window.addEventListener('mousemove', this.updateCursorPosition);
  },
  methods: {
    startPerspective() {
      this.isHovered = true;
      window.addEventListener("mousemove", this.updateCursorPosition);
    },
    resetPerspective() {
      this.isHovered = false;
      window.removeEventListener("mousemove", this.updateCursorPosition);
      this.cursorPosition.x = 0;
      this.cursorPosition.y = 0;
      /*this.mouse.x = 0;
      this.mouse.y = 0;*/
    },

    updateCursorPosition(event) {
      const maxRotateX = 1; // Maximum value for rotateX in degrees
      const maxRotateY = 1.5; // Maximum value for rotateY in degrees

      const rect = this.$el.getBoundingClientRect();
      const offsetX = event.clientX - rect.left || event.touches[0].clientX - rect.left;
      const offsetY = event.clientY - rect.top || event.touches[0].clientY - rect.top;

      /*this.mouse.x = event.clientX - rect.left || event.touches[0].clientX - rect.left;
      this.mouse.y = event.clientY - rect.top || event.touches[0].clientY - rect.top;*/

      const xRatio = (offsetX / rect.width - 0.5) * 30;
      const yRatio = (offsetY / rect.height - 0.5) * 30;

      this.cursorPosition.x = Math.max(Math.min(xRatio, maxRotateY), -maxRotateY) * -1
      this.cursorPosition.y = Math.max(Math.min(yRatio, maxRotateX), -maxRotateX);
    },
  }
};
</script>

<style scoped>

.skew-card {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: v-bind(width);
  height: v-bind(height);
  transform-origin: center center;
  transition: transform 0.3s ease-out;
  border-radius: 12px;
}

/*.shine-effect {
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(white, #3984ff00 80%);
  opacity: 0;
  transition: opacity 0.2s;
}*/

.skew-card:hover .shine-effect {
  opacity: 0.4;
}

.card-content {
  text-align: center;
  backface-visibility: hidden;
}


.component-light-theme {
  background-color: #f1f1f1;
}

.component-dark-theme {
  background-color: #333;
}

@media screen and (max-width: 900px) {
  .skew-card{
    width: 80vw;
  }
}

@media screen and (min-width: 900px) {

}
</style>
