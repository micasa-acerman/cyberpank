import MarkdownIt from 'markdown-it';

export const markdown = new MarkdownIt({
    html: true,
    breaks: true
})