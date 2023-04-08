<!-- src/components/Alert.vue -->
<template>
  <v-alert v-if="visible" :type="type" dense text>{{ message }}</v-alert>
</template>

<script>
import { mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Alert",
  computed: {
    ...mapState(["alert"]),
    message() {
      return this.alert.message;
    },
    type() {
      return this.alert.type;
    },
    visible() {
      return this.alert.visible;
    },
  },
};
</script>
