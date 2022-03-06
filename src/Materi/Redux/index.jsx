import { Provider } from "react-redux";
import store from "../../app/store";
import Counterr from "./pembahasan/counter";

const Redux = () => {
    return (
        <div>
            <Provider store={store}>
                <Counterr/>
            </Provider>
        </div>

    )
}

export default Redux;