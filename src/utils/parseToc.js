import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'

export function parseToc(mdContent) {
  const md = new MarkdownIt().use(markdownItAnchor, {
    slugify: s =>
      s
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-'),
  })

  const tokens = md.parse(mdContent, {})
  const toc = []

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type === 'heading_open') {
      const level = Number(tokens[i].tag.slice(1))
      const content = tokens[i + 1]?.content || ''
      const slug =
        tokens[i].attrs?.find(function (a) {
          return a[0] === 'id'
        })?.[1] || ''
      toc.push({ level, content, slug })
    }
  }

  return toc
}
