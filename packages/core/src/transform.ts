import { GenericBlock } from './blocks'
import { resolve, Resolver } from './resolve'

export function transform<Block extends GenericBlock>(
  block: Block,
  resolvers: Resolver<any>[]
) {
  return resolve(block, resolvers)
}
