import { registerPlugin } from '@capacitor/core';

import type { ShareToPlugin } from './definitions';

const ShareTo = registerPlugin<ShareToPlugin>('ShareTo', {
  web: () => import('./web').then((m) => new m.ShareToWeb()),
});

export * from './definitions';
export { ShareTo };
