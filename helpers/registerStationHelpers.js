import { getRequest, postRequest } from "../support/axiosHelpers";
import { baseUrl, apiKey } from "../support/constants";
import genericHeader from "../data/header/genericHeader.json";
import * as endpoints from "../support/endpoints"

export const registerNewStation = async (uri, registerStation) => {
    const header = { ...genericHeader };
    const registerStationbody = { ...registerStation };
    let registerstationResponse;

    try {
        registerstationResponse = await postRequest(
            uri,
            header,
            registerStationbody,
            baseUrl
        );
    } catch (error) {
        return error;
    }
    return registerstationResponse;
}

export const listAllStations = async () => {
    let getAllStationResponse;
    const header = { ...genericHeader };
    try {
        getAllStationResponse = await getRequest(
            endpoints.API_LIST_ALL_STATIONS + "?appid=" + apiKey,
            header,
            baseUrl
        );
    } catch (error) {
        return error;
    }

    return getAllStationResponse;
}