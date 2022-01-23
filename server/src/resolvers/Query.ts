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
  article: async (_: any, { id }: any, context: any) => {
    const articles = db.get(id)
    if (articles.length === 0) {
      return {
        id,
        author: 'NotFound',
        title: 'NotFound',
        content: 'NotFound',
      }
    }
    return articles[0]
  },
}
export default Query
