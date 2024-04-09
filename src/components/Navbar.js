import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ImPaypal } from 'react-icons/im'
import { IoNotifications } from 'react-icons/io5'
import { IoMdSettings, IoIosCloseCircleOutline } from 'react-icons/io'
import { AiOutlineMenuFold } from 'react-icons/ai'

import ReaponsiveMenu from './ResponsiveMenu'

const navLinks = [
  {
    id: 1,
    path: '/',
    label: 'Dashboard',
  },
  {
    id: 2,
    path: '#',
    label: 'Finances',
  },
  {
    id: 3,
    path: '#',
    label: 'Send and Request',
  },
  {
    id: 4,
    path: '#',
    label: 'Deals',
  },
  {
    id: 5,
    path: '#',
    label: 'Wallet',
  },
  {
    id: 6,
    path: '#',
    label: 'Activity',
  },
  {
    id: 7,
    path: '#',
    label: 'Help',
  },
  {
    id: 8,
    path: 'productlink',
    label: 'Product Link',
  },
]
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className='  bg-blue-900'>
        <div className='max-w-screen-xl md:mx-auto    lg:px-8 p-6 '>
          <div className='flex justify-between items-center relative'>
            <div className='flex lg:gap-8 gap-4'>
              <Link
                to='/'
                className=' text-blue-200  hover:text-blue-400  text-2xl  transition-all pr-4 inline-flex items-center'
              >
                <ImPaypal />
              </Link>

              <ul className=' lg:gap-8 gap-4 md:flex hidden items-center my-2'>
                {navLinks.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className=' text-blue-200  hover:text-blue-600  text-sm transition-all font-normal  '
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            {/* moblie menu */}
            {menu && <ReaponsiveMenu navLinks={navLinks} />}

            <ul className='gap-4 md:flex flex  items-center'>
              <li className=' text-blue-200  hover:text-blue-400  transition-all text-xl '>
                <IoNotifications />
              </li>
              <li className='  text-blue-200  hover:text-blue-400  transition-all   text-xl '>
                <IoMdSettings />
              </li>
              <li className='md:flex hidden'>
                <button className='btn  text-blue-200  text-base hover:text-blue-400  transition-all '>
                  LOG OUT
                </button>
              </li>
              <li className='flex md:hidden'>
                <button
                  className='btn  text-blue-200  text-3xl hover:text-blue-400  transition-all '
                  onClick={() => setMenu(!menu)}
                >
                  {!menu ? <AiOutlineMenuFold /> : <IoIosCloseCircleOutline />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
