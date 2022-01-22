import { db } from '../utils/orbitDb'

interface Pagination {
  skip: number
  limit: number
}

const Query = {
  articles: async (_: any, { skip, limit }: Pagination, context: any) => {
    const articles = db.get('')
    articles.reverse()
    const result = {
      data: [],
      total: articles.length,
    }

    if (skip) {
      articles.splice(0, skip)
    }

    if (limit) {
      result.data = articles.slice(0, limit)
    } else {
      result.data = articles
    }

    return result
  },
}
export default Query
