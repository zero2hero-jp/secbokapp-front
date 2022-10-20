type ShowProps = {
  id: string
}

export const Show = ({ id }: ShowProps) => {
  return(
    <>
      <div>show</div>
      <div>{ id }</div>
    </>
  )
}