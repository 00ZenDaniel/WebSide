import { Outlet } from "react-router";

export const Layout: React.FC = () => {
  return (
    <div className={""}>
      <Outlet/>
    </div>
    
  )
}