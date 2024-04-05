import React from "react";
import "./App.css";
import ExpandableText from "./assets/components/ExpandableText";

const App = () => {
  return (
    <div>
      <ExpandableText maxChar={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        blanditiis, suscipit non est id velit, excepturi veritatis ratione
        laudantium nesciunt qui cupiditate nisi ullam laboriosam odio? Impedit
        alias nesciunt eius?
      </ExpandableText>
    </div>
  );
};

export default App;
