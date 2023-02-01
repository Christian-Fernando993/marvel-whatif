import Link from "next/link";
import { StyleCard } from "./styles";

import Image from "next/image";

export function CardCharacter({ image, name, slug }) {
  return (
    <StyleCard>
      <Link className="link" href={`/character/${slug}`}>
        <div className="image">
          <Image
            width={280}
            height={372}
            src={image}
            alt="Character"
          />
        </div>
        <div className="info">
          <div>
            <h3>{name}</h3>
            <span>Marvel Studios</span>
          </div>
          <span>What if</span>
        </div>
      </Link>
    </StyleCard>
  );
}
