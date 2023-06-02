import Navbar from "./Navbar";
import RightSide from "./RightSide";
import {useState} from "react";
import LeftSide from "./LeftSide";

export default function MainPage() {

    const [newPost, setNewPost] = useState('')

    return (
        <div className='bg-gray-50 h-screen w-full flex justify-center'>
            <Navbar/>
            <RightSide/>
            <LeftSide/>
            <div className='pt-32 w-full flex justify-center'>
                <div className='h-48 w-1/3 bg-white rounded-md flex flex-col p-1 gap-1 shadow-md'>
                    <div className='flex h-full gap-1'>
                        <div className='bg-red-500 rounded-full h-12 w-12 p-10'/>
                        <textarea className="resize-none rounded-md bg-gray-100 h-full w-full p-4 focus:outline-0 flex "
                                  placeholder="Co tam?"
                                  onChange={(e) => setNewPost(e.target.value)}/>
                    </div>
                    <div className='h-[1px] bg-gray-200 w-full my-1'/>
                    <div className='flex justify-end gap-2'>
                        <button>
                            Zdjęcie
                        </button>
                        <button>
                            Wyślij
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}