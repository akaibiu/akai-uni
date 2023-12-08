import config from '@/config'
import { getToken, setToken } from '@/utils/auth'

const instance = uni.request.defaults
instance.interceptors.request.use((config) => {
  const authHeader = { Authorization: `Bearer ${getToken()}` }
  config.header = Object.assign(config.header, authHeader)
  return config
})

instance.interceptors.response.use(({ data }) => {
  return data
}, (err) => {
  if (err.statusCode === 401 && err.data && err.data.detail === 'Invalid signature') {
    return refreshToken({
      refreshToken: getToken(true),
      success: () => instance.request(err.config),
      fail: () => Promise.reject(err)
    })
  }
  return Promise.reject(err)
})

const request = ({ method, url, data, headers, retry = true, success, fail }) => {
  headers = Object.assign(headers || {}, {})
  instance.request({
    method,
    url: `${config.apiUrl}/${url}`,
    data,
    headers,
    success: (res) => {
      const { data } = res
      success && success(data)
    },
    fail: (error) => {
      if (retry && error.statusCode === 401) {
        refreshToken({
          refreshToken: getToken(true),
          success: () => request({ method, url, data, headers, retry: false, success, fail }),
          fail: () => fail(error)
        })
      } else {
        fail && fail(error)
      }
    }
  })
}

const refreshToken = ({ refreshToken, success, fail }) => {
  return uni.request({
    method: 'POST',
    url: `${config.apiUrl}/refresh_token`,
    data: { refresh_token: refreshToken },
    success: ({ data }) => {
      setToken(data.access_token)
      success && success()
    },
    fail
  })
}

export default {
  request
}