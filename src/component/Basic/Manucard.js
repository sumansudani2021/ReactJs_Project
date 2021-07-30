import React from "react";


const Manucard = ({menuData}) => {
  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem)=>{
      const {id, name, category, image,price}=curElem;
        return(
            <>
            <div className="card-container" key={curElem.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                {/* <span className="card-description subtle">{curElem.description}</span> */}
              </div>
              <img src={image}alt="Food Image" className="card-media"/>
                <div className="card-read">{price}</div>
              <span className="card-tag subtle">Order Now</span>        
            </div>
          </div>
          </>
        )
    })}
          </section>
    </>
  );
};

export default Manucard;
