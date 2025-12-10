import { ToastContainer } from "react-toastify";
import PageContent from "./layout/PageContent";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/thunkActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, []);
  
  return (
    <div className="w-full">
      <ToastContainer/>
      <PageContent />
    </div>
  );
}

export default App;
