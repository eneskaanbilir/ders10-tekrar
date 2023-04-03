function App() {

   const kisiler = [
      {adSoyad:"Esra Yılmaz",foto:"https://randomuser.me/api/portraits/women/12.jpg",tel:"+90 543 616 9003",},
      {adSoyad:"Nedim Yılmaz",foto:"https://randomuser.me/api/portraits/men/70.jpg",tel:"+90 543 616 9033",},
      {adSoyad:"Kaan Genç",foto:"https://randomuser.me/api/portraits/men/75.jpg",tel:"+90 543 616 9203",}
   ]

   return(
      <section className="container">
         <h1>Adres Defteri</h1>

         <div className="row">

            {
               kisiler.map( (eleman)=>{
                  return(
                     
            <div className="col-md-4">
            <img src={eleman.foto} alt="" />
            <p>{eleman.adSoyad}</p>
            <p>{eleman.tel}</p>
         </div>
                  )
               } )
            }


         </div>
      </section>
   )
}
export default App;