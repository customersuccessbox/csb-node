import axios from 'axios'

let Transport = function (endpoint, apiKey) {
  this.http = axios.create({
    baseURL: endpoint,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + apiKey
    }
  })
}

Transport.prototype.post = function (uri, data) {
  return this.http.post(uri, data)
}

export default Transport
