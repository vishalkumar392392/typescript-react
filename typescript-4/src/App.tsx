import { useRef } from "react";
import { Button } from "./components/Button";
import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };
  return (
    <div>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your Name" type="text" ref={ref} />
        <Input id="age" label="Your Age" type="number" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>

      <Button el="anchor" href="https://google.com" target="_blank">
        A Link
      </Button>
      <Button el="button">A Button</Button>
    </div>
  );
}

export default App;
