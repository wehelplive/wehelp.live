import Airtable from 'airtable'

var base = new Airtable({ apiKey: "keyQ54SEzABIZEm9F" }).base(
  "appv6M4U4ckXcHzhU"
);

const table = base('Tasks');    
const getRecords = async () => {
    const records = await table.select().firstPage();
    return records
}

export{getRecords}