<template>
  <VRow class="contact pa-2">
    <VCol cols="12" sm="12" lg="3" md="4">
      <img src="../../assets/img/flamme gaz.jpg" alt="Contact" />
    </VCol>
    <VCol cols="12" sm="12" lg="3" md="4">
      <v-card class="contactInfos" min-height="250" elevation="0" color="transparent">
        <v-card-title class="mx-auto contactInfos" color="black">
          <span>T.<a style="color: #2b4479 !important; cursor: pointer">514-990-1901</a></span>
        </v-card-title>
        <v-card-subtitle class="contactInfos">général & urgence</v-card-subtitle>
        <v-card-text class="contactInfos">
          <span style="color: #2b4479"> Adresse</span>
          <br />
          775, rue Gaudette
          <br />
          St-Jean-sur-Richelieu, QC
          <br />
          J3B 7S7
        </v-card-text>
        <v-card-text class="contactInfos">
          <span style="color: #2b4479"
            >F. <a style="color: #2b4479 !important; cursor: pointer">450 359-4431</a></span
          >
          <br />
          <span><a>info@mpbeauchemin.com</a></span>
        </v-card-text>
      </v-card>
    </VCol>
    <VCol cols="12" sm="12" lg="6" md="4" class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37748.38047815842!2d-73.28463244709712!3d45.31518900254484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90ef7019a737f%3A0x1b337d8523414e03!2sMazout%20et%20Propane%20Beauchemin!5e0!3m2!1sen!2sca!4v1670883250371!5m2!1sen!2sca"
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
* {
  color: #2b4479;
  font-size: 1.2rem;
}

img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.contact {
  background: #ededed;

  .contactInfos {
    text-align: left !important;
  }
}
</style>
