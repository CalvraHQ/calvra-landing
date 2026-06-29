import type { MDXComponents } from "mdx/types";

export function getMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 mb-4 text-muted-foreground">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="underline underline-offset-4 hover:text-foreground">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-muted-foreground">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted rounded-lg p-4 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-border" />,
  };
}