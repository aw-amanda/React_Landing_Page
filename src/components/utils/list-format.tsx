export const ListItemFormat = ({ text }: { text: string }) => {
  const parts = text.split(': ')
  return (
    <>
      {parts.length > 1 ? (
        <>
          <strong>{parts[0]}: </strong> {parts.slice(1).join(': ')}
        </>
      ) : (
        text
      )}
    </>
  )
}