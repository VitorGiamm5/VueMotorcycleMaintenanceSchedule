<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const scheduleData = ref([]);
const loading = ref(true);

const router = useRouter();

const editRecord = (id: number) => {
    router.push({ name: 'ScheduleEdit', params: { id } });
};

const deleteRecord = (id: number) => {
    console.log(`Delete record with id: ${id}`);
};

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

</script>

<template>
    <ProgressSpinner v-if="loading" />
    <div v-else class="schedule">
        <DataTable :value="scheduleData">
            <Column field="id" header="ID" :style="{ width: '10rem' }"></Column>
            <Column field="status" header="Status" :style="{ width: '7rem' }"></Column>
            <Column field="name" header="Name" :style="{ width: '10rem' }"></Column>
            <Column field="email" header="Email" :style="{ width: '10rem' }"></Column>
            <Column field="phoneDDD" header="Phone DDD" :style="{ width: '7rem' }"></Column>
            <Column field="phone" header="Phone" :style="{ width: '10rem' }"></Column>
            <Column field="motorcycleId" header="Motorcycle Plate" :style="{ width: '10rem' }"></Column>
            <Column field="scheduleDate" header="Schedule Date"></Column>
            <Column header="Actions" :style="{ width: '10rem' }">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                        @click="editRecord(slotProps.data.id)" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger"
                        @click="deleteRecord(slotProps.data.id)" />
                </template>
            </Column>
        </DataTable>


    </div>

</template>

<style></style>