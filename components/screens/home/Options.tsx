import { useActions, useAppSelector } from "../../../hooks";
import Image from "next/image";
import cn from "classnames";
import { optionsList } from "./data";

const Options = () => {
    const { selectedOption, travelTime } = useAppSelector(
        (state) => state.taxi
    );
    const { setSelectedOption } = useActions();
    return (
        <div className={"flex overflow-x-scroll hide-scroll-bar my-5"}>
            <div className={"flex flex-nowrap"}>
                {optionsList.map((option) => (
                    <button
                        key={option._id}
                        className={
                            "inline-block rounded-x1 py-1 px-4 outline-none mr-4 bg-white overflow-hidden"
                        }
                        onClick={() =>
                            travelTime && setSelectedOption(option._id)
                        }
                        style={{ minWidth: "105px" }}
                    >
                        <div
                            className={cn(
                                "opacity-30 text-left transition-opacity duration-300 ease-linear",
                                {
                                    "opacity-100":
                                        option._id === selectedOption,
                                }
                            )}
                        >
                            <Image
                                src={option.img}
                                alt={option.title}
                                width={45}
                                height={45}
                            />
                            <div
                                className={"text-sm -mt-1"}
                                style={{ color: "#222" }}
                            >
                                {option.title}
                            </div>
                            <div className={"text-md font-medium"}>
                                {" "}
                                {travelTime
                                    ? new Intl.NumberFormat("ru-RU", {
                                          style: "currency",
                                          currency: "RUB",
                                      }).format(travelTime * option.multiplier)
                                    : "- ₽"}{" "}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Options;
