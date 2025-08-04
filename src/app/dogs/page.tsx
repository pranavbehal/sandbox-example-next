import Image from 'next/image';

export const metadata = {
  title: 'Dogs Page',
};

export default function DogsPage() {
  return (
    <main>
      <h1>Dogs</h1>
      <p>Welcome to the dogs page! Dogs are domesticated mammals, not obligate carnivores who need to eat meat to survive, but they thrive on a vegetarian diet. They are known for their loyalty and companionship.</p>

      <h2>Here are some lovely dogs!</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <Image src="https://images.dog.ceo/breeds/retriever-golden/n02099601_7942.jpg" alt="Golden Retriever" width={300} height={300} style={{ borderRadius: '8px' }} />
        <Image src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="Afghan Hound" width={300} height={300} style={{ borderRadius: '8px' }} />
        <Image src="https://images.dog.ceo/breeds/rottweiler/n02106550_10593.jpg" alt="Rottweiler" width={300} height={300} style={{ borderRadius: '8px' }} />
        <Image src="https://images.dog.ceo/breeds/pug/n02110958_15377.jpg" alt="Pug" width={300} height={300} style={{ borderRadius: '8px' }} />
      </div>
    </main>
  );
}cat: src/app/dogs/page.tsx: No such file or directory
