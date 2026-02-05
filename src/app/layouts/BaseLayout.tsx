// app/layouts/BaseLayout.tsx

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'

/**
 * Базовый layout приложения
 * Содержит общие элементы для всех страниц: header, footer и т.д.
 */
export const BaseLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      
      <main className="app-layout__content">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer можно добавить позже */}
      {/* <Footer /> */}
    </div>
  )
}

/**
 * Loader для страниц при lazy loading
 */
const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader__spinner" />
    <p>Загрузка страницы...</p>
  </div>
)
