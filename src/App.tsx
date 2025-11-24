import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import ProblemStatement from './components/sections/ProblemStatement'
import SolutionOverview from './components/sections/SolutionOverview'
import Features from './components/sections/Features'
import Impact from './components/sections/Impact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <SolutionOverview />
        <Features />
        <Impact />
      </main>
    </div>
  )
}

export default App

