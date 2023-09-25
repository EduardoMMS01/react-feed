import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'

export const Post = ({ author, publishedAt, content }) => {

    const [comments, setComments] = useState([
        "Post muito bacana!!"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt)


    function handleNewComments (e) {
        e.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange () {
        setNewCommentText(event.target.value)
    }

    function deleteComment (commentToDelete) {
        const commentsWithoutDeletedOne = commentToDele.filter(comment => {
            comments !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

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
                            <p key={item.content}>{item.content}</p>
                        )
                    } else if (item.type === "link") {
                        return (
                            <p key={item.content}><a href={item.anchor} target='_blank'>{item.content}</a></p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleNewComments} className={styles.commentForm}>
                <textarea 
                    onChange={handleNewCommentChange} 
                    value={newCommentText} name='comment' 
                    placeholder='Deixe seu comentário :)' 
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(item => {
                    return (
                        <Comment key={item} content={item} onDeleteComment={deleteComment}/>
                    )
                })}
            </div>
        </article>
    )
}