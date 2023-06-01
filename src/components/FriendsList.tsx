import {people} from "../data/people";

export default function FriendsList() {

    return (
        <div className='h-screen'>
            <div className='h-[1px] bg-gray-200 w-full'/>
            <p className='py-3 uppercase font-semibold text-gray-400'>
                Kontakty
            </p>
            {people.slice(0, 40).map(({name}, key) => (
                <div key={key} className="flex items-center gap-4 hover:bg-gray-200 p-2 rounded-md cursor-pointer">
                    <div>
                        {/*<img src={item.image} className="search-image"/>*/}
                        <div
                            className="w-10 h-10 rounded-full bg-red-500 uppercase flex justify-center items-center">{name.slice(0, 2)}</div>
                    </div>
                    <div>
                        <div className="font-semibold">
                            {name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}