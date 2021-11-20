import Image from 'next/image';

import { FaTimes } from 'react-icons/fa';

interface props {
  src: string,
  alt: string
}

export const ImageSection = ({src = '/yo.jpg', alt = 'hola'}: props) => {
  return (
    <>
      <div>
        <Image src={src} alt={alt} layout="fill" />
        <button><FaTimes /></button>
      </div>
    </>
  );
};
