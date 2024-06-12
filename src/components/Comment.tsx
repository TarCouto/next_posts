import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment ({ content, onDeleteComment }: CommentProps){
    
    const [likeCount, setLikeCount] = useState<number>(0);

    function handleDeleteComment(){
        onDeleteComment(content);
        
    }

    function handleLikeComments(){
        setLikeCount(state => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/TarCouto.png" 
                alt=''
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tarcisio Couto</strong>
                            <time dateTime="2023-02-27 15:53">Cerca de uma hora atras</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComments}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}