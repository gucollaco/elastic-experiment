import elastic from '../../../../lib/elastic'

export default async (ctx) => {
    return await elastic.index({
            index: "pokemon",
            type: "type_pokemon",
            body: ctx.request.body
        })
        .then(() => ctx.ok('Data added!'))
        .catch(err => ctx.ok(`Error ${err.status}`))
}