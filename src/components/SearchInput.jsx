import React from "react";

export default function SearchInput({handleSearch}){
    return(
        <div>
         <input onChange={e=>handleSearch(e.target.value)} type="text" />
        </div>
    )
}
