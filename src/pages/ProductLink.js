import { LuCheckCircle } from 'react-icons/lu'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { MdQrCode2 } from 'react-icons/md'

const ProductLink = () => {
  return (
    <>
      <div className=' bg-gray-50 p-8 '>
        <div className=' sm:max-w-sm w-full shadow-sm bg-white mx-auto  p-4 rounded-lg '>
          <div className='flex flex-col justify-center gap-8 items-center  '>
            <span className='text-8xl text-blue-600 text-center'>
              <LuCheckCircle />
            </span>
            <p className='text-2xl font-light text-gray-950 text-center'>
              Your product link is ready
            </p>
            <p className=' text-base text-gray-600 md:w-[53%] text-center'>
              You can spread the word by sharing this link on email, social
              media, chat, whatsapp and more
            </p>

            <div className='flex gap-8 items-center justify-center'>
              <a href='#' className=''>
                <span className='text-4xl text-blue-600'>
                  <FaFacebook />
                </span>
              </a>
              <a href='#' className=''>
                <span className='text-4xl text-blue-600'>
                  <FaTwitter />
                </span>
              </a>
              <a href='#' className=''>
                <span className='text-4xl text-blue-600'>
                  <MdQrCode2 />
                </span>
              </a>
            </div>
            <div className='grid gap-6 w-full'>
              <button className='bg-blue-600 text-gray-100  px-4 py-3 rounded-full'>
                Get link
              </button>
              <button className='text-blue-600 px-6 py-3 rounded-full border-2 border-blue-600  text-center'>
                Return To Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductLink
