import { useState } from "react";
import { puppyList } from "./data";
console.log(puppyList);

const [puppies, setPuppies] = useState(puppyList);
