interface JsonLdProps {
  data: Record<string, unknown>
}

/** Inline structured data. Content comes from lib/data only. `<` is escaped so a value can never close the script tag. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
