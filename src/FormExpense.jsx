import React from 'react'

const FormExpense = ({setShowFormExpense ,listExpenses, setListExpenses}) => {
  const refAmount = React.useRef(null)
  const refDescription = React.useRef(null)

  const handleExpense =() => {
    setListExpenses ([
      ...listExpenses,
      {
      
      description: refDescription.current.value,
      amount: refAmount.current.value
    }])
    setShowFormExpense(false)
  }
  return (
    <>
    <div className='form-expense p-4 rounded-md border border-gray-200 w-3/4 mx-auto'>
          <form action="">
            <label htmlFor="" className='block'>Description</label>
            <input type="text" className='w-full px-2 py-1 rounded-md border border-gray-200 text-black outline-none' ref={refDescription} />


            <label htmlFor="" className='block'>Amount</label>
            <input type="text" className='w-full px-2 py-1 rounded-md border border-gray-200 text-black outline-none' ref={refAmount} />

            <ul className='flex gap-2 mt-3'>
              <li className='basis-1/2'><button className='px-3 py-2 rounded-md bg-red-700 text-white w-full' type='button' onClick={handleExpense}>Add Expense</button></li>
              <li className='basis-1/2'><button className='px-3 py-2 rounded-md bg-gray-500 text-gray w-full' type='reset' onClick={()=> setShowFormExpense(false)}>Cancel</button></li>
            </ul>
          </form>
        </div>

    </>
  )
}

export default FormExpense