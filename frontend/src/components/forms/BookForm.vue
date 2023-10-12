<script>
import patientApi from '@/api/patient.js'
export default {
  name: "BookForm",
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      rdvId: ""
    }
  },
  created() {
    this.rdvId = parseInt(this.$route.params.id);
  },
  methods: {
    validateAndSubmit() {
      let patient = {
        nom: this.name,
        email: this.email,
        prenom: this.surname,
        rdvId: this.rdvId
      };
      patientApi.postPatient(patient);
    },
  }
}
</script>

<template>
  <form @submit="validateAndSubmit" class="form">
    <div id="demande">
      <h1>Réservation d'un créneau</h1>
      <fieldset class="form-group">
        <input
            type="text"
            placeholder="Prénom"
            class="saisie-texte"
            v-model="name"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
            type="text"
            placeholder="Nom de famille"
            class="saisie-texte"
            v-model="surname"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
            type="text"
            placeholder="Email"
            class="saisie-texte"
            v-model="email"
        />
      </fieldset>
      <button type="submit" class="save-button">Réserver</button>
    </div>
  </form>
</template>

<style scoped>
fieldset {
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #515151;
}

input {
  margin: 10px;
}

h1 {
  font-size: 50px;
  text-align: center;
  margin: 40px;
}

#demande {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.saisie-texte {
  width: 400px;
  height: 45px;
  background: #fafafa;
  border: 1px solid var(--dark-1);;
  box-shadow: 0px 15px 35px rgba(6, 8, 37, 0.2);
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: var(--dark-1);
  margin: 15px;
}

.save-button {
  width: 400px;
  height: 45px;
  background: var(--green-1);
  box-shadow: 0px 15px 35px rgba(6, 8, 37, 0.2);
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #fafafa;
  cursor: pointer;
  margin: 15px;
}
</style>