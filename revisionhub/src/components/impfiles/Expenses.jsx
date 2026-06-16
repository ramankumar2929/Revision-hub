import { useEffect, useState } from "react"



function Expenses() {
    const [expensename, setexpensename] = useState("")
    const [amount, setamount] = useState(null)
    const [category, setcategory] = useState("Food")
    const [expenses, setexpenses] = useState(()=>{
        const savedexpenses = localStorage.getItem("expenses")
        return savedexpenses ? JSON.parse(savedexpenses) : [];
    })

    function handlesubmit(e) {
        e.preventDefault();
        if (expensename.trim() === "" || amount === ("") || Number(amount) <= 0) return
        setexpenses([...expenses, { name: expensename, amount: Number(amount), category: category }])
        setexpensename("")
        setamount("")
        setcategory("Food")
         
    }

    function deleteexpense(indextodelete) {
        setexpenses(expenses.filter((expense, index) => index != indextodelete))
    }

    useEffect(()=> {localStorage.setItem("expenses" , JSON.stringify(expenses))})
    return (
        <>
            <div className="expensetracker">
                <h1> 💸Expense Tracker</h1>
                <form className="expenseinfo" onSubmit={handlesubmit}>
                    <input
                        type="text"
                        placeholder="Expense name"
                        value={expensename}
                        onChange={(e) => {
                            setexpensename(e.target.value)
                        }}
                    />
                    <input type="text"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => {
                            setamount(e.target.value)
                        }}
                    />
                    <select name="category" id="category" value={category} onChange={(e)=>{setcategory(e.target.value)}}>

                        <option value="food">Food</option>
                        <option value="study">Study</option>
                        <option value="travel">Travel</option>
                        <option value="shopping">Shopping</option>
                        <option value="health">Health</option>
                        <option value="other">Other</option>
                    </select>
                    <button type="submit" >Add Expense</button>
                </form>
            </div>

            <div className="expenselist">
                {
                    expenses.map((expense, index) => {
                        return (
                            <div className="expenseitem" key={index}>
                                <span>{expense.name}</span>
                                <span>{expense.amount}</span>
                                <span>{expense.category}</span>
                                <button onClick={() => deleteexpense(index)}>🗑️</button>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}
export default Expenses