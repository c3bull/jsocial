import {useState} from "react";
import {people} from "../data/people";

export default function SearchBar() {

    const [searchInput, setSearchInput] = useState(0);
    const [filteredList, setFilteredList] = useState([]);

    const goToDetailsButton = (id) => {
    };

    const filterBySearch = (event) => {
        const query = event.target.value;
        setSearchInput(query.length)
        var updatedList = [...people];
        updatedList = updatedList.filter(({name}) => {
            return Object.values(name).join('').toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updatedList);
    };

    return (
        <div>
            <input className="bg-gray-100 h-10 p-4 rounded-full focus:outline-0" placeholder="Szukaj..."
                   onChange={filterBySearch}/>
            <div className="bg-white absolute top-16 left-0 w-96 overflow-y-auto max-h-96 shadow-lg">
                {
                    searchInput > 1 && filteredList.map((item) => {
                        return (
                            <div className="flex items-center gap-4 m-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
                                 onClick={() => {
                                     goToDetailsButton(item.id);
                                     window.location.reload();
                                 }}>
                                <div
                                    className="w-10 h-10 rounded-full bg-red-500 uppercase flex justify-center items-center">
                                    {item.name.slice(0, 2)}
                                </div>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}