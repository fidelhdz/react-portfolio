
const CurrentLocation = () => {
    const googleMaps_url = 'https://goo.gl/maps/41Xi7LfgvrKtLJeA8';
  return (
    <div className="absolute dark:bg-lime-500 py-1 px-6 text-sm dark:text-slate-900 bottom-0 right-0 hover:text-white transition-colors duration-200 ease-out font-bebas">
      <a href={ googleMaps_url } target="_blank">&mdash; Current Location: Ramos Arizpe Coahuila MX</a>
    </div>
  )
}

export default CurrentLocation