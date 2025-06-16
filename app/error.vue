<template>
    <Html class="scroll-smooth overflow-x-hidden">
        <Body class="antialiased font-sans">
            <UApp>
                <SiteHeader />

                <UMain>
                    <UError :error="props.error" />
                </UMain>
            </UApp>
        </Body>
    </Html>
</template>

<script lang="ts" setup>
import type { NuxtError } from "#app";

const props = defineProps<{
    error: NuxtError;
}>();
</script>
