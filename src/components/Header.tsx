import styles from './Header.module.css';
import Image from 'next/image';

export function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/ignitelogo.svg"
                alt="Logo do Next.js"
                width={150}
                height={50}
            />
        </header>
    );
}
