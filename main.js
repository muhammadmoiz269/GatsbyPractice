
// const {query} = require("../y/src/pages/index")
const contentful = require ("contentful-management")




async function Connect ()
{
    let client = await contentful.createClient({
        accessToken:"CFPAT-iCOPAww423loSHB_i1p9Dh-9tFo4X4JbxKTSR_KllOg"
    })
    let space = await client.getSpace("3ijjvrm4b5lg")
    return await space.getEnvironment("master")
   
}
async function UpdateCard(env, CardId)
{
    let card = await env.getEntry(CardId)
    card.fields.blogName['en-US'] = "stocks"
    card.unpublish()
   
  
  
}

export async function DeleteCard(Id){
let env = await Connect()
await UpdateCard(env, Id)
console.log(env)
}