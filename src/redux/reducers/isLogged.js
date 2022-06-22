const isLogged = localStorage.getItem("token") !== null;
export default function reducer(state = isLogged, { type, data }) {
  switch (type) {
    case "SET_IS_LOGGED":
      return data;
    default:
      return state;
  }
}
