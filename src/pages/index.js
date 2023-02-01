import { ListCharacters } from "../components/home/listCharacters";
import { SectionHero } from "../components/home/sectionHero";
import { PageTitle } from "../components/PageTitle";
import { getPrismicClient } from "../service/prismic";

export default function Home({dataPage, characters}) {
  return (
    <>
      <PageTitle
        title="What If? - CodeBoost" 
        description="Um projeto desenvolvido no curso CoodeBoost"
      />
      <SectionHero data={dataPage}/>
      <ListCharacters data={characters} />
    </>
  )
}


export const getStaticProps = async () => {
  
  const prismic = getPrismicClient();
  const contentsPages = await prismic.getSingle("home");
  const characters = await prismic.getAllByType("character");

  return {
    props: {
      dataPage: contentsPages.data,
      characters,
    },
    revalidate: 60,
  }
}