import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {' '}
      <header className="border-b  w-full ">
        <div className="   w-full p-4 mx-auto flex justify-between items-center ">
          <div className="font-bold">
            <Link href={'/'}>List des joueurs</Link>
          </div>
        </div>
      </header>
      <main className="max-w-2xl mx-auto">{children}</main>
    </div>
  );
}
