import React from 'react';
import Form from '../components/Form';
import Link from 'next/link';

const Ajouter = () => {
  return (
    <div className='mt-10 '>
      <Link
        className=" font-extrabold"
        href="/"
      >
        Back
      </Link>
      <Form />
    </div>
  );
};

export default Ajouter;
