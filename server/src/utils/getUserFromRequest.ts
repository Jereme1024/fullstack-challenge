const isAnonymous = (name: string) => {
  return name?.indexOf('Anonymous') === 0
}

const getUserFromToken = (token: string) => {
  if (process.env.NODE_ENV === 'dev') {
    const prefix = 'Bearer '
    const isPrefix = token.indexOf(prefix) === 0
    const jwt = isPrefix ? token.slice(prefix.length) : ''
    // console.log({ user: jwt, token })
    return jwt
  }
  return 'FIXME: skip auth'
}

export default function getUserFromRequest({ req }: any) {
  let user = 'Anonymous -1'
  const token = req.headers.authorization || ''
  const anonymous = req.headers.anonymous || ''
  // if: token
  const userFromToken = getUserFromToken(token)
  if (userFromToken) {
    user = userFromToken
  } else if (isAnonymous(anonymous)) {
    user = anonymous
  }
  return { user, req }
}
