import hotToast from "react-hot-toast";
export default function toast({
  text = "",
  type = "success",
  duration = 5000,
}) {
  hotToast[type](text, {
    duration,
  });
}
