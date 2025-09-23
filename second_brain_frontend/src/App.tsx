import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon />}
        endIcon={<ShareIcon />}
        size="sm"
        title="Share"
        variants={"primary"}
      ></Button>

      <Button
        startIcon={<PlusIcon />}
        endIcon={<ShareIcon />}
        size="md"
        title="Share"
        variants={"secondary"}
      ></Button>

      <Button
        startIcon={<PlusIcon />}
        endIcon={<ShareIcon />}
        size="lg"
        title="Share"
        variants={"primary"}
      ></Button>
    </>
  );
}

export default App;
