import { Link } from 'react-router-dom'

const headerLink = [
  {
    id: 1,
    path: '#',
    label: 'Account',
  },
  {
    id: 2,
    path: '#',
    label: 'Security',
  },
  {
    id: 3,
    path: '#',
    label: 'Data & Privacy',
  },
  {
    id: 4,
    path: '#',
    label: 'Payments',
  },
  {
    id: 5,
    path: '#',
    label: 'Notifications',
  },
  {
    id: 6,
    path: '/',
    label: 'Seller Tools',
  },
  {
    id: 7,
    path: '#',
    label: 'Statements and taxes',
  },
]
const Header = () => {
  return (
    <>
      <div className=' shadow-md w-full mb-2'>
        <div className='  mx-auto p-4'>
          <ul className='gap-2 lg:gap-4  flex  items-center sm:my-2 my-0 sm:justify-center justify-normal  flex-wrap'>
            {headerLink.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`text-slate-950  hover:text-blue-900 text-base rounded-full 
                    hover:bg-blue-100  transition-all font-semibold px-3 py-2 max-w-max ${
                      item.label === 'Seller Tools' &&
                      ' text-blue-900 bg-blue-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Header
