<template>
  <div>
    <h1>Inventory Entry Page</h1>
    <br />
    <br />

    <h2>Add Record below</h2>

    <!-- dynamically change state of record with inputs below -->
    <label for="Warehouse">Warehouse</label
    ><input id="Warehouse" v-model="record.warehouse" type="text" />
    <label for="ModelNo">ModelNo</label
    ><input id="ModelNo" v-model="record.modelNo" type="text" /> <label for="Sn">SN</label
    ><input id="Sn" v-model="record.sn" type="text" />
    <label for="Quantity">Quantity</label
    ><input id="Quantity" v-model="record.quantity" type="text" />
    <br />
    <button @click="add">Add</button>
  </div>
</template>

<script>
import AddRecord from "@/services/AddRecord";
export default {
  data() {
    return {
      record: {
        warehouse: "",
        modelNo: "",
        sn: "",
        quantity: 0,
      },
    };
  },
  methods: {
    // Makes post request to backend api for the submitted record
    async add() {
      const response = await AddRecord.addRecord({
        warehouse: this.record.warehouse,
        modelNo: this.record.modelNo,
        sn: this.record.sn,
        quantity: this.record.quantity,
      });

      this.record.warehouse = "";
      this.record.modelNo = "";
      this.record.sn = "";
      this.record.quantity = 0;

      console.log(response.data);
    },
  },
};
</script>

<style>
button {
  margin-top: 30px;
}
input {
  margin: 5px 10px 0 5px;
}
</style>
