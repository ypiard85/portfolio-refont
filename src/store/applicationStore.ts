import { defineStore } from 'pinia'
import {ref, toRef} from "vue";

const languageStorage : string = localStorage.getItem("lang");

export const useApplicationStore = defineStore('application', () => {
    const language : any = ref<string>(languageStorage || 'fr')

    function updateLanguage (lang:any) {
        language.value = lang
        localStorage.setItem("lang", lang)
    }

    return {language, updateLanguage}

})