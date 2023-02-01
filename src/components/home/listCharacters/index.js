import { StyleSectionCharacters, StyleListCharacters } from "./styles";
import { CardCharacter } from "../../../components/cardCharacter";
import Image from "next/image";

import { Container } from "../../../styles/global";
import LogoMarvel from "../../../assets/logo.svg";

export function ListCharacters({ data }) {
    console.log(data.image_character)
  return (
    <StyleSectionCharacters>
      <Container>
        <div className="title">
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>
          {data.map(character => {
            return (
              <CardCharacter
                key={character.id}
                slug={character.data.slug}
                image={character.data.image_character.url}
                name={character.data.name_character}
                
              />
            );
          })}

          <div className="marvel">
            <Image src={LogoMarvel} alt="Logo da Marvel Studios" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  );
}
