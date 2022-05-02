import axios from "axios";
import SubscribeContext from "./SubscribeContext";
import swal from "sweetalert";


const SubscribeState = ({ children }) => {

    const postNewUserSuscribe = async (data) => {

        const url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";

        const { email, name } = data;

        const body = `{\n    \"email\": "${email}",\n    \"name\": "${name}"\n}`

        try {
            const res = await axios.post(url, JSON.parse(body));
            if (res.status === 200 || res.status === 201) {
                swal({
                    title: "Suscripción exitosa!",
                    text: "La suscripción se ha realizado correctamente!",
                    icon: "success",
                });
            }

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