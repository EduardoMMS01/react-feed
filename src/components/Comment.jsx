import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/eduardomms01.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>Eduardo Marinho</strong>
                            <time title='18 de Setembro às 19:22:00' dateTime='2023-09-18 19:23:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bommm!! Adorei!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={18}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}