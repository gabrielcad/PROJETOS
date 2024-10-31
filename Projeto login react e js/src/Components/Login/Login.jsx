import { faUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container">
      <form action="">
        <h1>Acesse o sistema</h1>
        <div>
          <input type="email" placeholder="E-mail" />
          <faUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="Senha" />
          <FaLock className="" />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
