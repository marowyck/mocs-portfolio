import Header from '../components/Header/header'
import AboutMe from '../components/About/about'
import Articles from '../components/Articles/articles'
import Projects from '../components/Projects/projects'
import QeA from '../components/QeA/qea'
import Contact from '../components/Contact/contact'


export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <AboutMe />
        <Articles />
        <Projects />
        <QeA />
        <Contact />
      </div>
    </main>
  );
}
