// Very basic Markdown to HTML converter (headings, bold, italic, code, lists, paragraphs)
// Note: Keep it minimal and safe for controlled content

const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const renderInline = (line: string): string => {
  // code (inline) with copy support
  let html = line.replace(/`([^`]+)`/g, (_m, p1) => `<code data-copy-code="${escapeHtml(p1)}" class="cursor-pointer" title="Copy">${escapeHtml(p1)}</code>`);
  // bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return html;
};

export const renderBasicMarkdown = (markdown: string): string => {
  const lines = markdown.trim().split(/\r?\n/);
  const parts: string[] = [];
  let inList = false;
  let inCodeBlock = false;
  let codeLang = "";
  let codeBuffer: string[] = [];

  const closeList = () => {
    if (inList) {
      parts.push('</ul>');
      inList = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!inCodeBlock && !line.trim()) {
      closeList();
      continue;
    }

    // Fenced code block start/end
    if (line.startsWith("````")) {
      // support 4 backticks too – treat as code as well
    }
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        closeList();
        inCodeBlock = true;
        codeLang = line.slice(3).trim();
        codeBuffer = [];
      } else {
        // close code block
        const rawCode = codeBuffer.join("\n");
        const escaped = escapeHtml(rawCode);
        const langClass = codeLang ? ` language-${codeLang}` : "";
        parts.push(
          `<div class="relative group">` +
            `<button type="button" class="absolute right-2 top-2 z-10 px-2 py-1 text-xs rounded-md border border-white/10 bg-white/10 hover:bg-white/20 text-gray-200" data-copy-code="${escapeHtml(
              rawCode
            )}">Copy</button>` +
            `<pre class="overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-4"><code class="${langClass}">${escaped}</code></pre>` +
          `</div>`
        );
        inCodeBlock = false;
        codeLang = "";
        codeBuffer = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(rawLine);
      continue;
    }

    // Headings
    if (line.startsWith('### ')) {
      closeList();
      parts.push(`<h3>${renderInline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      closeList();
      parts.push(`<h2>${renderInline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      closeList();
      parts.push(`<h1>${renderInline(line.slice(2))}</h1>`);
      continue;
    }

    // Lists
    if (line.startsWith('- ')) {
      if (!inList) {
        inList = true;
        parts.push('<ul>');
      }
      parts.push(`<li>${renderInline(line.slice(2))}</li>`);
      continue;
    }

    // Paragraph
    closeList();
    parts.push(`<p>${renderInline(line)}</p>`);
  }

  closeList();
  return parts.join('\n');
};
