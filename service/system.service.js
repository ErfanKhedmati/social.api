import fs from 'fs';
import SystemModel from '../models/system.model.js';

export const getSystemState =  async() => {
    const data = await fs.readFileSync('data/system_config.csv', 'utf-8');
    let systemState = data.split('\n').map(row => row.split(',')[1].split('\r')[0]);
    systemState.shift(); //remove header row
    const systemModel = new SystemModel(systemState[0], systemState[1], systemState[2]);
    return systemModel;
}