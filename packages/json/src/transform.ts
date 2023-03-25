import {
  GenericBlock,
  Resolver,
  transform as baseTransform,
} from '@notion-transformer/core'
import { headingOne, headingTwo } from './blocks/headings'

const resolvers: Resolver<any>[] = [headingOne, headingTwo]

export function transform<Block extends GenericBlock>(block: Block) {
  return baseTransform(block, resolvers)
}
