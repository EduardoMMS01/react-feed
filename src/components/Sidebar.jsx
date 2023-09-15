import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'


export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/eduardomms01.png" />
                <strong>Eduardo Marinho</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}