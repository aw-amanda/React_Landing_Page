export const ListItemFormat = ({ text }: { text: string }) => {
  const parts = text.split(': ')
  return (
    <>
      {parts.length > 1 ? (
        <div className="flex flex-col gap-1 sm:gap-2">
          <strong className="font-semibold text-text-primary text-base sm:text-lg">
            {parts[0]}
          </strong>
          <span className="body-text text-sm sm:text-base">
            {parts.slice(1).join(': ')}
          </span>
        </div>
      ) : (
        <span className="body-text">{text}</span>
      )}
    </>
  )
}