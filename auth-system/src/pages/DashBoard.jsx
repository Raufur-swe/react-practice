import useAuth from "../hooks/useAuth"
import Button from "../components/Button"

const DashBoard = () => {
  
  const { user , logout} = useAuth();
  return (
    <div className=" flex flex-col items-center justify-center h-screen " >
      <h1 className=" text-3xl font-bold mb-6 " >
        welcome , {user.name}
      </h1>
      <Button onclick={logout} >Logout</Button>
    </div>
  )
}

export default DashBoard;
