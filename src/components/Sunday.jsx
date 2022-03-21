import React from 'react'
import NavBar from './NavBar'
import Records from './sundaymenu.json';


function Sunday() {
    return (
        <div> 
        <NavBar />
            Sunday Menu

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
    
 </div>
    );
}

export default Sunday;
