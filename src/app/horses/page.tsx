import Image from 'next/image';

export const metadata = {
  title: 'Horses Page',
};

export default function HorsesPage() {
  return (
    <main>
      <h1>Horses</h1>
      <p>Welcome to the horses page! Horses are majestic creatures, known for their strength, speed, and beauty. They have been domesticated for thousands of years and play a significant role in various cultures.</p>

      <h2>Here are some beautiful horses!</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Appaloosa_stallion.jpeg/640px-Appaloosa_stallion.jpeg" alt="Appaloosa Stallion" width={300} height={300} style={{ borderRadius: '8px' }} />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Percheron_stallion.jpg/640px-Percheron_stallion.jpg" alt="Percheron Stallion" width={300} height={300} style={{ borderRadius: '8px' }} />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Andalusian_horse_in_Pura_Raza_Espa%C3%B1ola_dressage.jpg/640px-Andalusian_horse_in_Pura_Raza_Espa%C3%B1ola_dressage.jpg" alt="Andalusian Horse" width={300} height={300} style={{ borderRadius: '8px' }} />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arabian_horse_in_Egypt.jpg/640px-Arabian_horse_in_Egypt.jpg" alt="Arabian Horse" width={300} height={300} style={{ borderRadius: '8px' }} />
      </div>
    </main>
  );
}