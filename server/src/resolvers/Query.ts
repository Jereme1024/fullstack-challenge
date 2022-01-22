import { db } from '../utils/orbitDb'

const Query = {
  articles: async (parent: any, args: any, context: any) => {
    const articles = db.get('')
    return articles
  },
}
export default Query
