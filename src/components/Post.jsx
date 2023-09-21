import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export const Post = ({ author, publishedAt, content }) => {

    const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time>
                    {publishedDateFormat}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === "paragraph") {
                        return (
                            <p>{item.content}</p>
                        )
                    } else if (item.type === "link") {
                        return (
                            <p><a href={item.anchor} target='_blank'>{item.content}</a></p>
                        )
                    }
                })}
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