<template>
  <header class="bg-purple-600 shadow">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/admin" class="text-xl font-bold text-white">
              <font-awesome-icon icon="user-shield" class="mr-2" />
              Admin Portal
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/admin/users"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-purple-200"
            >
              <font-awesome-icon icon="users" class="mr-1" />
              Users
            </router-link>
            <router-link
              to="/admin/settings"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-purple-200"
            >
              <font-awesome-icon icon="cog" class="mr-1" />
              Settings
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <router-link to="/" class="p-2 rounded-md text-white hover:text-purple-200">
            <font-awesome-icon icon="sign-out-alt" />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Component logic here
</script>
