// import React, { ChangeEvent, useReducer, useState } from "react";
// React;

// interface IUser {
//   // id: number;
//   name: string;
//   age: string;
//   admin: boolean;
// }

// interface IItem {
//   name: string;
//   age: string;
//   admin: boolean;
// }

// const userData: IUser[] = [
//   // {
//   //   id: 1,
//   //   name: "kunal",
//   //   age: 22,
//   //   admin: true,
//   // },
  
// ];

// const reducerMethod = (users, action) => {
//   switch (action.type) {
//     case "addUser": {
//       return [...users, action.newUser];
//     }
//     case "updateUser": {
//       return users.map((user: IUser) => {
//         if (user == action.updatedUser.id) return action.updatedUser;
//         return user;
//       });
//     }
//     case "deleteUser": {
//       return users.filter((i: number) => i !== action.id);
//     }

//     default:
//       return users;
//   }
// };

// export default function Sort() {
//   const [users, dispatch] = useReducer(reducerMethod, userData);
//   const [item, setItem] = useState<IItem>({
//     // id: "",
//     name: "",
//     age: "",
//     admin: false,
//   });

//   const handleAddUser = (item : IItem) => {
//     dispatch({
//       type: "addUser",
//       newUser: item,
//     });
//   };

//   const handleDeleteUser = (id: number) => {
//     dispatch({
//       type: "deleteUser",
//       id: id,
//     });
//   };

//   const handleInput = (key: string, value: string | boolean) => {
//     setItem((prev) => ({ ...prev, [key]: value }));
//   };

//   // console.log(dispatch, "dispatch");

//   return (
//     <div>
//       <div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleAddUser(item);
//             console.log(item);
//           }}
//         >
//           <input
//             type="text"
//             name={"name"}
//             value={item.name}
//             onInput={(e: ChangeEvent<HTMLInputElement>) =>
//               handleInput("name", e.target.value)
//             }
//           />
//           <input
//             type="number"
//             value={item.age}
//             name={"age"}
//             onInput={(e: ChangeEvent<HTMLInputElement>) =>
//               handleInput("age", e.target.value)
//             }
//           />
//           <input type="checkbox"  name={"admin"}
//             onInput={(e: ChangeEvent<HTMLInputElement>) =>
//               handleInput("admin", e.target.checked)
//             } id="" />
//           <button>add</button>
//         </form>
//       </div>
//       <div>
//         {users.map((user: IUser, id: number) => (
//           <div key={id}>
//             <h3>{user.name}</h3>
//             <p>{user.age}</p>
//             <button onClick={() => handleDeleteUser(id)}>x</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
