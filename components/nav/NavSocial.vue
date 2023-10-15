<template>
    <SocialChat :attendants="attendants">
        <template v-slot:header>
            <p style="font-weight: 500">
                Click one of our team below to chat
            </p>
        </template>
        <template v-slot:button="{ open }">
            <span v-show="!open">Contact us</span>
            <span v-show="open">Close</span>
        </template>
        <template v-slot:footer>
            <small>
                Opening hours: 7am to 6pm
            </small>
        </template>
    </SocialChat>
</template>
  

<script setup>
import { SocialChat } from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'

const runtimeConfig = useRuntimeConfig()
const attendants = [
    {
        app: 'whatsapp',
        label: 'WhatsApp enquires',
        name: 'Charlie',
        number: runtimeConfig.public.number,
        avatar: {
            src: '/hudsonAvatar.png',
            alt: 'Hudson avatar'
        }
    },
    {
        app: 'messenger',
        label: 'Messenger enquires',
        name: 'Charlie',
        id: runtimeConfig.public.id,
        avatar: {
            src: '/hudsonAvatar.png',
            alt: 'Hudson avatar'
        }
    },
    {
        label: 'Email enquires',
        name: 'Charlie',
        href: 'mailto:muddypawspackadventures@gmail.com?subject=Website enquiries!',
        avatar: {
            src: '/hudsonAvatar.png',
            alt: 'Hudson avatar'
        }
    }
];
</script>