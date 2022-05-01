import axios from "axios";
import SubscribeContext from "./SubscribeContext";

const SubscribeState = ({ children }) => {

    const postNewUserSuscribe = async (data) => {

        const url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";

        const { email, name } = data;

        const body = `{\n    \"email\": "${email}",\n    \"name\": "${name}"\n}`

        try {
            const res = await axios.post(url, JSON.parse(body));
            console.log(body)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <SubscribeContext.Provider
            value={{
                postNewUserSuscribe,
            }}
        >
            {children}
        </SubscribeContext.Provider>
    );
};
export default SubscribeState;