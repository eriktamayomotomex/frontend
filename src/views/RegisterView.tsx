import { Link } from "react-router-dom"

export default function RegisterView() {
  return (
    <>
        <nav>
            <Link to="/auth/login">
                ¿Ya tienes una cuenta? Inicia Sesion
            </Link>
        </nav>
    </>
  )
}
