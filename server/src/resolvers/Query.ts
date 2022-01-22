import Article from './Article'
import articles from './mock/articles'

const Query = {
  articles: async (parent: any, args: any, context: any) => {
    return articles
  },
}
export default Query
