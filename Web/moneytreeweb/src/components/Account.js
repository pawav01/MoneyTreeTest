import { AccountSummaryTable, DataSimplifier, GroupByAccount } from "../services/DataModifier";
import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Account = () => {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const simplifiedData  = DataSimplifier(user.Id, user.accounts, user.categories, user.transactions);
        //console.log(simplifiedData);  
        const groupByAccount = GroupByAccount(simplifiedData);
        //console.log(groupByAccount);
        const summaryTableData =  AccountSummaryTable(groupByAccount)
        console.log(summaryTableData);
      }, []);
}
export default Account;