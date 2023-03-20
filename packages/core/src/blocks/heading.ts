import { GenericBlock } from './generic'
import { TextBlock } from './text'

export type HeadingOneBlock = GenericBlock & {
  type: 'heading_1'
  heading_1: {
    text: TextBlock[]
  }
}

export function headingOne(block: GenericBlock) {
  if (block.type !== 'heading_1') return undefined
  const heading = block as HeadingOneBlock

  return `# ${heading.heading_1.text.map((text) => text.text.content).join('')}`
}
