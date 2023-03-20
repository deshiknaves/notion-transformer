import { GenericBlock, headingOne } from './blocks'
import { resolve } from './resolve'

const resolvers = [headingOne]

export function transform<Block extends GenericBlock>(block: Block) {
  return resolve(block, resolvers)
}
