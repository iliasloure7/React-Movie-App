function Form() {
  return (
    <form className='w-full md:w-2/3 lg:w-3/5'>
      <div className='flex'>
        <input
          type='text'
          placeholder='Search for movie or tv show...'
          className='w-full px-4 py-3 rounded-tl-full rounded-bl-full text-black focus:outline-none'
        />
        <button
          type='submit'
          className='px-6 py-2 rounded-tr-full rounded-br-full bg-orange-500'
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
