import { IconButton } from '@chakra-ui/react'

type Props = {
  icon: React.ElementType
  href: string
  ariaLabel: string
}

export const SocialIcon = (props: Props) => {
  return (
    <IconButton
      icon={<props.icon />}
      as="a"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      size="lg"
      m="0 8px"
      bgColor="#000"
      isRound
      aria-label={props.ariaLabel}
    />
  )
}