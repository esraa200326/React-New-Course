import { data } from "./Data";
import Card from "./Components/Card"

export default function App(){



   console.log(data);
   const dataShow = data.map((item) => <Card pic={item.pic} title={item.title} desc={item.desc} review={item.review} Price={item.Price} ></Card>)



    return(
    <div>
        {dataShow}
  </div>
);
}