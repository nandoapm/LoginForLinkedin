type ButtonProps = {
  title: string,
}

function Button({title}: ButtonProps) {
  return(
    <button
            type="submit"
            className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {title}
          </button>
  )
}

export { Button }