import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC onClick={() => console.log("Hello!")} color="Red">
      <div>CoCk</div>
    </ChildAsFC>
  );
};

export default Parent;
