import Image from 'next/image'
import styles from '../../page.module.css'

export default function Zebras() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://en.wikipedia.org/wiki/Zebra"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/zebra.svg"
              alt="Zebra Logo"
              className={styles.vercelLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>Zebras</h1>
        <p>Zebras are several species of African equids (horse family) united by their distinctive black-and-white striped coats. There are three species of zebras: the plains zebra, the Grévy's zebra and the mountain zebra. Zebras' stripes come in different patterns, unique to each individual. Several theories have been proposed for the function of these stripes, with most evidence supporting them as a form of protection from biting flies. Zebras are generally social animals that live in small harems to large herds. Unlike their closest relatives, horses and donkeys, zebras have never been truly domesticated. </p>
      </div>
    </main>
  )
}cat: src/app/zebras/page.tsx: No such file or directory
