import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch, RootState } from "../store";
import { taxiSlice } from '../store/slice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(taxiSlice.actions, dispatch);
}
