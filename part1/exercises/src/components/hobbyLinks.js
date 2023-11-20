 
 export default function HobbyLinks (){
HobbyLinks = ["https://www.ultimate-guitar.com/","https://www.purehockey.com/"]
return(
    <div>
        <p>Hobby List</p>
      <a href={HobbyLinks[0]}>Where I get my guitar tabs</a>
      <br />
      <a href={HobbyLinks[1]}>Where I get my hockey equipment</a>
    </div>
    
)
 }
 