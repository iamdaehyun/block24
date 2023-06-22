import { puppyList } from "./data.js";
console.log(puppyList);

return (
  <>
    <div>
      {" "}
      {}
      {puppies.map((puppy) => {
        return <p>{puppy.name}</p>;
      })}
    </div>
  </>
);

export default App;
