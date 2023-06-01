import {format} from 'date-fns'
import {people} from "../data/people";

export default function Birthday() {

    const today = format(new Date, 'MM-dd')

    return (
        <div className='pt-32 absolute right-20'>
            {people.map(({name, birthday}, key) => (
                <div key={key}>
                    {birthday && birthday.substr(5, 5) === today &&
                        <div className='flex gap-1'>
                            <p className='font-semibold'>{name}</p>
                            ma dziś urodziny
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}