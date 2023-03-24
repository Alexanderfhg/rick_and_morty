import Card from './Card';

export default function Cards(props) {

   const { characters, onClose } = props;

   return (
      <div className='cardContainer'>
         <div className='cards'>
            {characters.map((element) => (
            <Card
               id={element.id}
               name={element.name}
               status={element.status}
               species={element.species}
               gender={element.gender}
               origin={element.origin.name}
               image={element.image}
               onClose={() => onClose(element.id)}
               key={element.id}
            />
            ))}
         </div>
      </div>);
}
