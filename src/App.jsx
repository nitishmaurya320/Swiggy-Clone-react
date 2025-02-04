import Header from "./Components/Header.jsx";
import Category from "./Components/Category.jsx";
import TopRest from "./Components/TopRest.jsx";
import RestCat from "./Components/RestCat.jsx";
import { hello } from "./Components/test1.jsx";

const App=()=>{
  return (
    <>
    <Header/>
    <Category/>
    <TopRest/>
    <RestCat/>
    <div>{hello()}</div>
    </>
  )
}

export default App;