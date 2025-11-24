import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import ProblemStatement from './components/sections/ProblemStatement'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
      </main>
    </div>
  )
}

export default App

