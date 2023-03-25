import { describe, expect, it } from 'vitest'
import { transform } from '../transform'

describe('Transform — Headings', () => {
  it('should be able to return a heading 1', () => {
    const result = transform({
      object: 'block',
      id: '0ae598ec-8819-43eb-a5ad-d147a5eafaa3',
      parent: {
        type: 'page_id',
        page_id: '425f9ff1-330c-4efa-926f-e36605d15b52',
      },
      created_time: '2023-03-20T01:12:00.000Z',
      last_edited_time: '2023-03-20T01:12:00.000Z',
      created_by: {
        object: 'user',
        id: '92145c17-8f0e-49d1-b045-f64238795270',
      },
      last_edited_by: {
        object: 'user',
        id: '92145c17-8f0e-49d1-b045-f64238795270',
      },
      has_children: false,
      archived: false,
      type: 'heading_1',
      heading_1: {
        is_toggleable: false,
        color: 'default',
        text: [
          {
            type: 'text',
            text: {
              content: 'Kitchen Sink',
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
            plain_text: 'Kitchen Sink',
            href: null,
          },
        ],
      },
    })

    expect(result).toEqual({
      type: 'heading_1',
      value: [
        {
          type: 'text',
          value: 'Kitchen Sink',
        },
      ],
    })
  })

  it('should be able to transform a heading 2', () => {
    const result = transform({
      object: 'block',
      id: 'ab2b1a38-e659-4b17-b892-f72e433667c8',
      parent: {
        type: 'page_id',
        page_id: '425f9ff1-330c-4efa-926f-e36605d15b52',
      },
      created_time: '2023-03-20T01:12:00.000Z',
      last_edited_time: '2023-03-20T01:12:00.000Z',
      created_by: {
        object: 'user',
        id: '92145c17-8f0e-49d1-b045-f64238795270',
      },
      last_edited_by: {
        object: 'user',
        id: '92145c17-8f0e-49d1-b045-f64238795270',
      },
      has_children: false,
      archived: false,
      type: 'heading_2',
      heading_2: {
        is_toggleable: false,
        color: 'default',
        text: [
          {
            type: 'text',
            text: {
              content: 'H2 Heading',
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
            plain_text: 'H2 Heading',
            href: null,
          },
        ],
      },
    })

    expect(result).toEqual({
      type: 'heading_2',
      value: [
        {
          type: 'text',
          value: 'H2 Heading',
        },
      ],
    })
  })

  it('should be able to transform a heading 3', () => {
    const result = transform({
      object: 'block',
      id: 'ec79ff90-c056-49d7-989a-37b2c26e8020',
      parent: {
        type: 'page_id',
        page_id: '425f9ff1-330c-4efa-926f-e36605d15b52',
      },
      created_time: '2023-03-20T01:12:00.000Z',
      last_edited_time: '2023-03-20T01:12:00.000Z',
      created_by: {
        object: 'user',
        id: '92145c17-8f0e-49d1-b045-f64238795270',
      },
      last_edited_by: {
        object: 'user',
        id: '92145c17-8f0e-49d1-b045-f64238795270',
      },
      has_children: false,
      archived: false,
      type: 'heading_3',
      heading_3: {
        is_toggleable: false,
        color: 'default',
        text: [
          {
            type: 'text',
            text: {
              content: 'H3 Heading',
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
            plain_text: 'H3 Heading',
            href: null,
          },
        ],
      },
    })

    expect(result).toEqual({
      type: 'heading_3',
      value: [
        {
          type: 'text',
          value: 'H3 Heading',
        },
      ],
    })
  })
})
