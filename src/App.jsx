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

  const removeAccountFromAccountList = (accountId, accountValue) => {
    const newAccountList = accountList.filter(
      (account) => account.id !== accountId
    );
    console.log(accountValue)
    setAccountList(newAccountList);
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

  // if (accountList.length > 0) {
  //   const allEntries = accountList.filter(
  //     (account) => account.accountType === "Entrada"
  //   );

  //   const totalEntries = allEntries.reduce((previousValue, currentEntry) => {
  //     return previousValue + currentEntry.accountValue;
  //   }, 0);
  //   const allExits = accountList.filter(
  //     (account) => account.accountType === "Saída"
  //   );
  //   const totalExits = allExits.reduce((previousValue, currentExit) => {
  //     return previousValue + currentExit.accountValue;
  //   }, 0);

  //   setTotalBalance(totalEntries - totalExits);
  // } else {
  //   setTotalBalance(0);
  // }

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
