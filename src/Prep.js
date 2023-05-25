import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Post from "./components/Post/Post";
import Mascota from "./components/Mascotas/Mascota";
import Mascotas from "./components/Mascotas/Mascotas";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/MascotaDetail/Detail";

function App() {
 return (
   <div className="App">
     <Post likes = {0}/>
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Mascotas />} />
         <Route path="/mascotas" element={<Mascotas />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;