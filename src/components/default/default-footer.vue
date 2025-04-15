<template>
  <footer class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">About Us</h3>
          <p class="text-gray-300">Your trusted platform for managing content and services.</p>
        </div>
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white">
                <font-awesome-icon icon="info-circle" class="mr-2" />
                About
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li class="text-gray-300">
              <font-awesome-icon icon="envelope" class="mr-2" />
              support@example.com
            </li>
            <li class="text-gray-300">
              <font-awesome-icon icon="phone" class="mr-2" />
              +1 234 567 890
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8">
        <p class="text-center text-gray-400">&copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component logic here
</script>
