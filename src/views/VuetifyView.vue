<!-- Vuetifyも普通に入れられた -->
<!-- https://vuetifyjs.com/en/introduction/why-vuetify/ -->
<template>
  <v-alert text="これはv-alertのコンポーネント"></v-alert>
  <v-color-picker></v-color-picker>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :color="isHovering ? 'primary' : undefined"
        title="Hover over me"
        text="..."
      ></v-card>
    </template>
  </v-hover>
</template>
