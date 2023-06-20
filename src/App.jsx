import { useEffect, useState } from "react";
import Category from "./component/Category";
import data from "./data";
import Menu from "./component/Menus";
import Title from "./component/Title";

function App() {
  const [menus, setMenus] = useState(data) ;
  const [showMenus,setShowMenus] = useState(menus);

  const uniqueCategories = ['all', ...new Set(menus.map(item=>item.category))];
  




  const filterCategory = (category) => {
    const newMenu = menus.filter(item => item.category ===category);
    if(category === 'all'){
      return setShowMenus(menus);
    }
    setShowMenus(newMenu);
  }
  

  return (
  <main>
      <section className="menu">
          <Title title='Our Menu' />
          <Category uniqueCategories={uniqueCategories} filterCategory={filterCategory}/>
          <Menu showMenus={showMenus} />

      </section>
  </main>
  
  )
  
}

export default App
