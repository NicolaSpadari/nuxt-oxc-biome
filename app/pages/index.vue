<template>
    <div class="mt-15">
        <ProseH1 class="text-center">
            Hello {{ app.name }}
        </ProseH1>
    </div>
</template>

<script lang="ts" setup>
const { app } = useAppConfig();
</script>