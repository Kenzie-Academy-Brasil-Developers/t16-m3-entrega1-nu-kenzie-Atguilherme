import { useState } from "react";
import { DefaultTemplate } from "./templates/TemplateDefault";
import { RegisterAccountForm } from "./components/RegisterAccountForm";
import { v4 as uuidv4 } from "uuid";

export const accountTypes = [
  {
    slug: "Entrada",
    label: "Entrada",
  },
  {
    slug: "Despesa",
    label: "Despesa",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [accountList, setAccountList] = useState([]);

  const totalBalance = accountList.reduce((previousValue, account) => {
    if (account.accountType === "Entrada") {
      return previousValue + account.accountValue;
    } else {
      return previousValue - account.accountValue;
    }
  }, 0);

  const addAccountToAccountList = (formData) => {
    const newAccount = {
      ...formData,
      id: uuidv4(),
      accountValue: Number(formData.accountValue),
    };
    setAccountList([...accountList, newAccount]);
  };

  const removeAccountFromAccountList = (accountId) => {
    const newAccountList = accountList.filter(
      (account) => account.id !== accountId
    );

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
