import { ImPaypal } from 'react-icons/im'
import { MdLaptopChromebook } from 'react-icons/md'
import { FaBell } from 'react-icons/fa'
import { FaFileInvoice } from 'react-icons/fa6'
import { MdLocalShipping } from 'react-icons/md'

import ItemList from '../components/ItemList'
import Header from '../components/Header'

const data = [
  {
    header: 'Selling online',
    subHeader:
      'Grow your business by making it easier for your customers to pay you.',
    list: [
      {
        id: 1,
        icon: <ImPaypal />,
        title: 'PayPal buttons',
        description:
          'Create and manage secure buttons for your customers to add items to their cart, buy, donate, or subscribe.',
        btnLabel: 'Manage',
      },
      {
        id: 2,
        icon: <MdLaptopChromebook />,
        title: 'Website preferences',
        description:
          'Control how you sell online by turning on express checkouts and bringing customers back to your website after they pay with PayPal.',
        btnLabel: 'Update',
      },
      {
        id: 3,
        icon: <FaBell />,
        title: 'Instant payment notifications',
        description:
          'Stay informed by turning on notifications for payments made on your website.',
        btnLabel: 'Update',
      },
    ],
  },
  {
    header: 'Getting paid',
    subHeader: 'Choose from various payment tools to attract your customers.',
    list: [
      {
        id: 1,
        icon: <FaFileInvoice />,
        title: 'Invoices',
        description:
          'Create professional invoices and customize it as per your requirements.',
        btnLabel: 'Manage',
      },
    ],
  },
  {
    header: 'More selling tools',
    subHeader:
      'Check out the other tools that we have for you to help you sell online.',
    list: [
      {
        id: 1,
        icon: <MdLocalShipping />,
        title: 'Shipping preferences',
        description: 'Create your shipping labels for hassle-free returns.',
        btnLabel: 'Create',
      },
    ],
  },
]

const SellerTools = () => {
  return (
    <>
      <div className=' bg-gray-50'>
        <Header />
        <div className='max-w-screen-xl md:mx-auto lg:px-8 p-6 '>
          <h1 className='text-5xl leading-tight 2xl text-gray-950'>
            Seller tools
          </h1>
          <p className=' text-base text-gray-600 md:w-[53%]'>
            Sell online easily and grow your business with Seller Tools. Create
            PayPal buttons, get instant payment notifications, and do much more.
          </p>

          {data.map((items, index) => {
            return <ItemList key={index} items={items} />
          })}
        </div>
      </div>
    </>
  )
}
export default SellerTools
