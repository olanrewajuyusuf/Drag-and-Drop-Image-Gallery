
const Error = ({error}) => {

  return (
    <div className="w-full border-2 border-red-500 flex justify-between items-center px-3 py-1 my-3">
        <p className="text-xl font-bold">{error}</p>
        <img src="/error.png" className="w-8" alt="#" />
    </div>
  )
}

export default Error