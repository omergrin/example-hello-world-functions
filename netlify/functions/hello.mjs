await import('hud-sdk/register');

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

require('./hello/hell.js')