import { CodeBlock, GenericBlock } from '@notion-transformer/core'
import { text } from './text'

export function code(block: GenericBlock) {
  if (block.type !== 'code') return undefined
  const code = block as CodeBlock

  return `\`\`\`${code.code.language}
${code.code.text.map(text).join('')}
\`\`\``
}
