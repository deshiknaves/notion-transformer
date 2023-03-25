import { GenericBlock, ImageBlock } from '@notion-transformer/core'
import { text } from './text'

export function image(block: GenericBlock) {
  if (block.type !== 'image') return undefined
  const image = block as ImageBlock

  return {
    type: 'image',
    url: image.image.external.url,
    caption: image.image.caption.map(text),
  }
}
