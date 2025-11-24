import Header from './components/layout/Header'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <h1 className="text-4xl font-bold text-center py-20">
          Sunlight Analytics
        </h1>
        <p className="text-center text-gray-400">
          AI-Powered Solar Operations Platform
        </p>
      </main>
    </div>
  )
}

export default App

