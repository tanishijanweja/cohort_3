import "./App.css";
import { Otp } from "./components/Otp";

function App() {
  return (
    <div className="h-screen bg-[#092c59]">
      <br />
      <br />
      <br />
      <Otp number={20} />
    </div>
  );
}

export default App;
