import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Parses markdown-style links [text](/url) and **bold** into safe React elements
 */
export function renderRichText(text: string): React.ReactNode {
  if (!text) return null;

  // Split by markdown link [label](url) or **bold**
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Check for markdown link [label](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      const isInternal = url.startsWith('/');
      if (isInternal) {
        return (
          <Link
            key={index}
            to={url}
            className="text-[#2563EB] hover:text-[#114088] underline decoration-[#2563EB]/50 hover:decoration-[#114088] font-semibold transition-colors inline"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2563EB] hover:text-[#114088] underline decoration-[#2563EB]/50 hover:decoration-[#114088] font-semibold transition-colors inline"
        >
          {label}
        </a>
      );
    }

    // Check for **bold**
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={index} className="font-bold text-[#0B1E3F]">
          {boldMatch[1]}
        </strong>
      );
    }

    return part;
  });
}
