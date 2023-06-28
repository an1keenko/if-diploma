import './App.css'
import { Header } from './components/Header.tsx'
import { Container } from './components/Container.tsx'
import { CategorySection } from './components/CategorySection.tsx'

function App() {
  return (
    <>
      <Container>
        <Header />
        <CategorySection />
      </Container>
    </>
  )
}

export default App
