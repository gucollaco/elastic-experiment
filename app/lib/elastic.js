import elastic from 'elasticsearch'

const client = new elastic.Client({
    host: 'localhost:9200'
})

export default client
