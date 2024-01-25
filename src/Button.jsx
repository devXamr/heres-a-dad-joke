import {useState} from "react";

export default function Button({text, actionFucn}){



    return <div className=' ml-14 mr-14 border-black border-1 rounded-3xl bg-white text-center pt-2 pb-2 text-xl font-semibold cursor-pointer mt-5 hover:bg-black hover:text-white duration-300 ease-in hover:border-white drop-shadow-md pl-3 pr-3' onClick={actionFucn}>
        <div>
            {text}
        </div>
    </div>
}