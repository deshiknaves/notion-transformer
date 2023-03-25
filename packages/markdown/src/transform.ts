import {
  GenericBlock,
  Resolver,
  transform as baseTransform,
} from '@notion-transformer/core'
import { headingOne, headingThree, headingTwo, image, quote } from './blocks'

const resolvers: Resolver<any>[] = [
  headingOne,
  headingTwo,
  headingThree,
  quote,
  image,
]

export function transform<Block extends GenericBlock>(block: Block) {
  return baseTransform(block, resolvers)
}
