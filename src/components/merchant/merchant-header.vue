<template>
  <header class="bg-green-600 shadow">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/merchant" class="text-xl font-bold text-white">
              <font-awesome-icon icon="store" class="mr-2" />
              Merchant Portal
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/merchant/products"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-green-200"
            >
              <font-awesome-icon icon="box" class="mr-1" />
              Products
            </router-link>
            <router-link
              to="/merchant/orders"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-green-200"
            >
              <font-awesome-icon icon="shopping-cart" class="mr-1" />
              Orders
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <router-link to="/" class="p-2 rounded-md text-white hover:text-green-200">
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
