/**
 * config.js — Regional Banking Configuration
 * Growth Project | Secure Hub
 *
 * This file is intentionally kept separate from the main application
 * logic to isolate sensitive regional payment routing data.
 * Load this script in <head> before the main application script.
 */

const REGION_BANKS = {
    'North-Central': [
        { bank: 'PalmPay', name: 'olarenwaju Enoch Olaposi', account: '9119534968' }
    ],
    'North-West': [
        { bank: 'PalmPay', name: 'olarenwaju Enoch Olaposi', account: '9119534968' },
        { bank: 'Moniepoint MFB', name: 'Amos Ayomide Adeyanju', account: '5219345011' }
    ],
    'North-East': [
        { bank: 'PalmPay', name: 'olarenwaju oluwayemisi Sarah', account: '8082316628' }
    ],
    'South-West': [
        { bank: 'PalmPay', name: 'olarenwaju Enoch Olaposi', account: '9119534968' }
    ],
    'South-South': [
        { bank: 'PalmPay', name: 'olarenwaju Enoch Olaposi', account: '9119534968' }
    ],
    'South-East': [
        { bank: 'PalmPay', name: 'olarenwaju oluwayemisi Sarah', account: '8082316628' },
        { bank: 'PalmPay', name: 'olarenwaju oluwayemisi Sarah', account: '8082316628' }
    ]
};

// Freeze the object to prevent runtime modification by unauthorized scripts
Object.freeze(REGION_BANKS);
for (const region in REGION_BANKS) {
    if (Object.prototype.hasOwnProperty.call(REGION_BANKS, region)) {
        Object.freeze(REGION_BANKS[region]);
        REGION_BANKS[region].forEach(Object.freeze);
    }
}
