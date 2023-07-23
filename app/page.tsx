import Image from 'next/image';
import Table from './components/Table';
import Header from './components/Header';
import { getPlayers } from '@/lib/players';


export default async function Home() {
  const data = await getPlayers();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Table players={data} />
    </div>
  );
}
