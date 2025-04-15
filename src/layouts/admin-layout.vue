<template>
  <div class="min-h-screen flex flex-col">
    <admin-header />
    <main class="flex-grow">
      <router-view />
    </main>
    <admin-footer />
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '@/components/admin/admin-header.vue'
import AdminFooter from '@/components/admin/admin-footer.vue'
</script>
