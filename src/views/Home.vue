<template>
    <v-container>
      <h1>自己紹介</h1>
      <v-img
        src="" 
        alt="Profile Picture"
        max-width="200"
        class="mx-auto my-4"
      ></v-img>
      <p>
        卒業後、新卒で入社し、一貫してシステムエンジニアとして従事しております。</p><p>主に Java、JavaScript を使用した Web システムの開発案件を担当し、詳細
設計からテストまでの一連の経験がございます。
      </p>
      <br>
      <h2>有資格</h2>
      <v-table>
      <thead>
        <tr>
          <th class="text-left">
            期間
          </th>
          <th class="text-left">
            資格名
          </th>

        </tr>

      </thead>
      <tbody>
        <tr>
          <td>
            2018 年 5 月 
          </td>
          <td>基本情報技術者試験
          </td>
        </tr>
        <tr>
          <td>
            2019 年 6 月
          </td>
          <td>応用情報技術者試験
          </td>
        </tr>
        </tbody>
        </v-table>
        <br>
        <p>
メニューからその他情報にアクセスできます
      </p>

    </v-container>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
  };
  </script>
  