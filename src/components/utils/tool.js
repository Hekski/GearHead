import { toast } from "react-toastify";

export const showToast = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg, {
        position: toast.POSITION.TOP_CENTER
      });
      break;
    case "error":
        toast.success(msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      break;
    default:
      return false;
  }
};
