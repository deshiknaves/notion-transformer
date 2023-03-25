import { TextBlock } from '@notion-transformer/core/src/blocks/text'

function bold(text: string) {
  return `**${text}**`
}

function italic(text: string) {
  return `*${text}*`
}

function strikethrough(text: string) {
  return `~~${text}~~`
}

function underline(text: string) {
  return `__${text}__`
}

function link(text: string, url?: string | null) {
  if (!url) return text
  return `[${text}](${url})`
}

function code(text: string) {
  return `\`${text}\``
}

export function text(block: TextBlock) {
  let value = block.text.content

  for (const annotation in block.annotations) {
    switch (true) {
      case annotation === 'bold' && block.annotations[annotation]:
        value = bold(value)
        break
      case annotation === 'italic' && block.annotations[annotation]:
        value = italic(value)
        break
      case annotation === 'strikethrough' && block.annotations[annotation]:
        value = strikethrough(value)
        break
      case annotation === 'underline' && block.annotations[annotation]:
        value = underline(value)
        break
      case annotation === 'code' && block.annotations[annotation]:
        value = code(value)
        break
      default:
        break
    }
  }

  value = link(value, block.href)

  return value
}
