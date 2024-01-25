import {useState} from "react";
import axios from "axios";
import Button from "./Button.jsx";




export default function TextSection(){
    const [joke, setJoke] = useState('')

    async function func2(){
        await navigator.clipboard.writeText(joke)

    }

    async function func1(){
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        const newJoke = await res.data.joke
        setJoke(newJoke)
    }


    return  <>

        <div  className='bg-gray-100 flex w-6/12 ml-auto mr-auto flex-wrap h-60 border rounded-lg drop-shadow-md mt-52'>
         <div className='pl-10 pt-8 font-semibold text-2xl pr-10 object-contain text-gray-700'>
            {joke}


         </div>
        </div>
        <div className='flex justify-center'>
        <Button text='Generate Joke' actionFucn={func1}/>
        <Button text='Copy to Clipboard' actionFucn={func2}/>
        </div>
    </>

}