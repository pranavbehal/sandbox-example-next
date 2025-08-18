import Image from "next/image";

export const metadata = {
  title: "Walruses Page",
};

export default function WalrusesPage() {
  return (
    <main>
      <h1>Walruses</h1>
      <p>
        Welcome to the walruses page! Walruses are large marine mammals
        characterized by prominent tusks, whiskers, and a bulky body. They are
        found in the Arctic seas of the Northern Hemisphere.
      </p>

      <h2>Here are some amazing walruses!</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/22/Male_Walrus.jpg"
          alt="Male Walrus"
          width={300}
          height={300}
          style={{ borderRadius: "8px" }}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Walrus_in_Franz_Josef_Land.jpg"
          alt="Walrus in Franz Josef Land"
          width={300}
          height={300}
          style={{ borderRadius: "8px" }}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/d/da/Pacific_Walrus_-_Alaska.jpg"
          alt="Pacific Walrus - Alaska"
          width={300}
          height={300}
          style={{ borderRadius: "8px" }}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/Walrus_at_the_Alaska_SeaLife_Center.jpg"
          alt="Walrus at the Alaska SeaLife Center"
          width={300}
          height={300}
          style={{ borderRadius: "8px" }}
        />
      </div>
    </main>
  );
}
