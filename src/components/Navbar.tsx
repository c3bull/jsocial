import React from 'react'
import {jsocial} from "../assets/icons";
import SearchBar from "./SearchBar";

export default function Navbar() {

    return (
        <nav
            className='px-10 bg-white w-full flex items-center h-16 fixed top-0 z-30 border-b-2'>
            <div className='w-full flex items-center h-full mx-auto'>
                <img src={jsocial} className='h-full p-3'/>
                <SearchBar/>
            </div>
            <div className='flex gap-5'>
                <div className='w-12 h-12 bg-blue-500 rounded-full'/>
                <div className='w-12 h-12 bg-red-500 rounded-full'/>
            </div>
        </nav>
    )
}