import { resolve } from 'node:path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@notion-transformer/core': r('./packages/core/src/'),
}
