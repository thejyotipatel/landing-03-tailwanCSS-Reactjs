import { ImPaypal } from 'react-icons/im'

const footerLinks1 = [
  {
    id: 1,
    path: '#',
    label: 'Help',
  },
  {
    id: 2,
    path: '#',
    label: 'Contact Us',
  },
  {
    id: 3,
    path: '#',
    label: 'Security',
  },
  {
    id: 4,
    path: '#',
    label: 'Fees ',
  },
]

const footerLinks2 = [
  {
    id: 1,
    path: '#',
    label: 'Privacy',
  },
  {
    id: 2,
    path: '#',
    label: 'Legal',
  },
  {
    id: 3,
    path: '#',
    label: 'Policy Updates',
  },
]
const Footer = () => {
  return (
    <>
      <div className=' bg-white mt-4'>
        <div className='   w-full my-2 shadow'>
          <div className='max-w-screen-xl md:mx-auto    lg:px-8 p-6 '>
            <div className='flex items-center gap-6 flex-wrap-reverse justify-center sm:justify-start'>
              <a
                href='/'
                className='  text-blue-800  text-lg font-bold  transition-all pr-8 inline-flex items-center italic '
              >
                <ImPaypal className=' text-2xl' /> Pay
                <span className=' text-blue-500'>Pal</span>
              </a>
              <ul className=' gap-6 flex   items-center my-2 flex-wrap sm:justify-start justify-center'>
                {footerLinks1.map((item) => {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.path}
                        className=' text-gray-950 hover:text-blue-600  text-sm   transition-all font-semibold'
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl md:mx-auto    lg:px-8 p-6 '>
          <div className='flex items-center gap-6 flex-wrap-reverse justify-center sm:justify-start'>
            <p className='  text-gray-600 text-sm '>
              ©1999-2022 PayPal, Inc. All rights reserved.
            </p>
            <ul className=' gap-6 flex   items-center my-2'>
              {footerLinks2.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className=' text-gray-950 hover:text-blue-600  text-sm   transition-all font-semibold'
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
