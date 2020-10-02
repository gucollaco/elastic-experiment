import elastic from '../../../../lib/elastic'

export default async (ctx) => {
    return await elastic.get({
            index: "pokemon",
            type: "type_pokemon",
            id: ctx.request.body.id
        })
        .then((res) => ctx.ok(res))
        .catch(err => ctx.ok(`Error ${err.status}`))
}