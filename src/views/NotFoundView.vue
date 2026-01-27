<template>
    <div class="not-found">
        <div class="card">
            <h1>404</h1>
            <p>Page not found<span v-if="route.path">: <code>{{ route.path }}</code></span></p>
            <div class="actions">
                <button @click="goBack">Go Back</button>
                <button @click="goHome">Go Home</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goHome = () => router.push('/')
const goBack = () => router.back()
</script>

<style scoped>
.not-found {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(180deg, #fafafa, #fff);
}
.card {
    max-width: 520px;
    width: 100%;
    text-align: center;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(16, 24, 40, 0.08);
    background: #ffffff;
}
h1 {
    font-size: 4.5rem;
    margin: 0 0 0.5rem;
    line-height: 1;
}
p {
    color: #556;
    margin: 0 0 1.25rem;
}
.actions {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
}
button {
    padding: 0.6rem 1rem;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    background: #f7f7f8;
    cursor: pointer;
    font-weight: 600;
}
button:hover { filter: brightness(0.98); }
</style>