// src/prosemirrorConverter.ts

import type { ProseMirrorContent, ProseMirrorNode } from './types.js';

/**
 * Convert ProseMirror JSON to Markdown format
 */
export function convertProseMirrorToMarkdown(content: ProseMirrorContent | null | undefined): string {
  if (!content || !content.content) {
    return '';
  }

  const markdownLines: string[] = [];

  function processNode(node: ProseMirrorNode): string {
    const nodeType = node.type;
    const contentItems = node.content || [];
    const text = node.text || '';

    if (nodeType === 'heading') {
      const level = node.attrs?.level || 1;
      const headingText = contentItems.map(child => processNode(child)).join('');
      return `${'#'.repeat(level)} ${headingText}\n\n`;
    }

    if (nodeType === 'paragraph') {
      const paraText = contentItems.map(child => processNode(child)).join('');
      if (paraText.trim()) {
        return `${paraText}\n\n`;
      }
      return '\n';
    }

    if (nodeType === 'bulletList') {
      const items: string[] = [];
      for (const item of contentItems) {
        if (item.type === 'listItem') {
          const itemContent = (item.content || [])
            .map(child => processNode(child))
            .join('');
          items.push(`- ${itemContent.trim()}`);
        }
      }
      if (items.length > 0) {
        return items.join('\n') + '\n\n';
      }
      return '';
    }

    if (nodeType === 'orderedList') {
      const items: string[] = [];
      const start = node.attrs?.start || 1;
      contentItems.forEach((item, idx) => {
        if (item.type === 'listItem') {
          const itemContent = (item.content || [])
            .map(child => processNode(child))
            .join('');
          items.push(`${start + idx}. ${itemContent.trim()}`);
        }
      });
      if (items.length > 0) {
        return items.join('\n') + '\n\n';
      }
      return '';
    }

    if (nodeType === 'codeBlock') {
      const codeText = contentItems.map(child => processNode(child)).join('');
      const language = node.attrs?.language || '';
      return `\`\`\`${language}\n${codeText}\n\`\`\`\n\n`;
    }

    if (nodeType === 'blockquote') {
      const quoteText = contentItems.map(child => processNode(child)).join('');
      const quotedLines = quoteText.trim().split('\n').map(line => `> ${line}`);
      return quotedLines.join('\n') + '\n\n';
    }

    if (nodeType === 'horizontalRule') {
      return '---\n\n';
    }

    if (nodeType === 'text') {
      let formattedText = text;
      const marks = node.marks || [];

      for (const mark of marks) {
        const markType = mark.type;
        if (markType === 'bold' || markType === 'strong') {
          formattedText = `**${formattedText}**`;
        } else if (markType === 'italic' || markType === 'em') {
          formattedText = `*${formattedText}*`;
        } else if (markType === 'code') {
          formattedText = `\`${formattedText}\``;
        } else if (markType === 'link') {
          const href = mark.attrs?.href || '';
          formattedText = `[${formattedText}](${href})`;
        } else if (markType === 'strike' || markType === 'strikethrough') {
          formattedText = `~~${formattedText}~~`;
        }
      }

      return formattedText;
    }

    // Default: process child content if available
    return contentItems.map(child => processNode(child)).join('');
  }

  // Process top-level content
  for (const node of content.content) {
    const result = processNode(node);
    if (result) {
      markdownLines.push(result);
    }
  }

  return markdownLines.join('').trim();
}

/**
 * Extract plain text from ProseMirror JSON (no formatting)
 */
export function extractTextFromProseMirror(content: ProseMirrorContent | null | undefined): string {
  if (!content) {
    return '';
  }

  const textParts: string[] = [];

  function extractText(node: any): void {
    if (typeof node === 'object' && node !== null) {
      if (node.type === 'text' && node.text) {
        textParts.push(node.text);
      }
      if (node.content && Array.isArray(node.content)) {
        for (const item of node.content) {
          extractText(item);
        }
      }
    }
  }

  extractText(content);
  return textParts.join(' ');
}
