import { Coords } from "google-map-react";
import { useActions } from "../../../hooks";
import InputPlaces from "../../ui/InputPlaces";

const ToInput = () => {
    const { setTo } = useActions();
    const cbSuccess = (address: string, location: Coords) => {
        setTo({ location, description: address });
    };

    return <InputPlaces cb={cbSuccess} type="to" />;
};

export default ToInput;
