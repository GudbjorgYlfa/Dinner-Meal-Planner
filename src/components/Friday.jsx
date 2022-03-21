import React from 'react'

import menu from './menu.json';
import './MenuTable.css';
import NavBar from './NavBar';

function Friday() {
    return (
        <div>
        <NavBar />
            Friday Menu
            <br/><br/>

            {
       menu.map(record => {
        return(
          record.week.filter(week => week.weekday === "Friday")
          .map(week => {
            return (
              <div className= "box" key={week.weekday}>
                <strong>{week.weekday}</strong><br/>

                {
                  week.mealtype.map(mealtype => {
                    return(
                      <div key ={mealtype.mealid}>
                        {mealtype.name} - {mealtype.calorie}
                        <table id="menuitems">
                          <tr>
                            <th>Item</th>
                            <th>Add Item</th>
                          </tr>
                        {
                          mealtype.menuitems.map(mealitem =>{
                            return(
                                <tr>
                                  <td>{mealitem.food}</td>
                                  <td><button id="addItem">+</button></td>
                                </tr>
                            )
                          })
                        }
                        </table>
                      </div>
                    )
                  })
                }

              </div>
            )
          })
        )
      })
      
    }
        </div>
    );
}

export default Friday;
