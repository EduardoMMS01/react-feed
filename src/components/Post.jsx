import styles from './Post.module.css'
import { Comment } from './Comment'

export const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/eduardomms01.png" />
                    <div className={styles.authorInfo}>
                        <strong>Eduardo Marinho</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <time title='18 de Setembro às 11:58h' dateTime='2023-09-18 11:58:00'>
                    Publicado há 1 hora
                </time>
            </header>

            <div className={styles.content}>
                <p>E ai pessoal!</p>
                <p>Este é mais um projeto que aprendi no curso Ignite da Rocketseat!</p>
                <p><a href="https://rocketseat.com.br">Site da Rocketeat</a></p>
                <p><a href="https://eduardomms01.github.io/dark-mode-presentation/">Meu portfólio completo</a></p>
            </div>

            <form className={styles.commentForm}>
                <textarea placeholder='Deixe seu comentário :)' />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}