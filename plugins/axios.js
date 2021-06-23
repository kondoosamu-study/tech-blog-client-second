import https from 'https'

export default function ({$axios}) {
  $axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  $axios.onRequest(config => {
    config.httpsAgent = new https.Agent({
      rejectUnauthorized: false
    });
  })
}