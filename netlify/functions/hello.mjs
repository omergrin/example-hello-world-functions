// import { createRequire } from 'node:module';

import('hud-sdk/register').then(({ register }) => {

    // const require = createRequire(import.meta.url);

    require('./hello/hell.js')

}
)