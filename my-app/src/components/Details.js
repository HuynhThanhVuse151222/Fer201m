import { useState } from "react";
import {  default as Modal } from "./Modal";

//  const useModal = () => {
//     const [isShowing, setIsShowing] = useState(false);
//     function toggle(){
//         setIsShowing(!isShowing);
//     }
//     return{
//         isShowing,
//         toggle,
//     }
//  };
//  export default useModal;



function Details () {
 
    const[openDetails, setOpenDetails] = useState(false)
return(
    <div className="Details">
        <button className="openModal"
         onClick={() => 
         {setOpenDetails(true);}}>
            Open
            </button>
        {openDetails && < Modal closeModal = {setOpenDetails}/>}
    </div>
);
}
export default Details;