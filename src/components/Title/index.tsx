type SectionTitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {
  type?: SectionTitleType
  className?: string
  title?: string
  textSize?: string
}

export default function Title({
  className,
  type,
  title,
  textSize
}: Props): JSX.Element {
  const styles = `text-[${textSize?.replace('rem', '') ?? '4'}rem]`

  if (type) {
    const Title =
      `${type?.match(/(h1|h2|h3|h4|h5|h6)/)![0]}` as keyof JSX.IntrinsicElements

    return (
      <Title className={className ? `${styles} ${className}` : styles}>
        {title}
      </Title>
    )
  }

  return (
    <h2 className={className ? `${styles} ${className}` : styles}>{title}</h2>
  )
}
