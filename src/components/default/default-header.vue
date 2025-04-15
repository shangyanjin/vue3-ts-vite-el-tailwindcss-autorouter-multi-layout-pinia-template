<template>
  <header class="bg-white shadow">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-xl font-bold text-gray-800">
              <font-awesome-icon icon="home" class="mr-2" />
              Default Portal
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/about"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              <font-awesome-icon icon="info-circle" class="mr-1" />
              About
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <button class="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none">
            <font-awesome-icon icon="user" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Component logic here
</script>
