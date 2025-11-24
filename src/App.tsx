import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import ProblemStatement from './components/sections/ProblemStatement'
import SolutionOverview from './components/sections/SolutionOverview'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <SolutionOverview />
      </main>
    </div>
  )
}

export default App

