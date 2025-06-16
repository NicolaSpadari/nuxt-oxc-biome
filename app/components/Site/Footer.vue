<template>
    <UFooter>
        <template #left>
            <p class="text-(--ui-text-muted) text-sm">
                Copyright © {{ new Date().getFullYear() }}
            </p>
        </template>

        <template #right>
            <UButton
                icon="lucide:github"
                color="neutral"
                variant="ghost"
                to="#"
            />
            <UButton
                icon="lucide:github"
                color="neutral"
                variant="ghost"
                to="#"
            />
            <UButton
                icon="lucide:github"
                color="neutral"
                variant="ghost"
                to="#"
            />
        </template>
    </UFooter>
</template>
