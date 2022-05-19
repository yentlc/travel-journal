export default function Card(card) {
  return (
    <section className='travelCard'>
      <img src={card.imageUrl} alt='city' />
      <section className='travelInfo'>
        <div className='country'>
          <i class='fa-solid fa-location-dot'></i>
          <h3>{card.location}</h3>
          <a
            href={card.googleMapsUrl}
            target='_blank'
            rel='noreferrer'
            className='locationLink'>
            View on google maps
          </a>
        </div>
        <h1 className='title'>{card.title}</h1>
        <p className='dates'>
          {card.startDate}-{card.endDate}
        </p>
        <p className='description'>{card.description}</p>
      </section>
    </section>
  );
}
