import Header from '../components/Header/header'
import AboutMe from '../components/About/about'
import Articles from '../components/Articles/articles'
import Projects from '../components/Projects/projects'
/*import Contact from '../components/Contact/contact'*/
import "boxicons/css/boxicons.min.css";


export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <AboutMe />
        <Articles />
        <Projects />
      </div>
    </main>
  );
}
