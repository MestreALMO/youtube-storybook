import { MyButton } from "./components/myButton";
import { Title } from "./components/tittle";
import { Icon } from "./icons";
import { Cancel } from "./icons/partials/cancel";
import { DirectionSign } from "./icons/partials/directionSign";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>DevALMO, YouTube Channel</h1>

        <Title text="Title Component" />

        <MyButton color="#000" text="button app" />
        <br />

        <Icon height={"50px"} width={"50px"} viewBox={"0 0 50 50"}>
          <Cancel />
        </Icon>
        <Icon height={"50px"} width={"50px"} viewBox={"-8 0 80 80"}>
          <DirectionSign />
        </Icon>
      </div>
    </>
  );
}

export default App;
