import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { YMaps, Placemark, Map } from "react-yandex-maps";
import { useActions, useAppSelector } from "../../../hooks";
import { optionsList } from "./data";

const MapComp1 = () => {
    return (
        <YMaps query={{ lang: "en_RU" }}>
            <div className={"h-screen w-full container-map"}>
                <Map
                    width={"100%"}
                    height={"100%"}
                    defaultState={{
                        center: [55.75, 37.57],
                        zoom: 7,
                    }}
                >
                    <Placemark defaultGeometry={[55.75, 37.57]} />
                </Map>
            </div>
        </YMaps>
    );
};

interface IMAP {
    map: google.maps.Map;
    maps: any;
}

const MapComp = () => {
    const [MAP, setMAP] = useState<IMAP>({} as IMAP);
    const [isExistRoute, setIsExistRoute] = useState(false);
    const { from, to } = useAppSelector((state) => state.taxi);
    const { setTravelTime, setSelectedOption } = useActions();

    const renderWay = () => {
        const { map, maps } = MAP;

        if (typeof maps.DirectionsRenderer === "function") {
            const directionsRenderer: google.maps.DirectionsRenderer =
                new maps.DirectionsRenderer();
            const directionsService: google.maps.DirectionsService =
                new maps.DirectionsService();

            directionsService
                .route({
                    origin: from.location,
                    destination: to.location,
                    travelMode: google.maps.TravelMode.DRIVING,
                })
                .then((res) => {
                    directionsRenderer.setDirections(res);

                    const durationSec = res.routes[0].legs[0].duration?.value;

                    if (durationSec) {
                        setTravelTime(Math.ceil(durationSec / 60));
                        setSelectedOption(optionsList[0]._id);
                    }
                })
                .catch((err) => alert('Ты не уедешь туда на тачке, чудак\n' + err));

            directionsRenderer.setOptions({
                markerOptions: {
                    clickable: false,
                },
            });

            directionsRenderer.setMap(map);
        }
    };

   useEffect(() => {
       if (
           from.location?.lat &&
           to.location?.lat &&
           MAP?.map &&
           MAP?.maps &&
           !isExistRoute
       )
           renderWay();
   }, [from, to, MAP?.map, MAP?.maps, isExistRoute]);

    return (
        <div className="h-screen w-full">
            <GoogleMapReact
                bootstrapURLKeys={{ key: String(process.env.MAP_KEY) }}
                defaultCenter={{
                    lat: 55.75222,
                    lng: 37.61556,
                }}
                defaultZoom={13}
                options={{
                    zoomControl: false,
                    fullscreenControl: false,
                    keyboardShortcuts: false,
                    clickableIcons: false,
                    scrollwheel: false,
                }}
                center={
                    from.location?.lat
                        ? {
                              lat: from.location?.lat,
                              lng: from.location?.lng,
                          }
                        : undefined
                }
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={setMAP}
            />
        </div>
    );
};

export default MapComp;
