import {useState} from "react";
import {people} from "../data/people";

type People = {
    name: string
    email: string | null
    city: string | null
    mac: string
    timestamp: string
    creditcard: string | null
}

export default function SearchBar() {

    const [searchInput, setSearchInput] = useState('');
    const goToDetailsButton = (id) => {
    };

    const [filteredResults, setFilteredResults] = useState([]);
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput.length > 1) {
            const filteredData = people.filter((item: People) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(people)
        }
    }

    return (
        <div className=''>
            <div className="navbar-search">
                <input className="bg-gray-100 h-10 p-4 rounded-full focus:outline-0" placeholder="szukaj..."
                       onChange={(e) => searchItems(e.target.value)}/>
            </div>

            <div className="absolute top-16 left-0 w-96 overflow-y-auto max-h-96 shadow-lg">
                {searchInput.length > 2 ? (
                    filteredResults.map((item) => {
                        return (
                            <div className="flex items-center gap-4 m-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
                                 onClick={() => {
                                     goToDetailsButton(item.id);
                                     window.location.reload();
                                 }}>
                                <div className="search-image-div">
                                    {/*<img src={item.image} className="search-image"/>*/}
                                    <div
                                        className="w-10 h-10 rounded-full bg-red-500 uppercase flex justify-center items-center">{item.name.slice(0, 2)}</div>
                                </div>
                                <div className="search-title-div">
                                    <div className="search-title">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : false
                }
            </div>
        </div>
    )
}