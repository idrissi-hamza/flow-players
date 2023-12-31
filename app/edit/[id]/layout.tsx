import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {' '}
      <header className="border-b  w-full container mx-auto">
        <div className="   w-full py-4 mx-auto flex justify-between items-center max-w-2xl">
          <div className="font-bold">
            <Link href={'/'}>Update joueur</Link>
          </div>
        </div>
      </header>
      <main className="max-w-2xl mx-auto">{children}</main>
    </div>
  );
}
