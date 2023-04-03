import { useState } from "react";

function C1(ozellikler) {

   const [sayi, sayiGuncelle] = useState(ozellikler.deger)

   function arttir(){
      sayiGuncelle(onceki => onceki + ozellikler.artis )
   }

   return(
      <p>Ben C1! Sayı: {sayi} <button onClick={arttir} >Arttır</button> </p>

   )
}
export default C1;