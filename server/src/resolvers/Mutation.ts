import Article from './Article'
import { v4 as uuidV4 } from 'uuid'
import { db } from '../utils/orbitDb'

interface ArticleCreate {
  title: String
  content: String
}

const Mutation = {
  createArticle: async (
    _: any,
    { article: { title, content } }: { article: ArticleCreate },
    { user }: any
  ) => {
    const article: Article = {
      id: uuidV4(),
      author: user,
      title,
      content,
    }
    await db.put(article)
    return article
  },
}

export default Mutation
