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

    expect(result).toEqual({
      type: 'text',
      value: 'This is a ',
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'bold',
        value: 'This is the text',
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'italic',
        value: 'This is the text',
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'strikethrough',
        value: 'This is the text',
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'underline',
        value: 'This is the text',
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'italic',
        value: {
          type: 'bold',
          value: 'This is the text',
        },
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'strikethrough',
        value: {
          type: 'bold',
          value: 'This is the text',
        },
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'underline',
        value: {
          type: 'bold',
          value: 'This is the text',
        },
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'strikethrough',
        value: {
          type: 'italic',
          value: 'This is the text',
        },
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'underline',
        value: {
          type: 'italic',
          value: 'This is the text',
        },
      },
    })
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

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'underline',
        value: {
          type: 'strikethrough',
          value: 'This is the text',
        },
      },
    })
  })

  it('should be able to return a link text', () => {
    const result = text({
      type: 'text',
      text: {
        content: 'link',
        link: {
          url: 'https://www.example.com/',
        },
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
      plain_text: 'link',
      href: 'https://www.example.com/',
    })

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'link',
        value: 'link',
        url: 'https://www.example.com/',
      },
    })
  })

  it('should be able to return a code text', () => {
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
        underline: false,
        code: true,
        color: 'default',
      },
      plain_text: 'This is the text',
      href: null,
    })

    expect(result).toEqual({
      type: 'text',
      value: {
        type: 'code',
        value: 'This is the text',
      },
    })
  })
})
