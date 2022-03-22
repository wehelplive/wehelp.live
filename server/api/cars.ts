import type {IncomingMessage, ServerResponse} from "http"
import * as url from "url";
export default async (req: IncomingMessage, res: ServerResponse) => {
    
    const apiKey = 'keySAqbxhxOPTQxya'
    const apiUrl = `https://api.airtable.com/v0/app5FuD1YnKgDpJJz/Cars?api_key=${apiKey}`
    const cars = '';
    let data = {data: [{data: ""}]}

    if(cars){
        data = await $fetch (apiUrl)
    }
    res.write(JSON.stringify(data));
    res.end();
}