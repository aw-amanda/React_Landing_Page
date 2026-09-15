export const ListItemFormat = ({ text }: { text: string }) => {
  const idx = text.indexOf(": ")
  if (idx === -1) {
    return <span className="body-text block">{text}</span>
  }

  const heading = text.slice(0, idx)
  const body = text.slice(idx + 2)

  return (
    <div className="flex flex-col gap-1">
      <strong className="font-semibold text-primary text-base sm:text-[1.0625rem] leading-snug">
        {heading}
      </strong>
      <span className="body-text">{body}</span>
    </div>
  )
}