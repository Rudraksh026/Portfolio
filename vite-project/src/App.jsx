import { Header } from "./components/Header"
import "./App.css"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Skills } from "./components/Skills"
import { Project } from "./components/Project"
import { Footer } from "./components/Footer"

export default function App (){

    return (
      <>
        <Header />
        <About />
        <Experience />
        <Skills />
        <Project />
        <Footer/>
      </>
    )
}