
const createAllPages = require('../y/create-pages/pages')
exports.createPages = async ({ actions , graphql}) =>{
    await createAllPages( { actions, graphql})

}



