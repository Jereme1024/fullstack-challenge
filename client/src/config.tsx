export const articleServerUrl =
  process.env.ARTICLE_SERVER_URL || 'http://localhost:9000'
export const authServerUrl =
  process.env.AUTH_SERVER_URL || 'http://localhost:8100'
export const anonymous = `Anonymous ${Math.floor(Math.random() * 100)}`
export const token = process.env.TOKEN || ''
export const user = {
  token,
  anonymous,
}
