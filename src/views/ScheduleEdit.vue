<template>
    <div>
        <h1>Edit Schedule</h1>
        <!-- Conteúdo do formulário de edição -->
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
    console.log(`Editing schedule with id: ${route.params.id}`);
});
</script>