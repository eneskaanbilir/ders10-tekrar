import { useState } from "react";
import Reklam from "./Reklam";


function App(ozellikler) {
   
   const [reklamAcik, reklamAcikGuncelle] = useState(true)


   function degistir(){
      reklamAcikGuncelle(oncek => !oncek)
   }
/*    if (ozellikler.baslik === 1) {
      return(
         <h2>App 1</h2>
      )
   }

   if (ozellikler.baslik === 2) {
      return(
         <h2>App 2</h2>
      )
   } */

   return(
      <>
         { ozellikler.baslik === 1 &&  
         <div>
            <h2>App 1</h2><button onClick={degistir} >Reklam Aç-Kapa</button>
         </div>
          }
         { ozellikler.baslik === 2 &&  <h2>App 2</h2>}
         {reklamAcik === true &&  <Reklam />}
      </>
   )
}

export default App;