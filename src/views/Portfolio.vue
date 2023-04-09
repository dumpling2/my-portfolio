<template>
    <v-container>
      <h1>Portfolio</h1>
      <v-row>
        <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4">
          <v-card>
            <v-img :src="project.image" aspect-ratio="1.7"></v-img>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-subtitle>{{ project.description }}</v-card-subtitle>
            <v-card-actions>
              <v-btn :href="project.link" target="_blank">View Project</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Portfolio",
    data() {
      return {
        projects: [
        {
            title: "ポートフォリオサイト",
            description: "vue.jsを使用し作成PWA対応",
            image: "public/img/icons/pexels-ann-h-14936128.jpg",
            link: "portfolio-master-6ca36.firebaseapp.com",
          },
          {
            title: "discordChat",
            description: "discordでchat-gptに質問をできるbot",
            image: "https://via.placeholder.com/300x200",
            link: "https://github.com/dumpling2/disco-botchat",
          },          
          {
            title: "IAR",
            description: "学生時代に作成ARを表示するサイト",
            image: "https://wars-cc026.firebaseapp.com/27012021045442A.png",
            link: "https://wars-cc026.firebaseapp.com/",
          },
        ],
      };
    },
  };
  </script>
  public/img/icons/pexels-ann-h-14936128.jpg