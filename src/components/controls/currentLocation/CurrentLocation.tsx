
const CurrentLocation = () => {
    const googleMaps_url = 'https://goo.gl/maps/41Xi7LfgvrKtLJeA8';
  return (
      <div className="current-location">
          <a href={ googleMaps_url } target="_blank">Current Location: Ramos Arizpe Coahuila MX</a>
    </div>
  )
}

export default CurrentLocation