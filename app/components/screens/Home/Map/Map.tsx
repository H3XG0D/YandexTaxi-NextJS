import GoogleMapReact from "google-map-react";

const Map = () => {
  let apiKey = "AIzaSyAY1o0OVVUKBFoVX84PQW5FuAkolw6kNeU";
  let defaultZoom = 10;
  let language = "tr";
  let center = { lat: 41.017224, lng: 28.949146 };
  return (
    <div className="h-screen w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD3Jm_HKgLW1-kpvhnwp3NryCXrzDBdJRQ" }}
        defaultCenter={{ lat: 11.2588, lng: 75.7804 }}
        defaultZoom={13}
        options={{}}
      />
    </div>
  );
};

export default Map;
