import Layout from "../../layout/Layout";
import FromInput from "./FromInput";
import MapComp from "./Map";
import Options from "./Options";
import OrderButton from './OrderButton';
import ToInput from "./ToInput";

const Home = () => {
    return (
        <Layout title="Заказать такси">
            <MapComp />
            <div className="absolute z-10 left-5 w-11/12 bottom-7">
                <FromInput />
                <ToInput />
                <Options />
                <OrderButton/>
            </div>
        </Layout>
    );
};

export default Home;
