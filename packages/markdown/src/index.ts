import unified from 'unified'
import withShiki from '@stefanprobst/remark-shiki'
import withHtmlInMarkdown from 'rehype-raw'
import toHtml from 'rehype-stringify'
import fromMarkdown from 'remark-parse'
import toHast from 'remark-rehype'
import type {HighlighterOptions} from 'shiki'


export default async function markdownToHtml (
    markdown: string,
    options: {
        highlightOptions?: HighlighterOptions
    } = {}
) {
    const {highlightOptions = {theme: 'github-light'}} = options

    const result = await unified()
        .use(fromMarkdown)
        .use(withShiki, highlightOptions)
        .use(toHast, {allowDangerousHtml: true})
        .use(withHtmlInMarkdown)
        .use(toHtml)
        .process(markdown)

    return result.toString()
}
