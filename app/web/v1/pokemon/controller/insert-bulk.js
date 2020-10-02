import _ from 'lodash'
import elastic from '../../../../lib/elastic'

const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

//     [
//         { "index" : { "_index" : "<index>, "_type": <type> } },
//         { <obj 1> },
//         { "index" : { "_index" : "<index>", "_type": <type> } },
//         { <obj 2> }
//     ]
export default async (ctx) => {
    const body = _.flatten(ctx.request.body.map((value) => {
        return [
            { "index" : { "_index" : "pokemon", "_type": "type_pokemon" } },
            { ... value }
        ]
    }))
    return await elastic.bulk({
        refresh: true,
        body
    })
        .then((res) => ctx.ok(res))
        .catch(err => {
            console.log('asdasd', err)
            ctx.ok(`Error ${err.status}`)
        })
}