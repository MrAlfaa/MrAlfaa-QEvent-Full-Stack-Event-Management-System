import axios from 'axios';

class RegisterApi {

    async register(registerRequest) {
        const registerResponse = await axios.post("/api/register/external", registerRequest);
        return registerResponse;
    }

}

export default new RegisterApi();