import React from 'react'

function RecipeIndex({alphaIndex}) {
    const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let num = 0;
    return (
      <div>
        {
          alpha.map(item=>{
            return(
              <div className='numBox' key={num++} >
                <h3 onClick={()=> alphaIndex(item)}>{item}</h3>
                {/* //onClick={()=>alphaIndex(item)} */}
             </div>
            )
          }
   
          )
        }
      </div>
    )
  }

export default RecipeIndex