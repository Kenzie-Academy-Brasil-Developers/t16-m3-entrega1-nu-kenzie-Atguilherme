import { AccountCard } from "../ListAccount/AccountCard";

export const ListAccount = ({
  accountList,
  removeAccountFromAccountList,
  editAccountFromAccountList,
}) => {
  return (
    <>
      {accountList.length > 0 ? (
        <ul className="ul__container">
          {accountList.map((account) => {
            return (
              <AccountCard
                key={account.id}
                accountId={account.id}
                account={account}
                removeAccountFromAccountList={removeAccountFromAccountList}
                editAccountFromAccountList={editAccountFromAccountList}
              />
            );
          })}
        </ul>
      ) : (
        <p>Você ainda não possui nenhum lançamento.</p>
      )}
    </>
  );
};
