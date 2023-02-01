import { ComponentPageNotFound } from "../components/pageNotFound";
import { PageTitle } from "../components/PageTitle";

export default function PageNotFound() {
  return (
    <>
      <PageTitle
        title="What If? - CodeBoost | Página não encontrada"
        description="Um projeto desenvolvido no curso CoodeBoost"
      />
      <ComponentPageNotFound />
    </>
  );
}
