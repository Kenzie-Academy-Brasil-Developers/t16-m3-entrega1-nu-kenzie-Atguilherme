import { Header } from "../../components/Header";
import '../../styles/DefaultTemplate.css'

export const DefaultTemplate = ({ children }) => {
   return (
      <>
         <Header />
         <main className="home__main">{children}</main>
         
      </>
   );
};