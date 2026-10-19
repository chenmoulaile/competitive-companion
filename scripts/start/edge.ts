import * as ChromeLauncher from 'chrome-launcher';
import { waitForBuild } from './utils';

await waitForBuild('edge');

const defaultEdgePath =
  process.platform === 'win32'
    ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    : process.platform === 'darwin'
      ? '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
      : '/usr/bin/microsoft-edge';

await ChromeLauncher.launch({
  startingUrl: 'https://codeforces.com/problemset/problem/954/G',
  ignoreDefaultFlags: true,
  chromePath: process.env.EDGE_PATH ?? defaultEdgePath,
  chromeFlags: ['--no-first-run', '--no-default-browser-check', '--start-maximized', '--load-extension=./build-edge'],
});
