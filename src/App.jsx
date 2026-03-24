import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeOffer from './components/WhatWeOffer'
import Problem from './components/Problem'
import Scenario from './components/Scenario'
import ValueProposition from './components/ValueProposition'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Scenario />
        <ValueProposition />
        <Faq />
        <WhatWeOffer />
        <Cta />
        <WhyUs />
        <Team />
      </main>
      <Footer />
    </>
  )
}

export default App