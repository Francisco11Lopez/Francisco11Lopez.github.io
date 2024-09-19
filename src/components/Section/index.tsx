type SectionType = 'main' | 'common'

interface Props {
  type?: SectionType
  className?: string
  id?: string
  children: JSX.Element | JSX.Element[]
}

export default function Section({
  className,
  id,
  type,
  children
}: Props): JSX.Element {
  const defaultStyles = 'h-screen w-full py-[6rem] px-16 sm:items-center'

  if (type) {
    const CustomSection =
      `${type?.match(/(main|section)/)![0]}` as keyof JSX.IntrinsicElements

    if (id) {
      return (
        <CustomSection
          id={id}
          className={
            className ? `${defaultStyles} ${className}` : defaultStyles
          }
        >
          {children}
        </CustomSection>
      )
    }

    return (
      <CustomSection
        className={className ? `${defaultStyles} ${className}` : defaultStyles}
      >
        {children}
      </CustomSection>
    )
  }

  if (id) {
    return (
      <section
        id={id}
        className={className ? `${defaultStyles} ${className}` : defaultStyles}
      >
        {children}
      </section>
    )
  }

  return (
    <section
      className={className ? `${defaultStyles} ${className}` : defaultStyles}
    >
      {children}
    </section>
  )
}
