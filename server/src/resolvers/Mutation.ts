import Article from './Article'
import articles from './mock/articles'

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
      id: 'Unset',
      author: user,
      title,
      content,
    }
    articles.push(article)
    return article
  },
}

export default Mutation
