import Link from 'next/link';
import Image from 'next/image';
import styles from './styles';

interface IProps {
  username: string
  name: string
  profilePicture: string
  bio: string
}

export const AutocompleteItem = ({ username, name, profilePicture, bio }: IProps) => {
  return (
    <>
      <li>
        <Link href={`/${username}`}>
          <a>
            <section>
              <Image src={profilePicture} alt={name} layout="fill" objectFit="cover" />
            </section>
            <div>
              <h3>{name}</h3>
              <p>@{username}</p>
              <span>{bio}</span>
            </div>
          </a>
        </Link>
      </li>

      <style jsx>{styles}</style>
    </>
  );
};
