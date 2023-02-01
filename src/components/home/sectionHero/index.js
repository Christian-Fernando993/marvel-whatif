import { SectionHeroStyle, AreaSocial, ContextText } from "./styles";
import { Container } from "../../../styles/global";
import { PopupVideos } from "../../popupVideo";

import IconYoutube from "../../../assets/youtube.svg";
import IconInstagram from "../../../assets/instagram.svg";
import Image from "next/image";

const socials = [
  {
    name: "Youtube",
    url: "https://www.youtube.com/watch?v=zq-dKITdTsE&ab_channel=MarvelBrasil",
    icon: IconYoutube,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/whatif/",
    icon: IconInstagram,
  },
];

export function SectionHero({data}) {
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {socials.map(({ name, url, icon }) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target={"_blank"} rel="noreferrer">
                    <Image src={icon} alt={name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>
        <ContextText>
          <div className="left">
            <h3>{data.subtitle_hero}</h3>
            <h1>{data.title_hero}</h1>
            <p>{data.description_hero[0].text}</p>
            <a href={data.url_button.url}>
              {data.label_button}
            </a>
          </div>
          <PopupVideos label={data.label_trailer} thumb={data.thumbnail_trailer.url}/>
        </ContextText>
      </Container>
    </SectionHeroStyle>
  );
}
