import { StrictMode } from 'react'
import { RootLayout } from '@/app/layout'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout />
  </StrictMode>
)
