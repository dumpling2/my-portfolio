<template>
  <v-app>
    <v-app-bar app color="primary" myTheme>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-for="(route, index) in routes" :key="index" :to="route.path">
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      routes: [
        { path: "/", name: "Home", icon: "mdi-home" },
        { path: "/about", name: "About", icon: "mdi-account" },
        { path: "/portfolio", name: "Portfolio", icon: "mdi-briefcase" },
        { path: "/skills", name: "Skills", icon: "mdi-chart-bubble" },
        { path: "/contact", name: "Contact", icon: "mdi-email" },
      ],
    };
  },
};
</script>
