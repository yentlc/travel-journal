export default function Card(card) {
  return (
    <section className='travelCard'>
      <img src={card.imageUrl} alt='city photo' />
      <section className='travelInfo'>
        <div className='country'>
          <FontAwesomeIcon
            icon='fa-solid fa-location-dot'
            className='locationIcon'
          />
          <h1>{card.location}</h1>
          <a
            href={card.googleMapsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='locationLink'>
            View on google maps
          </a>
        </div>
      </section>
    </section>
  );
}
