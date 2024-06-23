'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  route: string,
  text: string
}

export const ActiveLinkComponent = ({ route, text }: Props) => {

  const pathName = usePathname()

  return (
    <>
      <Link href={ route }
        className={ `hover:underline ${ pathName === route && "text-black" }` }
      >
        { text }
      </Link >
    </>
  )
}