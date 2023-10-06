import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, MarvelPage, Search, Heroe } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />}/>
        <Route path="dc" element={<DCPage />}/>

        <Route path="search" element={<Search />} />
        <Route path="heroe/:id" element={<Heroe />} />
        

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}
