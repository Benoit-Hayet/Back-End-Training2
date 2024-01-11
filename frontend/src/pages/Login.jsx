import React, { useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import Navigation from "../components/Navigation";

function Login() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (login(formValue)) {
      navigate("/home");
    }
  };

  return (
    <div>
      <Navigation />
      <form
        className="user-form"
        style={{ maxWidth: "300px", margin: "auto" }}
        onSubmit={handleLogin}
      >
        <h1>Connexion</h1>
        <MDBInput
          className="mb-4"
          value={formValue.email}
          name="email"
          onChange={onChange}
          id="validationUser01"
          required
          label="Adresse mail"
          type="email"
        />
        <MDBInput
          className="mb-4"
          value={formValue.password}
          name="password"
          onChange={onChange}
          id="validationUser02"
          required
          label="Mot de passe"
          type="password"
        />

        <MDBRow className="mb-4">
          <MDBCol className="d-flex justify-content-center">
            <MDBCheckbox
              id="form2Example3"
              label="Se souvenir de moi"
              defaultChecked
            />
          </MDBCol>
          <MDBCol>
            <a href="/forgottenpassword">Mot de passe oublié ?</a>
          </MDBCol>
        </MDBRow>

        <MDBBtn type="submit" className="mb-4" block style={{ backgroundColor: 'gray' }}>
          Se connecter
        </MDBBtn>

        <div className="text-center" style={{ marginBottom: '20px' }}>
          <p>
            Pas encore membre ? <a href="/register">Enregistrez-vous</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
