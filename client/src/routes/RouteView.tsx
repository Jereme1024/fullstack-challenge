import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage'
import NotFound404 from '../pages/NotFound404'

export default function RouterView() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        {/* <Route path="/" element={<TodoStatePage />} /> */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Suspense>
  )
}
