import Navigation from "./Navigation";
import Riddle from "./Riddle";

export default function LeftSide() {

    return (
        <div className='left-0 w-96 absolute overflow-y-auto'>
            <Navigation/>
            <div className='w-full absolute top-64'>
                <Riddle/>
            </div>
        </div>
    )
}