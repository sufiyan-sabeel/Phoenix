import Hero from '../sections/Hero'
import Capabilities from '../sections/Capabilities'
import Termux from '../sections/Termux'
import Features from '../sections/Features'
import Showcase from '../sections/Showcase'
import Architecture from '../sections/Architecture'
import Roadmap from '../sections/Roadmap'
import OpenSource from '../sections/OpenSource'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Termux />
      <Features />
      <Showcase />
      <Architecture />
      <Roadmap />
      <OpenSource />
      <FinalCTA />
    </>
  )
}
