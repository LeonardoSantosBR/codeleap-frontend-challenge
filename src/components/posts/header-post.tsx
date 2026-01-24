import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

/**
 *
 * @description componente que renderiza o header da empresa e função de logout
 */
export function HeaderPost() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/signup");
  };

  return (
    <>
      <header className="bg-[#7695EC] h-[80px] flex items-center justify-between px-[37px]">
        <h1 className="text-white text-[22px] font-bold">CodeLeap Network</h1>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 hover:bg-white/20 transition-colors rounded-lg"
          title="Sair"
        >
          <LogOut
            size={24}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </button>
      </header>
    </>
  );
}
