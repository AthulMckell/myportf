import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
      <About />
    </Layout>
  )
}