<template>
    <UHeader>
        <template #title>
            <SvgoLogo class="h-6 w-auto" />
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
            <UColorModeButton />
        </template>

        <template #body>
            <UNavigationMenu
                :items="items"
                orientation="vertical"
                class="-mx-2.5"
            />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
const items = computed(() => [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "Secondary",
        to: "/secondary"
    },
    {
        label: "Repository",
        to: "https://github.com/NicolaSpadari/nuxt-oxc-biome",
        target: "_blank"
    }
]);
</script>
