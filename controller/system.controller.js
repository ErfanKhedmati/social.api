import {getSystemState as getSystemStateService} from '../service/system.service.js';

export const getSystemState = async() => {
    const data = await getSystemStateService();
    return data;
}