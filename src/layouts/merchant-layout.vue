<template>
  <div class="min-h-screen flex flex-col">
    <merchant-header />
    <main class="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <!-- Stats -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-blue-600 text-2xl">💰</span>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Total Sales</dt>
                  <dd class="text-lg font-medium text-gray-900">$23,456</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-blue-600 text-2xl">📦</span>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Orders</dt>
                  <dd class="text-lg font-medium text-gray-900">156</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-blue-600 text-2xl">⭐</span>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Rating</dt>
                  <dd class="text-lg font-medium text-gray-900">4.8/5.0</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-view></router-view>
    </main>
    <merchant-footer />
  </div>
</template>

<script setup lang="ts">
import MerchantHeader from '@/components/merchant/merchant-header.vue'
import MerchantFooter from '@/components/merchant/merchant-footer.vue'
</script>
