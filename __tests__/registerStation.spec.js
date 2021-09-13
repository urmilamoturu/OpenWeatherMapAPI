import * as registerStationHelper from "../helpers/registerStationHelpers";
import * as endpoints from "../support/endpoints"
import { apiKey } from "../support/constants";
import registerStationDEMO_TEST001 from "../data/body/registerStationDEMO_TEST001.json";
import registerStationDEMO_TEST002 from "../data/body/registerStationDEMO_TEST002.json";

/**
 * @group regression
 * @group registerStation
 */

describe("Register a new Station", () => {
    let DEMO_TEST001StationID, DEMO_TEST002StationID;

    test('Should return error when station is created without API key', async () => {
        let expected = {
            cod: 401,
            message: 'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.'
        };
        let uriWithoutAppKey = endpoints.API_REGISTER_STATION;
        const registerStationResponse = await registerStationHelper.registerNewStation(uriWithoutAppKey);
        await expect(registerStationResponse.response.data.cod)
            .toBe(401);
        await expect(registerStationResponse.response.data).toEqual(expected);
    })

    test('Should be able to register a new DEMO_TEST001 station', async () => {
        let uri = endpoints.API_REGISTER_STATION + "?appid=" + apiKey
        const registerStationResponse = await registerStationHelper.registerNewStation(uri, registerStationDEMO_TEST001);
        await expect(registerStationResponse.status)
            .toBe(201);
        expect(registerStationResponse.data).toEqual(expect.objectContaining(registerStationDEMO_TEST001));
        DEMO_TEST001StationID = registerStationResponse.data.ID;
    });

    test('Should be able to register a new DEMO_TEST002 station', async () => {
        let uri = endpoints.API_REGISTER_STATION + "?appid=" + apiKey
        const registerStationResponse = await registerStationHelper.registerNewStation(uri, registerStationDEMO_TEST002);
        await expect(registerStationResponse.status)
            .toBe(201);
        expect(registerStationResponse.data).toEqual(expect.objectContaining(registerStationDEMO_TEST002));
        DEMO_TEST002StationID = registerStationResponse.data.ID;
    });

    test('Should be able to validate that the stations were successfully stored', async () => {
        const getallstationsResponse = await registerStationHelper.listAllStations();
        await expect(getallstationsResponse.status).toBe(200);
        expect(getallstationsResponse.data[getallstationsResponse.data.length - 2].id).toEqual(DEMO_TEST001StationID);
        expect(getallstationsResponse.data[getallstationsResponse.data.length - 1].id).toEqual(DEMO_TEST002StationID);
        expect(getallstationsResponse.data[getallstationsResponse.data.length - 1]).toEqual(expect.objectContaining(registerStationDEMO_TEST002));
        expect(getallstationsResponse.data[getallstationsResponse.data.length - 2]).toEqual(expect.objectContaining(registerStationDEMO_TEST001));
    });

});