import _ from 'lodash'
import elastic from '../../../../lib/elastic'

const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

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
        .catch(err => ctx.ok(`Error ${err.status}`))
}
