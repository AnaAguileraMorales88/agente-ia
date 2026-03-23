import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Scenario from './components/Scenario'
import ValueProposition from './components/ValueProposition'
import WhyUs from './components/WhyUs'
import UseCases from './components/UseCases'
import Faq from './components/Faq'
import Cta from './components/Cta'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Scenario />
        <ValueProposition />
        <WhyUs />
        <UseCases />
        <Faq />
        <Cta />
      </main>
    </>
  )
}

export default App