import { Coords } from "google-map-react";
import { useActions } from "../../../hooks";
import InputPlaces from "../../ui/InputPlaces";

const FromInput = () => {
    const { setFrom, setTo } = useActions();
    const cbSuccess = (address: string, location: Coords) => {
        setFrom({ location, description: address });
        setTo('');
    };

    return <InputPlaces cb={cbSuccess} type="from" />;
};

export default FromInput;
