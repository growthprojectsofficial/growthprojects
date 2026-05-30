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
        { bank: 'Safe Haven', name: 'Samuel Richard', account: '0119418121' }
    ],
    'North-West': [
        { bank: 'Loma', name: 'Samuel Richard', account: '8065246138' },
        { bank: 'KudaBank', name: 'Samuel Richard', account: '3003630704' }
    ],
    'North-East': [
        { bank: 'palmpay', name: 'Amos Ayomide Adeyanju', account: '8108643171' }
    ],
    'South-West': [
        { bank: 'Moniepoint MFB', name: 'Amos Ayomide Adeyanju', account: '5219345011' }
    ],
    'South-South': [
        { bank: 'Safe Haven', name: 'Adeyanju Amos', account: '0103184148' }
    ],
    'South-East': [
        { bank: 'PalmPay', name: 'Comfort Ebunoluwa Ajimuda', account: '8918122594' },
        { bank: 'Moniepoint', name: 'Ajimuda Comfort Ebunoluwa', account: '6742226761' }
    ]
};
