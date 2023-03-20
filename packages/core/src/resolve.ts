import { GenericBlock } from './blocks'

export type Resolver<Block extends GenericBlock, ReturnType = unknown> = (
  block: Block
) => ReturnType | undefined

export function resolve<Block extends GenericBlock>(
  block: Block,
  resolvers: Resolver<any>[]
) {
  return resolvers.reduce((acc, resolver) => {
    if (acc) return acc
    return resolver(block)
  }, undefined as any)
}
