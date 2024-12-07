<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { format } from 'date-fns';

const scheduleData = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:9103/api/schedule');
    scheduleData.value = response.data.data;
    loading.value = false;
   
  } catch (error) {
    console.error('Error fetching schedule data:', error);
    loading.value = false;
  }
});

const formatDate = (dateString) => {
  return format(new Date(dateString), 'dd/MM/yyyy HH:mm');
};

</script>

<template>
  <div class="schedule">
    <ProgressSpinner v-if="loading" />
    <DataTable v-else :value="scheduleData" tableStyle="min-width: 150rem">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone"></Column>
      <Column field="phoneDDD" header="Phone DDD"></Column>
      <Column field="observation" header="Observation"></Column>
      <Column field="status" header="Status"></Column>
      <Column field="motorcycleId" header="Motorcycle ID"></Column>
      <Column field="startBusinessHour" header="Start Business Hour" :body="(data) => formatDate(data.startBusinessHour)"></Column>
      <Column field="endBusinessHour" header="End Business Hour" :body="(data) => formatDate(data.endBusinessHour)"></Column>
      <Column field="scheduleDate" header="Schedule Date" :body="(data) => formatDate(data.scheduleDate)"></Column>
      <Column field="dateCreated" header="Date Created" :body="(data) => formatDate(data.dateCreated)"></Column>
      <Column field="createdBy" header="Created By"></Column>
      <Column field="dateLastUpdate" header="Date Last Update" :body="(data) => formatDate(data.dateLastUpdate)"></Column>
    </DataTable>
  </div>
</template>

<style>

</style>