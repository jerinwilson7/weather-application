import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CityPage, HomePage } from "../Pages"

export const Navigation = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/city-details" element={<CityPage></CityPage>}/>
    </Routes>
    </BrowserRouter>
  )
}
