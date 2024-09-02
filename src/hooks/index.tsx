import { useContext, useEffect } from "react"
import { BudgetContext } from "../context"

const useBudgetContext = () => {
    const {budget,setBudget} = useContext(BudgetContext)! 

    useEffect(() => {
        fetch('https://sheet2api.com/v1/ChIyuf9XQFCK/budget-manager/P%C3%A1gina1?')
        .then(res => res.json())
        .then (data => {
            setBudget(data)
        })
    },[setBudget])

    return {
        budget
    }
    
}

export default useBudgetContext