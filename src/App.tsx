import './App.css'
import { Header } from './components/Header.tsx'
import { CategorySection } from './components/CategorySection.tsx'
import SaleSection from './components/SaleSection.tsx'
import MainSection from './components/MainSection.tsx'
import FoooterSection from './components/FooterSection.tsx'
import MailUpdates from './components/MailUpdates.tsx'

function App() {
  return (
    <>
      <Header />
      <CategorySection />
      <SaleSection />
      <MainSection />
      <MailUpdates />
      <FoooterSection />
    </>
  )
}

export default App
