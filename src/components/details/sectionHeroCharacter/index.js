import { SectionCharacterSyle } from "./style";

import { Container } from "../../../styles/global";
import Image from "next/image";

export function SectionHeroCharacter({ data }) {
  return (
    <SectionCharacterSyle>
      <Container>
        <div className="image">
          <Image
            width={486} 
            height={631} 
            src={data.image_character.url} 
            alt="Character" />
        </div>
        <div className="info">
          <span>A História</span>
          <div>
            <h1>{data.name_character}</h1>
            <p>{data.description_character[0].text}</p>
          </div>
        </div>
      </Container>
    </SectionCharacterSyle>
  );
}
