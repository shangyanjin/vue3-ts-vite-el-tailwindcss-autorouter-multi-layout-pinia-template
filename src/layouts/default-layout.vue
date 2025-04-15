<template>
  <div class="min-h-screen flex flex-col">
    <default-header />
    <main class="flex-grow">
      <router-view />
    </main>
    <default-footer />
    <theme-switcher class="fixed bottom-4 right-4" />
    <notification-list />
  </div>
</template>

<script setup lang="ts">
import DefaultHeader from '@/components/default/default-header.vue'
import DefaultFooter from '@/components/default/default-footer.vue'
import ThemeSwitcher from '@/components/common/theme-switcher.vue'
import NotificationList from '@/components/common/notification-list.vue'
</script>
