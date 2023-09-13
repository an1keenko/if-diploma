import './App.css'
import { Header } from './components/Header.tsx'
import { CategorySection } from './components/CategorySection.tsx'
import SaleSection from './components/SaleSection.tsx'
import MainSection from './components/MainSection.tsx'

function App() {
  return (
    <>
      <Header />
      <CategorySection />
      <SaleSection />
      <MainSection />
    </>
  )
}

export default App
