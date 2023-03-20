import { GenericBlock, HeadingOneBlock } from '@notion-transformer/core'

export function headingOne(block: GenericBlock) {
  if (block.type !== 'heading_1') return undefined
  const heading = block as HeadingOneBlock

  return `# ${heading.heading_1.text.map((text) => text.text.content).join('')}`
}
