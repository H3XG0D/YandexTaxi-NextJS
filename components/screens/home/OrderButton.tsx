import { useAppSelector } from "../../../hooks";
import Button from "../../ui/Button";
import { optionsList } from './data';

const OrderButton = () => {
    const { travelTime, selectedOption } = useAppSelector(
        (state) => state.taxi
    );
    const orderHandler = () => {
        alert(`Спасибо за заказ! ${optionsList.find(o => o._id === selectedOption)?.title}!`)
    };
    return (
        <Button
            title="Заказать"
            bgColor="#ffe847"
            color="#111"
            cb={orderHandler}
            isDisabled={!travelTime && !selectedOption}
        />
    );
};

export default OrderButton;
