import "./App.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <>
            <header className="h-[60px] bg-[#dfdfdf]">
               <div className="con mx-auto flex h-full w-[1200px]">
                 <nav className="menu-1 flex self-center">
                   <ul className="flex h-full">
                     <li>
                       <a href="/" className="block px-4 hover:text-[#afafaf]">메인</a>
                     </li>
                     <li>
                        <a href="#" className="block px-4 hover:text-[#afafaf]">어바웃</a>
                     </li>
                     <li>
                       <a href="#" className="block px-4 hover:text-[#afafaf]">연락처</a>
                     </li>
                   </ul>
                 </nav>
               </div>
             </header>
        </>
    );
}

export default App;