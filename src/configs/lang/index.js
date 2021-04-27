import ptBR from "./pt-BR";
const defaultLang = ptBR

const resolve = (path, obj)=>{
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : null
    }, obj || self)
}

export const translate = (props, lang = defaultLang )=>{
    return resolve(props, lang)
}