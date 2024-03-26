import { getEnv } from './basic';
import type { Result } from '../types/common';
import type { NodeOS } from '../types/node';
import { formatBytes } from '../utils/index';
/**
 *
 * @returns platform {platform: 'node', version: versionInfo}
 * @returns platform {platform: 平台, version: 版本信息}
 */
export const getPlatformNode = (): Result => {
  const node = getEnv();
  if (node == 'node') {
    return {
      platform: node,
      version: process.version,
    };
  } else {
    throw new Error('不是Node环境 (is not Node environment)');
  }
};

export const getOs = async (): Promise<NodeOS> => {
  const node = getEnv();
  if (node == 'node') {
    const os = await import('os');
    return {
      name: os.type(),
      version: os.release(),
      platform: os.platform(),
      arch: os.arch(),
      cpuModel: os.cpus()[0].model,
      cpuSpeed: os.cpus()[0].speed,
      cpus: os.cpus().length,
      totalMemory: formatBytes(os.totalmem()),
      freeMemory: formatBytes(os.freemem()),
    };
  } else {
    throw new Error('不是Node环境 (is not Node environment)');
  }
};
