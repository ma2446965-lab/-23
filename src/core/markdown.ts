function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function inline(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, (_m, c) => `<code>${c}</code>`);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, t, u) => `<a href="${u}">${t}</a>`);
  return out;
}

/** Convert a subset of Markdown to HTML (headings, bold, italic, code, links, lists, quotes, rules). */
export function markdownToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];
  let i = 0;
  let inList = false;

  const closeList = () => {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i]!;

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      closeList();
      html.push('<hr />');
      i++;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      closeList();
      const level = heading[1]!.length;
      html.push(`<h${level}>${inline(heading[2]!)}</h${level}>`);
      i++;
      continue;
    }

    if (/^>\s?/.test(line)) {
      closeList();
      html.push(`<blockquote>${inline(line.replace(/^>\s?/, ''))}</blockquote>`);
      i++;
      continue;
    }

    if (/^(\d+\.|-|\*)\s+/.test(line)) {
      if (!inList) {
        html.push('<ul>');
        inList = true;
      }
      html.push(`<li>${inline(line.replace(/^(\d+\.|-|\*)\s+/, ''))}</li>`);
      i++;
      continue;
    }

    if (line.trim() === '') {
      closeList();
      i++;
      continue;
    }

    closeList();
    html.push(`<p>${inline(line)}</p>`);
    i++;
  }
  closeList();
  return html.join('\n');
}

/** Convert HTML to Markdown using the browser DOM (client-side only). */
export function htmlToMarkdown(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const walk = (node: Node): string => {
    let out = '';
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        out += child.textContent ?? '';
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const el = child as HTMLElement;
        const tag = el.tagName.toLowerCase();
        const inner = walk(el);
        switch (tag) {
          case 'h1': out += `# ${inner}\n\n`; break;
          case 'h2': out += `## ${inner}\n\n`; break;
          case 'h3': out += `### ${inner}\n\n`; break;
          case 'h4': out += `#### ${inner}\n\n`; break;
          case 'h5': out += `##### ${inner}\n\n`; break;
          case 'h6': out += `###### ${inner}\n\n`; break;
          case 'p': out += `${inner}\n\n`; break;
          case 'br': out += '\n'; break;
          case 'strong': case 'b': out += `**${inner}**`; break;
          case 'em': case 'i': out += `*${inner}*`; break;
          case 'code': out += `\`${inner}\``; break;
          case 'a': out += `[${inner}](${el.getAttribute('href') ?? ''})`; break;
          case 'li': out += `- ${inner}\n`; break;
          case 'ul': case 'ol': out += `${inner}\n`; break;
          case 'blockquote': out += `> ${inner}\n`; break;
          case 'hr': out += `---\n`; break;
          default: out += inner;
        }
      }
    });
    return out;
  };
  return walk(doc.body).trim();
}
