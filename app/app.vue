<template>
    <Html class="min-h-[100dvh] scroll-smooth overflow-x-hidden">
        <Body class="antialiased font-sans">
            <UApp>
                <SiteHeader />

                <UMain>
                    <NuxtLayout>
                        <NuxtPage />
                    </NuxtLayout>
                </UMain>

                <SiteFooter />
            </UApp>
        </Body>
    </Html>
</template>
