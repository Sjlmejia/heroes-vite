
import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <h1 className="flex justify-center my-6 font-bold text-2xl">Marvel Page</h1>
      <HeroList publisher="Marvel Comics"></HeroList>
    </>
  )
}
