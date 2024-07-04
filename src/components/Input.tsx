type InputProps = {
  name: string;
  title: string;

}

function Input({name, title}: InputProps) {

  return(    
          <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{title}</label>
            <input
              id={name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div> 
  )
}

export { Input }