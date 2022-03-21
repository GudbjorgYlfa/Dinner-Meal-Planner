import React from 'react'
import NavBar from './NavBar'
import Records from './mondaymenu.json';

function Monday() {
 
  return (
    <div>Monday Menu
         
      <br/><br/>
    {
      Records.map(record => {
        return(
          <div className= "box" key={record.id}>
            <strong>{record.name}</strong><br/>
           
            {record.Type.map(data =>{
              return(
                <div key ={record.id}>
                {data.food}
                </div>
              );
            })}
            </div>
        );
      })
    }
    <NavBar />
    </div>
  );
}

export default Monday;