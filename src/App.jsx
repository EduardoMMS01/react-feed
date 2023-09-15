import "./global.css"
import styles from './components/App.module.css'

import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Eduardo Marinho" content="Fala pessoal!" />
        </main>
      </div>
    </>
  )
}