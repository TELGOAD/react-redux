import {init} from "./init"

 export  const   appReducer=(state=init, newData)=>{
    switch(newData.type){
        case "NAME_UPDATE": 
        state={
            ...state,
            name: newData.payload,
        }
        break;

        case "LOCATION_UPDATE":
            state={
                ...state,
                location: newData.payload,
            }
            break;
    } 
    return state;
}