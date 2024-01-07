<template>
    <h1>DashBoard</h1>
    <button @click="handleClick">DashBoard</button>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const handleClick = () => router.push({ path: "/Home" });
  </script>
  