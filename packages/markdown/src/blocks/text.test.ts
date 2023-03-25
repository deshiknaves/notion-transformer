import { describe, expect, it } from 'vitest'
import { text } from './text'

describe('Transform — Text', () => {
  it('should be able to return regular text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is a ',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'This is a ',
      href: null,
    })

    expect(result).toEqual('This is a ')
  })

  it('should be able to return bold text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: true,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('**This is the text**')
  })

  it('should be able to return italic text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: false,
        italic: true,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('*This is the text*')
  })

  it('should be able to return strikethrough text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: true,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('~~This is the text~~')
  })

  it('should be able to return underline text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: true,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('__This is the text__')
  })

  it('should be able to return bold and italic text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: true,
        italic: true,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('***This is the text***')
  })

  it('should be able to return bold and strikethrough text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: true,
        italic: false,
        strikethrough: true,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('~~**This is the text**~~')
  })

  it('should be able to return bold and underline text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: true,
        italic: false,
        strikethrough: false,
        underline: true,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('__**This is the text**__')
  })

  it('should be able to return italic and strikethrough text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: false,
        italic: true,
        strikethrough: true,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('~~*This is the text*~~')
  })

  it('should be able to return italic and underline text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: false,
        italic: true,
        strikethrough: false,
        underline: true,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('__*This is the text*__')
  })

  it('should be able to return strikethrough and underline text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'This is the text',
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: true,
        underline: true,
        code: false,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual('__~~This is the text~~__')
  })
})
