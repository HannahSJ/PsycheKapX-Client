import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageContent from '../components/ArticleContent/PageContent'

const ContentPage = () => {
  return (
      <BrowserRouter>
        <PageContent />
      </BrowserRouter>
  )
}

export default ContentPage