import {
  GenericBlock,
  Resolver,
  transform as baseTransform,
} from '@notion-transformer/core'
import { headingOne } from './blocks/headings'

const resolvers: Resolver<any>[] = [headingOne]

export function transform<Block extends GenericBlock>(block: Block) {
  return baseTransform(block, resolvers)
}
