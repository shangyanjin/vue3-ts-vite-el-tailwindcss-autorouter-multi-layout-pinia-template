<template>
  <footer class="bg-green-800">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <p class="text-green-200">Merchant Portal</p>
        <p class="text-green-200">&copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.</p>
        <div class="flex space-x-4">
          <a href="#" class="text-green-200 hover:text-white">
            <font-awesome-icon icon="question-circle" />
            <span class="ml-1">Support</span>
          </a>
          <a href="#" class="text-green-200 hover:text-white">
            <font-awesome-icon icon="book" />
            <span class="ml-1">Guide</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component logic here
</script>
