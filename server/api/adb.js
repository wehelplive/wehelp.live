import { getRecords } from "~~/components/airtable-demo"


export default async (req, res) => {
    try{
        const data = await getRecords();
        
        return { data: data};
    }catch(ex){
        return ex;
    }
}
