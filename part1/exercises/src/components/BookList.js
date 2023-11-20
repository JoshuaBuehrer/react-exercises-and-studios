import React from "react";


export default function BookList() {
   let pageTitle = "My Book List";
   let book1 = "https://mpd-biblio-covers.imgix.net/9781466804128.jpg";
   let book2 = "https://i.pinimg.com/474x/82/37/62/823762a36d630c57acd48f57d238680d.jpg";
   let book3 = "https://mcgeetraveltales.files.wordpress.com/2017/11/jurassic-park-michael-crichton-book-cover.jpg?w=1004";

   return (
      <div>
         <h3 id="pageTitle">{pageTitle}</h3>
         <img width={200} src={book1} alt="Moby Dick" />
         <img width={200} src={book2} alt="Dracula" />
         <img width={200} src={book3} alt="jurassic park" />
      </div>      
   );
}