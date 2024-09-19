interface Props {
  itemsType?: 'center' | 'stretch' | 'start' | 'end'
  justifyType?: 'center' | 'between' | 'start' | 'end' | 'around' | 'evenly'
  paddingY?: number
  paddingX?: number
  gap?: number
  children: JSX.Element | JSX.Element[]
}

export default function Card({
  paddingY,
  paddingX,
  gap,
  itemsType,
  justifyType,
  children
}: Props): JSX.Element {
  return (
    <div
      style={{ outline: '0.2px solid rgba(255, 255, 255, 0.4)' }}
      className={
        'h-[15rem] overflow-y-auto w-full sm:mt-8 md:mt-0 lg:mt-0' +
        `rounded-[0.3rem] flex flex-col ` +
        `py-${paddingY ? paddingY : `py-2`} ` +
        `${paddingY ? `py-[${paddingY}rem]`: `py-2`} ` +
        `${paddingX ? `px-[${paddingX}rem]`: `px-8`} ` +
        `items-${itemsType ? itemsType : 'start'} ` +
        `gap-${gap ? gap : 1} ` +
        `justify-${justifyType ? justifyType : 'between'}`
      }
    >
      {children}
    </div>
  )
}
