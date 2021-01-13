<template>
  <div class="reportPage">
    <h1>Inventory Report</h1>
    <select v-model="warehouseType" @change="getRecords">
      <option value="w1">W1</option>
      <option value="w2">W2</option>
      <option value="all">All</option>
    </select>
    <table>
      <tr>
        <th>Warehouse</th>
        <th>SP No</th>
        <th>OnHand</th>
      </tr>
      <!-- Div mounts if warehouse type is not all -->
      <div v-if="warehouseType != 'all'">
        <!-- v-for will loop through each of the records and create a cell for each property listed below -->
        <tr v-for="record in records" :key="record.Seq">
          <td>{{ record.Warehouse }}</td>
          <td>{{ record.SN }}</td>
          <td>{{ record.Quantity }}</td>
        </tr>
      </div>

      <!-- Div mounts if warehouse type is all  -->
      <div v-if="warehouseType === 'all'">
        <!-- v-for will loop through each of the records and create a cell for each property listed below -->
        <tr v-for="record in records" :key="record.Seq">
          <td>All</td>
          <td>{{ record.SN }}</td>
          <td>{{ record.Quantity }}</td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
import GetRecord from "@/services/GetRecord";

export default {
  data() {
    return {
      warehouseType: "",
      records: [],
    };
  },
  methods: {
    async getRecords() {
      this.records = [];
      let response = await GetRecord.getTransactions({
        warehouseType: this.warehouseType,
      });
      this.records = response.data.recordset;
      //An array of the objects that meet the required criteria will be pushed to the record's array.
    },
  },
};
</script>

<style>
th,
td {
  display: inline-block;
  width: 200px;
  padding: 24px;
  border: 0.5px black solid;
}

table {
  margin: 30px auto 0 auto;
}
</style>
