import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLinkComponent } from "./ActiveLink"

const NavItems = [
  {
    route: '/contact',
    text: 'contact'
  },
  {
    route: '/about',
    text: 'about'
  },
  {
    route: '/pricing',
    text: 'pricing'
  }
]

export const Navbar = () => {
  return (
    <>
      <nav className="flex bg-blue-500 p-2 m-2">
        <span className="flex-1">
          <Link href="/">
            <HomeIcon />
            home
          </Link>
        </span>
        <ul className="flex flex-row gap-4">
          {
            NavItems.map((item) => {
              return (
                <li key={ item.route }>
                  <ActiveLinkComponent route={ item.route } text={ item.text } />
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}