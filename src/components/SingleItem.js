const SingleItem = ({ title, description, icon, btnLabel }) => {
  return (
    <div className=' border border-solid border-slate-200   p-4 rounded-xl flex items-center sm:justify-between justify-center gap-4 sm:flex-nowrap flex-wrap'>
      <div className='flex flex-col sm:flex-row items-start sm:justify-between justify-start gap-4'>
        <span className=' text-blue-500  text-2xl bg-slate-200 rounded-full inline-flex p-2'>
          {icon}
        </span>
        <div className=''>
          <h3 className='text-lg'>{title}</h3>
          <p className=' text-sm text-gray-600'>{description}</p>
        </div>
      </div>
      <button className='text-blue-600 font-semibold'>{btnLabel}</button>
    </div>
  )
}
export default SingleItem
