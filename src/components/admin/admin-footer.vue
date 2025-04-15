<template>
  <footer class="bg-purple-800">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <p class="text-purple-200">Admin Portal</p>
        <p class="text-purple-200">&copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.</p>
        <div class="flex space-x-4">
          <a href="#" class="text-purple-200 hover:text-white">
            <font-awesome-icon icon="question-circle" />
            <span class="ml-1">Help</span>
          </a>
          <a href="#" class="text-purple-200 hover:text-white">
            <font-awesome-icon icon="shield-alt" />
            <span class="ml-1">Privacy</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component logic here
</script>
