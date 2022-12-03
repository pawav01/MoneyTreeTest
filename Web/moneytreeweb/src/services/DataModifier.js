
export const DataSimplifier = (userId, accounts, categories, transactions) => {
    
    return transactions.map(transaction => {
        var category = categories.find(categoryItem => categoryItem.Id === transaction.CategoryId);
        var account = accounts.find(accountItem => accountItem.Id === transaction.AccountId);
        return {
            userId: userId,
            transactionId: transaction.Id,
            transactionName: transaction.Name,
            transactionAmount: transaction.Amount,
            transactionDate: transaction.TransactionDate,
            categoryId: category.Id,
            categoryName: category.Name,
            categoryType: category.Type,
            categoryBudget: category.Budget,
            accountId: account.Id,
            accountName: account.Name
        }
    }).filter(item => !!item)
}

export const GroupByAccount = (accounts, simplifiedData) => {
    return accounts.reduce((result, item) => {
        result[item.Name] = result[item.Name] || [];
        simplifiedData.map(entry => {
            if(entry.accountName === item.Name)
                result[item.Name].push(entry);
        })
        return result;
    }, Object.create(null))
}

export const GroupByCategory = (simplifiedData) => {
    return simplifiedData.reduce((result, item) => {
        result[item.categoryId] = result[item.categoryId] || [];
        result[item.categoryId].push(item);
        return result;
    }, Object.create(null))
}

export const AccountSummaryTable = (accounts, accountData) => {
    var currentDate = new Date();
    var msDay = 60*60*24*1000;
    var result = Object.keys(accountData).map(element => {
        var accountId = element == undefined ? accountData[element][0].accountId : accounts.find(entry => entry.Name === element).Id;
        var accountName = element == undefined ? accountData[element][0].accountName : accounts.find(entry => entry.Name === element).Name;
        var income30, income60, income90, expense30, expense60, expense90;
        income30 = income60 = income90 = expense30 = expense60 = expense90 = 0;
        (element != undefined ? accountData[element] : []).map(item => {
                var dateDiff = (currentDate - new Date(item.transactionDate))/msDay;
                switch(item.categoryType){
                    case 1:
                        expense30 = dateDiff <= 30 ? expense30+=item.transactionAmount : expense30;
                        expense60 = dateDiff <= 60 ? expense60+=item.transactionAmount : expense60;
                        expense90 = dateDiff <= 90 ? expense90+=item.transactionAmount : expense90;
                        break;
                    case 2: 
                        income30 = dateDiff <= 30 ? income30+=item.transactionAmount : income30;
                        income60 = dateDiff <= 60 ? income60+=item.transactionAmount : income60;
                        income90 = dateDiff <= 90 ? income90+=item.transactionAmount : income90;
                        break;
                }
        })
        return {
            accountId: accountId,
            accountName: accountName,
            income30: income30,
            income60: income60,
            income90: income90,
            expense30: expense30,
            expense60: expense60,
            expense90: expense90,
        }

    }); 
    return result;
}