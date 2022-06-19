<template>
  <div>
    <!-- <ul>
      <li v-for="data in tableData" :key="data">
        <img :src="event._embedded.events[i].images[i]" />
        <p>
          <strong>{{ data }}</strong>
        </p>
      </li>
    </ul> -->
    <table id="example" class="display" style="width: 100%">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(column, index) in columns" :key="index">
            {{ row[column.field] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Table",
  props: ["rows", "columns"],
};
</script>
<style scoped>
</style>