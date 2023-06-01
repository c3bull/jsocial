import FriendsList from "./FriendsList";
import Birthday from "./Birthday";

export default function RightSide() {

    return (
        <div className='h-screen w-96 absolute right-0 overflow-auto'>
            <Birthday/>
            <div className='w-full absolute top-52 h-full'>
                <FriendsList/>
            </div>
        </div>
    )
}