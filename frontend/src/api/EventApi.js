import AxiosWithInterceptor from "./AxiosWithInterceptor";

class EventApi {

    async getAllEvents() {
        const getResponse = await AxiosWithInterceptor.get("/events");
        return getResponse.data;
    }

    async getAllEventsWithDetails() {
        const getResponse = await AxiosWithInterceptor.get("/events/details");
        return getResponse.data;
    }

    async create(createRequest) {
        const createResponse = await AxiosWithInterceptor.post("/events", createRequest);
        return createResponse;
    }

    async update(id, updateRequest) {
        const updateResponse = await AxiosWithInterceptor.put(`/events/${id}`, updateRequest);
        return updateResponse;
    }

    async delete(id) {
        const deleteResponse = await AxiosWithInterceptor.delete(`/events/${id}`);
        return deleteResponse;
    }

}

export default new EventApi();