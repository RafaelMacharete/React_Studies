type Props = {
    name: string;
    image?: string;
    details: string[];
    publicationDate?: number;
}

export const Person = ({ 
    name, 
    image = 'https://cdn-icons-png.flaticon.com/512/1619/1619284.png', 
    details, 
    publicationDate 
}: Props) => {
    return (
        <div className="p-4">
            <h1>{name}</h1>
            <img
                src={image}
                alt={name}
                className='w-100 h-80'
            />
            <ul>
                <li>{publicationDate}</li>
                <li>{details[0]}</li>
                <li>{details[1]}</li>
                <li>{details[2]}</li>
            </ul>
        </div>
    )

}