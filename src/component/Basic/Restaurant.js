import React from "react";
import "./style.css";
import Menu from "./menuApi.js";
import ManuCard from "./Manucard";

const Restaurant = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const filterItem = (category)=>{
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
          <button className="btn-group__item" onClick={()=>filterItem("Desserts")}>Desserts</button>
          <button className="btn-group__item" onClick={()=>filterItem("Lunch")}>Lunch</button>
          <button className="btn-group__item" onClick={()=>filterItem("Dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>  
        </div>
      </nav>

      <ManuCard menuData={menuData}/>
    </>
  );
};

export default Restaurant;
