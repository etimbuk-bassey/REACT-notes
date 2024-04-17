import { css } from "@emotion/css";
import React, { ChangeEvent, useState } from "react";

React;

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  completed: boolean;
  completed2: boolean;
  address: string;
  city: string;
  state: string;
  number: string;
  select: string;
}

interface IForm {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  number: string;
  select: string;
  completed: boolean;
  completed2: boolean;
}

export default function Form() {
  const [forms, setForms] = useState<IForm[]>([]);
  const [form, setForm] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    completed: false,
    completed2: false,
    number: "",
    select: "",
  });

  const handleInput = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const addForm = (form: IUser) => {
    if (form) {
      const newEntry = {
        firstname: form.firstName,
        lastname: form.lastName,
        email: form.email,
        address: form.address,
        city: form.city,
        state: form.state,
        number: form.number,
        select: form.select,
        completed: form.completed,
        completed2: form.completed2,
      };
      setForms([...forms, newEntry]);
    }
  };

  const Styles = css({
    "&": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    "& form": {
      height: "100%",
      position: "fixed",
      zIndex: "1",
      top: "0",
      left: "0",
      overflowX: "hidden",
    },
    "& .main": {
      marginLeft: "600px",
      padding: "30px",
    },
  });

  return (
    <div className={`container ${Styles}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form);
        }}
      >
        <h3>Full Name</h3>
        <div>
          <label htmlFor="input1"></label>
          <input
            placeholder="firstname"
            id="input1"
            type="text"
            name={"firstName"}
            value={form.firstName}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              handleInput("firstName", e.target.value)
            }
          />
          <label htmlFor="input2"></label>
          <input
            placeholder="lastname"
            id="input2"
            type="text"
            name={"lastName"}
            value={form.lastName}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              handleInput("lastName", e.target.value)
            }
          />
        </div>
        <h3>Email</h3>
        <div>
          <label htmlFor="input3"></label>
          <input
            placeholder="yourdaddy@gmail.com"
            id="input3"
            type="email"
            name={"email"}
            value={form.email}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              handleInput("email", e.target.value)
            }
          />
        </div>
        <h3>Address</h3>
        <div>
          <label htmlFor="input4"></label>
          <input
            type="text"
            placeholder="street addresss..."
            name={"address"}
            value={form.address}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              handleInput("address", e.target.value)
            }
          />
          <div>
            <input
              type="text"
              placeholder="city"
              name={"city"}
              value={form.city}
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                handleInput("city", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="state"
              name={"state"}
              value={form.state}
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                handleInput("state", e.target.value)
              }
            />
          </div>
        </div>

        <div>
          <div>
            <h3>phone number</h3>
            <input
              type="text"
              placeholder="080xxx-xxx-xx"
              name={"number"}
              value={form.number}
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                handleInput("number", e.target.value)
              }
            />
          </div>
          <div>
            <h3>how did you hear about us</h3>
            <select
              name={"select"}
              id=""
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleInput("select", e.target.value)
              }
            >
              <option value="">select</option>
              <option value="social media">social media</option>
              <option value="friends">friends</option>
              <option value="others">others</option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <input
              type="checkbox"
              name={"completed"}
              onChange={(e) => handleInput("completed", e.target.checked)}
            />
            <label htmlFor="">Get Push notification</label>
          </div>
          <div>
            <input
              type="checkbox"
              name={"completed2"}
              onChange={(e) => handleInput("completed2", e.target.checked)}
            />
            <label htmlFor="">Get Newsletter</label>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              addForm(form);
            }}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="main">
        {forms.map((item, id) => (
          <div key={id}>
            <h3>firstname: {item.firstname}</h3>
            <h4>lastname: {item.lastname}</h4>
            <p>email: {item.email}</p>
            <p>address: {item.address}</p>
            <p>city:{item.city}</p>
            <p>state: {item.state}</p>
            <p>number: {item.number}</p>
            <p>selected: {item.select}</p>
            <p>
              get pushed notification:{" "}
              {item.completed === true ? "true" : "false"}
            </p>
            <p>get newsletter: {item.completed2 === true ? "true" : "false"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
