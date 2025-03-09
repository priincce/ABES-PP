import React from "react";
import ReactDOM from "react-dom/client";
import Wallpaper,{TITLE} from "./components/card";
import {Button} from "./components/button";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);


const App = (()=>{
      return (
           <div>
            <Button>Submit</Button>
            <Wallpaper username={TITLE}/>
           </div>
      );
});



// reactRoot.render(<App/>)
reactRoot.render(App())
