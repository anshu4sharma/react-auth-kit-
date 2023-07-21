import React from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { Link } from "react-router-dom";

const SignIn = () => {
  const signIn = useSignIn();
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const onSubmit = (e: any) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/api/v1/login", formData)
        .then(({ data, status }) => {
          console.log(data);
          if (status === 200) {
            signIn({
              token: data.token,
              // 1 hour
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: { email: "anshusahrma.me" },
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="m-10 flex gap-4">
        <input
          className="border-2 border-gray-300 "
          type={"email"}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className="border-2 border-gray-300 "
          type={"password"}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button>Submit</button>
      </form>

      <Link to="/">HOme</Link>
    </>
  );
};

export default SignIn;