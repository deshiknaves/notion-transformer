import { GenericBlock, QuoteBlock } from '@notion-transformer/core'

export function quote(block: GenericBlock) {
  if (block.type !== 'quote') return undefined
  const quote = block as QuoteBlock

  return `> ${quote.quote.text.map((text) => text.text.content).join('')}`
}
