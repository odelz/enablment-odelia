'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const numberString = randomNumber.toString();
  const handleButtonClick = (userid: string) => {
    router.push(`/users/${userid}`);
  };

  return (
    <main className={styles.main}>
<button className={styles.button} onClick={() => handleButtonClick(numberString)}>Take Me To a Random User</button>
    </main>
  )
}
