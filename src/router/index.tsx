import { Route, Routes } from 'react-router-dom'

// Layouts
import BaseLayout from '@layouts/BaseLayout'

// Pages
import IndexPage from '@pages/index'
import NotFoundPage from '@pages/404'

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        <Route path='/' element={<IndexPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
