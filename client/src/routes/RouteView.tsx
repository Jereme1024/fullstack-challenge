import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage'
import NotFound404 from '../pages/NotFound404'

const ArticlesPage = React.lazy(() => import('../pages/ArticlesPage'))
const ArticlePage = React.lazy(() => import('../pages/ArticlePage'))
const PostArticlePage = React.lazy(() => import('../pages/PostArticlePage'))

export default function RouterView() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/postArticle" element={<PostArticlePage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Suspense>
  )
}
