import { useState } from "react"

export default function Q1() {
    const [amount, setAmount] = useState('')
    const [interest, setInterest] = useState('')
    const [terms, setTerms] = useState('')
    const [pay, setPay] = useState('')
    const [history, setHistory] = useState([])

    return (
        <div className='w-full flex flex-col rounded-lg border shadow-lg shadow-black justify-center items-center'>
            <div className='px-12 py-8 space-y-8 w-full'>
                <h1 className='text-2xl text-center font-bold'>Loan Calculator</h1>
                <div className='flex justify-center space-y-8'>
                    <div className='w-1/2'>
                        <input
                            type='number'
                            placeholder='Loan Amount'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className='w-full p-2 mb-4 rounded-lg'
                        />
                        <input
                            type='number'
                            placeholder='Interest Rate'
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className='w-full p-2 mb-4 rounded-lg'
                        />
                        <input
                            type='number'
                            placeholder='Terms Rate'
                            value={terms}
                            onChange={(e) => setTerms(e.target.value)}
                            className='w-full p-2 mb-4 rounded-lg'
                        />
                        <button
                            onClick={() => {
                                const total = (amount * interest * terms) / 100;
                                const monthly = (Number(amount) + Number(total)) / (terms * 12)
                                setPay(monthly)
                                setHistory([...history, {
                                    amount: amount,
                                    interest: interest,
                                    terms: terms,
                                    pay: monthly
                                }])
                            }}
                            className='bg-blue-500 text-white p-2 w-full'
                        >
                            Calculate
                        </button>
                    </div>
                </div>
            </div>
            {pay && (
                <h2 className='font-bold text-2xl mb-8'>Monthly Payment: ${pay.toFixed(2)}</h2>
            )}
            {history.length > 0 && (
                <div className='w-full mb-4'>
                    <h1 className='text-xl text-center'>Calculation History</h1>
                    <div className='flex justify-center'>
                        <div className='w-1/2'>
                            {history.map((pay, index) => (
                                <div key={index} className='p-2 mt-2 bg-gray-600 rounded-md mb-4'>
                                    Amount: ${pay.amount}, Rate: {pay.interest}%, Terms: {pay.terms} years - Monthly Payment: ${pay.pay.toFixed(2)}
                                </div>
                            ))}
                            <button onClick={() => {
                                setHistory([])
                                setPay('')
                                setAmount('')
                                setInterest('')
                                setTerms('')
                            }} className='bg-red-500 text-white p-2 w-full'>Clear History</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
