import React from 'react'
import ReactDOM from 'react-dom';
import menu from './menu.json';
import './MenuTable.css';
import './MealSummery.css';

function MealSummary() {

  return (
    <form id="formsummary">
      <div class="displaymenu">
       <h1 style={{color:"Blue"}}> Weekly Menu Selected:</h1>
        {
        menu.map(record => {
          return(
            record.week.filter(week => week.weekday !== "")
            .map(week => {
              return (
                <div className= "box1" key={week.weekday}>
                   <br/>
                  <strong style={{color:"green", fontSize:"15px"}}>{week.weekday} - {week.weekdate}</strong>
                 
                  {
                    week.mealtype.map(mealtype => {
                      return(
                        <div key={mealtype.mealid}>
                         <strong>{mealtype.name} </strong> 
                          <table id="menuitems1">

                            <thead>
                              <tr id= "trrow">
                                {/* <th>selected Item</th> */}
                              </tr>
                              
                            </thead>
                          {
                            mealtype.menuitems.filter(mealitems => mealitems.menuflag === true)
                            .map(mealitem =>{
                              return(
                                <tbody>
                                  <tr>
                                    <td id="mealidnone">{mealitem.id}</td>
                                    <td>{mealitem.food}</td>
                                   
                                  </tr>
                                 
                                </tbody>
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
    </form>
  );
}

export default MealSummary;