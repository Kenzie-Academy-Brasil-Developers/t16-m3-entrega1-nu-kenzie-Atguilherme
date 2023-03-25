import "../../../styles/AccountCard.css";
import styles from "../../ListAccount/style.module.css";

export const AccountCard = ({
  accountId,
  account,
  removeAccountFromAccountList,
}) => {
  return (
    <li
      className={
        account.accountType == "Despesa"
          ? styles.border_grey
          : "card__container"
      }
    >
      <div className="div__left">
        <h3>{account.accountDescription}</h3>
        <p>
          {account.accountValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}{" "}
        </p>
      </div>
      <div className="div__right">
        <p>{account.accountType}</p>
        <button
          className="btn__delete"
          onClick={() => removeAccountFromAccountList(accountId)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
};
