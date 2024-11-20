
import { defineStore } from 'pinia';
import { ref } from 'vue'
import { login } from "@/api/user.js";
import { localStorageSet } from '@/utils/localstorage.js'

import router from '@/router/index.js'

export const useStore = defineStore('main', () => {
    const token = ref("")
    const userLogin = (data) => {
        login(data).then((res) => {
            console.log(res)
            token.value = res.data.token
            localStorageSet('token', token.value)
            router.push({
                name: "home",
                query: {
                    projectId: "123",
                    reportId: "456",
                },
            });
        }).catch((err) => {
            console.log(err)
        })
    }
    return { token, userLogin }
})  