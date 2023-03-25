import {
  GenericBlock,
  HeadingOneBlock,
  HeadingThreeBlock,
  HeadingTwoBlock,
} from '@notion-transformer/core'

export function headingOne(block: GenericBlock) {
  if (block.type !== 'heading_1') return undefined
  const heading = block as HeadingOneBlock

  return `# ${heading.heading_1.text.map((text) => text.text.content).join('')}`
}

export function headingTwo(block: GenericBlock) {
  if (block.type !== 'heading_2') return undefined
  const heading = block as HeadingTwoBlock

  return `## ${heading.heading_2.text
    .map((text) => text.text.content)
    .join('')}`
}

export function headingThree(block: GenericBlock) {
  if (block.type !== 'heading_3') return undefined
  const heading = block as HeadingThreeBlock

  return `### ${heading.heading_3.text
    .map((text) => text.text.content)
    .join('')}`
}
