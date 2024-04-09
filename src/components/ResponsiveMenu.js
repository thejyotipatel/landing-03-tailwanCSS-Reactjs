import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ navLinks }) => {
  return (
    <div className=' absolute   bg-white right-0 top-10 shadow p-4 block md:hidden rounded'>
      <ul className=' gap-7 flex flex-col   items-start my-2'>
        {navLinks.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className=' hover:text-blue-400  text-blue-600  text-sm   transition-all    font-normal  lg:p-2 max-w-max  '
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default ResponsiveMenu
