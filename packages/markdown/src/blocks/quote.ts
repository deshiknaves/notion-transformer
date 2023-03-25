import { GenericBlock, QuoteBlock } from '@notion-transformer/core'
import { text } from './text'

export function quote(block: GenericBlock) {
  if (block.type !== 'quote') return undefined
  const quote = block as QuoteBlock

  return `> ${quote.quote.text.map(text).join('')}`
}
