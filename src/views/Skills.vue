<template>
  <v-container>
    <h1>Skills</h1>
    <p>業務での使用</p>
    <v-row>
      <v-col v-for="(skill, index) in skills" :key="index" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>{{ skill.name }}</v-card-title>
          <v-card-subtitle>{{ skill.level }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <br>
    <p>学生時代、個人での使用</p>
    <v-row>
      <v-col v-for="(skill, index) in test" :key="index" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>{{ skill.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Skills',
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          level: '2年',
          progress: 90,
          color: 'orange',
        },
        {
          name: 'CSS',
          level: '2年',
          progress: 70,
          color: 'blue',
        },
        {
          name: 'JavaScript',
          level: '2年',
          progress: 75,
          color: 'yellow',
        },
        {
          name: 'jQuery',
          level: '2年',
          progress: 40,
          color: 'purple',
        },
        {
          name: 'Java',
          level: '1年',
          progress: 65,
          color: 'green',
        },
        {
          name: 'SQL',
          level: '2年',
          progress: 40,
          color: 'purple',
        },
      ],
      test: [
        {
          name: 'PHP',
          level: '2年',
          progress: 90,
          color: 'orange',
        },
        {
          name: 'Python',
          level: '2年',
          progress: 70,
          color: 'blue',
        },
        {
          name: 'JSP/Servlet',
          level: '2年',
          progress: 75,
          color: 'yellow',
        },
        {
          name: 'Bootstrap4',
          level: '2年',
          progress: 40,
          color: 'purple',
        },
        {
          name: 'vue,js',
          level: '1年',
          progress: 65,
          color: 'green',
        },
        {
          name: 'Node.js',
          level: '2年',
          progress: 40,
          color: 'purple',
        },
        {
          name: 'Firebase',
          level: '2年',
          progress: 40,
          color: 'purple',
        },
        {
          name: 'wordpress',
          level: '2年',
          progress: 40,
          color: 'purple',
        },
      ],
    };
  },
  
};
</script>
