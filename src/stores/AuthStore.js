import { defineStore } from "pinia";
import axios from 'axios';
import { ref, computed } from "vue";

export const useAuthStore = defineStore('auth', ()=> {
    const token = ref('')
    const getToken = () => {
        // token.value = 'ASDFASDF';
        const response = axios.post('http://fake-api.test/GetToken',null,{headers: {}});
        response.then(r => {
            token.value = r.data.token;
            console.log(token);
            console.log(r);
        }).catch(err => {
            console.log(err);
        })
    };

    const getTokenAsync = computed(async()  => {
        try {
            const response = await axios.post('http://fake-api.test/GetToken', null, {headers: {}});
            token.value = response.data.token;
            console.log(response);
            console.log(token);
            return response.data.token;
        } catch (error) {
            return null;
        }
    })

    return { token, getTokenAsync, getToken}
})
