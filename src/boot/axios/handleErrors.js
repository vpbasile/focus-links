import { toast } from "../../methods";
export default function handleErrors(error) {
  const status = error?.response?.status;
  const text = status ? `Error ${status}` : "Network Error";
  const type = "error";
  toast({ text, type });
}
