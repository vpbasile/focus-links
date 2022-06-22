import cloneDeep from "lodash/cloneDeep";
const loading = [];
export default function reducer(state = loading, { type, data }) {
  const loading = cloneDeep(state);
  switch (type) {
    case "SET_LOADING":
      return data;
    case "SHOW_LOADING":
      loading.push("");
      return loading;
    case "HIDE_LOADING":
      loading.pop("");
      return loading;
    default:
      return state;
  }
}
