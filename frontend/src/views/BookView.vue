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
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}, {
              beginDate: "17:00",
              endDate: "18:00",
              placesLeft: 7
            }]
          }
          , {
            date: "14/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}]
          }, {
            date: "15/10/23",
            slots: [{beginDate: "16:00", endDate: "17:00", placesLeft: 7}]
          }]
      },
      rendezVous: null,
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
      return this.$store.rdv
    }
  },
  created() {
    this.$store.rdv.getRdv()
  },
  methods: {
    formatDate(date) {
      date = new Date(date);

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear() % 100;

      if (day < 10) {
        day = '0' + day;
      }

      if (month < 10) {
        month = '0' + month;
      }

      if (year < 10) {
        year = '0' + year;
      }

      return day + '/' + month + '/' + year
    }
  }
};

</script>

<template>
  <div class="container">
    <!--    <div class="appointments-container">
          <ul class="week">
            <li class="day" v-for="day in week.days">
              {{ day.date }}
              <ul class="slots">
                <li class="slot" v-for="slot in day.slots"><small>{{slot.beginDate}} - {{slot.endDate}}</small><br><span class="places">Nombre de places restantes : {{slot.placesLeft}}</span></li>
              </ul>
            </li>
          </ul>
        </div>-->
    <div class="title">
      Réservez un rendez vous :
    </div>
    <div class="appointments-container">
      <ul class="slots">
        <li class="slot" v-for="slot in meetList.rdv">
          {{ formatDate(slot.date_debut) }}
          <small>
          {{ new Date(slot.date_debut).getHours() }}:{{ new Date(slot.date_debut).getMinutes() }} -
          {{ new Date(slot.date_fin).getHours() }}:{{ new Date(slot.date_fin).getMinutes() }}
          </small>
          <br>
          <span class="places">Nombre de places restantes : {{slot.nb_place - slot.patients.length}}</span>
        </li>
      </ul>
    </div>
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

.title {
  font-weight: 700;
  font-size: 50px;
  margin : 40px;
}

/* List of appointments */

.week {
  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap : 10px;
}

.slot {
  padding-bottom: 5px;
  border-radius: 5px;
  background-color: var(--dark-1);
  padding-left: 10px;
  box-shadow: 5px 3px 3px var(--dark-1);
  transition: ease-in-out 0.05s;
  max-width: 80%;
  width: 100%;
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
