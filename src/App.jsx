import { useState } from "react";
import { DefaultTemplate } from "./templates/TemplateDefault";
import { RegisterAccountForm } from "./components/RegisterAccountForm";
import { v4 as uuidv4 } from "uuid";
import { ListAccount } from "./components/ListAccount";

export const accountTypes = [
  {
    slug: "Entrada",
    label: "Entrada",
  },
  {
    slug: "Saída",
    label: "Saída",
  },
];

function App() {
  const [totalBalance, setTotalBalance] = useState(0);

  const [darkMode, setDarkMode] = useState(false);

  const [accountList, setAccountList] = useState([]);

  const addAccountToAccountList = (formData) => {
    const newAccount = {
      ...formData,
      id: uuidv4(),
      accountValue: Number(formData.accountValue),
    };
    setAccountList([...accountList, newAccount]);
    setTotalBalance(totalBalance + newAccount.accountValue)
  };

  const removeAccountFromAccountList = (accountId) => {
    const newAccountList = accountList.filter(
      (account) => account.id !== accountId
    );
    
    setAccountList(newAccountList);
    const newTotalBalance = newAccountList.reduce((previousValue, currentValue) => {return previousValue + currentValue.accountValue},0)
    
    setTotalBalance(newTotalBalance)
  };

  const editAccountFromAccountList = (accountId, accountValue) => {
    const newAccountList = accountList.map((account) => {
      if (account.id === accountId) {
        return { ...account, accountValue: Number(accountValue) };
      } else {
        return account;
      }
    });

    setAccountList(newAccountList);
  };


  // const allValues = accountList.filter(
  //   (account) => account.accountValue !== 0
  //  )

  // setTotalBalance(
  //   allValues.reduce((previousValue, currentValue) => {return previousValue + currentValue},0)
  // )


  return (
    <div className={darkMode ? "darkMode" : "lightMode"}>
      <DefaultTemplate>
        <div className="container__div">
          <RegisterAccountForm
            accountTypes={accountTypes}
            accountList={accountList}
            totalBalance={totalBalance}
            addAccountToAccountList={addAccountToAccountList}
            removeAccountFromAccountList={removeAccountFromAccountList}
          />
        </div>
      </DefaultTemplate>
    </div>
  );
}

export default App;
