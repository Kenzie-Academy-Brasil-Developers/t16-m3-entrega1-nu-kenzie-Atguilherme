import { useState } from "react";
import "../../styles/container.css";
import { ListAccount } from "../ListAccount";

export const RegisterAccountForm = ({
  accountTypes,
  accountList,
  addAccountToAccountList,
  totalBalance,
  removeAccountFromAccountList,
}) => {
  const [formData, setFormData] = useState({
    accountDescription: "",
    accountValue: "",
    accountType: "",
  });

  const submit = (event) => {
    event.preventDefault();
    addAccountToAccountList(formData);
    setFormData({
      accountDescription: "",
      accountValue: "",
      accountType: "",
    });
  };

  const isEmpty =
    formData.accountDescription === "" ||
    formData.accountValue === "" ||
    formData.accountType === "";

  return (
    <>
      <div className="form__total">
        <div className="form__container">
          <form className="form" onSubmit={submit}>
            <label className="lbl__description" htmlFor="">
              Descrição
            </label>
            <input
              className="input__description"
              placeholder="Digite aqui sua descrição"
              type="text"
              value={formData.accountDescription}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  accountDescription: event.target.value,
                })
              }
              required
            />
            <span className="span__example">Ex: Compra de Roupas</span>
            <label className="lbl__value" htmlFor="">
              Valor (R$)
            </label>
            <input
              name="input__value"
              className="input__value"
              placeholder="Digite o valor"
              type="number"
              value={formData.accountValue}
              onChange={(event) =>
                setFormData({ ...formData, accountValue: event.target.value })
              }
              required
              min={0}
            />
            <label className="lbl__valueType" htmlFor="">
              Tipo de valor
            </label>
            <select
              name="select__accountType"
              className="select__accountType"
              value={formData.accountType}
              onChange={(event) =>
                setFormData({ ...formData, accountType: event.target.value })
              }
              required
            >
              <option value="">Selecione um tipo</option>
              {accountTypes.map((account) => (
                <option key={account.slug} value={account.slug}>
                  {account.label}
                </option>
              ))}
            </select>
            <button
              className="btn__submit"
              type="submit"
              disabled={isEmpty ? true : false}
            >
              Inserir valor
            </button>
          </form>
        </div>
        <div className="totalBalance__container">
          <div className="balance__text">
            <h2>Valor total:</h2>
            <p>O valor se refere ao saldo</p>
          </div>
          <div className="balance__value">
            <span>
              {totalBalance.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
      </div>
      <aside className="aside">
        <p className="resumo">Resumo Financeiro</p>
        <ListAccount
          accountList={accountList}
          removeAccountFromAccountList={removeAccountFromAccountList}
        />
      </aside>
    </>
  );
};
