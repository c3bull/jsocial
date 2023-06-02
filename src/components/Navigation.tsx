export default function Navigation() {
    const leftButtons = [
        {
            title: "Strona główna",
            icon: "",
        },
        {
            title: "Profil",
            icon: "",
        },
        {
            title: "Wiadomości",
            icon: "",
        }
    ]

    return (
        <div className='h-screen w-full'>
            <div className='absolute top-20 w-full'>
                {leftButtons.map(({title, icon}, key) => (
                        <div key={key} className="flex items-center gap-4 hover:bg-gray-200 p-2 mx-2 rounded-md cursor-pointer duration-200">
                            <div>
                                {/*<img src={item.image} className="search-image"/>*/}
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-300 uppercase flex justify-center items-center"/>
                            </div>
                            <div>
                                <div className="font-semibold">
                                    {title}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}