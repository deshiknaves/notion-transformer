import {
  GenericBlock,
  Resolver,
  transform as baseTransform,
} from '@notion-transformer/core'
import { headingOne, headingThree, headingTwo, quote } from './blocks'

const resolvers: Resolver<any>[] = [headingOne, headingTwo, headingThree, quote]

export function transform<Block extends GenericBlock>(block: Block) {
  return baseTransform(block, resolvers)
}
