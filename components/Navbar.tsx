import Image from "next/image"

import Link from "next/link"

import { Icon } from "./Icon";


const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Главная',},
  { href: '/', key: 'how_hilink_work', label: 'как работает Hilink?',},
  { href: '/', key: 'services', label: 'Услуги',},
  { href: '/', key: 'pricing ', label: 'Цены',},
  { href: '/', key: 'contact_us', label: 'Контакты',},
];


const Navbar = () => {
  return (
    <nav className="flexBetween 
                    max-container padding-container 
                    relative z-30 py-5">
      <Link href='/'>
        <Image src="/hilink-logo.svg" alt="logotype"
                                       width={74}
                                       height={29}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} 
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer
                            pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <button className="flex items-center gap-x-2">
          <Icon className="w-6 h-6 fill-black" 
                name={'user'} />
          Войти
        </button>
        
      </div>                           
    </nav>
  )
}

export default Navbar