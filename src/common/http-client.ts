import axios from 'axios'

const createClient = (baseURL: string) =>
  axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

const client = createClient('https://alert-synapse-371215.lm.r.appspot.com')

export { client }
