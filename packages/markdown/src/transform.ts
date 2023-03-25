import {
  GenericBlock,
  Resolver,
  transform as baseTransform,
} from '@notion-transformer/core'
import { headingOne, headingThree, headingTwo } from './blocks/headings'

const resolvers: Resolver<any>[] = [headingOne, headingTwo, headingThree]

export function transform<Block extends GenericBlock>(block: Block) {
  return baseTransform(block, resolvers)
}
