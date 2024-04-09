import SingleItem from './SingleItem'

const ItemList = ({ items }) => {
  const { subHeader, header } = items
  return (
    <>
      <div className=' md:w-2/3  md:ml-12'>
        <div className=' mt-12 '>
          <h1 className=' text-3xl text-gray-950'>{header}</h1>
          <p className='text-sm text-gray-600 mt-3 mb-5'>{subHeader}</p>

          <div className='grid gap-4'>
            {items.list.map((item) => {
              return <SingleItem key={item.id} {...item} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemList
