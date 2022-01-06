import React,{useState} from "react";

const Tf = () =>{
    const [data,setData] = useState([
         " ",   "India" ,"SRILANKA","CHINA","Nepal"
 ]);

 console.log(data);
 
    return(
        <>
    <h3>hellow</h3>
   
     <select>
       {
           data.map((elem,id) =>{
               return(
                   <>
                        <option key = {id}>{elem}</option>
                        
                   </>
               )
           })
       }
    </select>
       <br/><br/>
       <input type="reset" value="reset"  onClick = {() => setData([" "])}/>
        </>
    )
}

export default Tf
