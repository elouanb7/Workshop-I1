<script>
export default {
  name: "Card",
  data() {
    return {
      week: {
        nb: 41,
        firstDay: "9/10/23",
        lastDay: "15/10/23",
        days: [{
            date: "9/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}]
          }
          , {
            date: "10/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}]
          }
          , {
            date: "11/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}]
          }
          , {
            date: "12/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}]
          }
          , {
            date: "13/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}, {beginDate: "17:00", endDate: "18:00", placesLeft: 7}]
          }
          , {
            date: "14/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}]
          }, {
            date: "15/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}]
          }]
      },
      rendezVous : null,
    }
  },
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
  computed: {
    meetList() {
        return this.$store.rdv.getRdv()
    }
  }
};

</script>

<template>
  <div class="container">
    <div class="appointments-container">
      <ul class="week">
        <li class="day" v-for="day in week.days">
          {{ day.date }}
          <ul class="slots">
            <li class="slot" v-for="slot in day.slots"><small>{{slot.beginDate}} - {{slot.endDate}}</small><br><span class="places">Nombre de places restantes : {{slot.placesLeft}}</span></li>
          </ul>
        </li>
      </ul>
    </div>
    {{meetList}}
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.appointments-container {
  width: 100%;
}

/* List of appointments */

.week {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.day {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.slots {
  margin-top: 10px;
}

.slot {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-radius: 5px;
  background-color: var(--dark-1);
  padding-left: 10px;
  max-width: 175px;
  box-shadow: 5px 3px 3px var(--dark-1);
  transition: ease-in-out 0.05s;
}

.slot:hover {
  box-shadow: none;
  transition: ease-in-out 0.05s;
}

.places {

}

@media screen and (max-width: 900px) {
  #intro {
    height: 20vh;
  }
}

</style>
