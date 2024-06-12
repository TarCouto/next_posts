'use client'
import styles from './Sidebar.module.css';
import { PencilLine} from "phosphor-react";
import { Avatar } from './Avatar';

export function SideBar(){
    return(
            <aside className={styles.sidebar}>
                <img className={styles.cover} src='https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'/> 
                
                <div className={styles.profile}>
                    <Avatar src="https://github.com/TarCouto.png"/>
                    <strong>Tarcisio</strong>
                    <span>Dev-Front-End</span>  
                </div>

                <footer>
                    <a href='#'>
                        <PencilLine size={20} />
                        Editar o Perfil
                    </a>
                </footer>
        
            </aside>
    )
}