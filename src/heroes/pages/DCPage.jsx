import { HeroList } from "../components"
export const DCPage = () => {
  return (
    <>
      <h1 className="flex justify-center my-6 font-bold text-2xl">DC Comics</h1>
      <HeroList publisher="DC Comics"></HeroList>
    </>
  )
}
