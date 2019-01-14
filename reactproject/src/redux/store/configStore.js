import {createStore} from "redux"
import Reducer from "../reducer"

export default function (init) {
    const store = createStore(
        Reducer,
        init
    );
    return store
}