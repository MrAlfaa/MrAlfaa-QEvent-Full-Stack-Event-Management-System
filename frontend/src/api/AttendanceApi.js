import {toast} from "react-toastify";
import AxiosWithInterceptor from "./AxiosWithInterceptor";

class AttendanceApi {

    async getCurrentEventsByUserTc(userTc) {
        const getCurrentEventsResponse = await AxiosWithInterceptor.get(`/attendee/${userTc}`);
        return getCurrentEventsResponse.data;
    }

    async getAttendedEventsByUserTc(userTc) {
        const getAttendedEventsResponse = await AxiosWithInterceptor.get(`/attended/${userTc}`);
        return getAttendedEventsResponse.data;
    }

    async getQRCode(userTc, eventId) {
        let qrcode;

        const getQRCodeResponse =
            await AxiosWithInterceptor
                .get(
                    `/attendee/qrcode/${eventId}/${userTc}`,
                    {responseType: "arraybuffer"})
                .then((response) => {
                    qrcode = Buffer.from(response.data, "binary").toString("base64")
                })
                .catch((error) => {
                        switch (error.response.status) {
                            case 400:
                                error.response.data.forEach(toast.error);
                                break;
                            default:
                                toast.error("Error: " + error.response.status);
                                break;
                        }
                    }
                );

        return qrcode;
    }

    async attend(userTc, eventId) {
        const attendResponse = await AxiosWithInterceptor.post(`/attend/${eventId}/${userTc}`);
        return attendResponse;
    }

}

export default new AttendanceApi();