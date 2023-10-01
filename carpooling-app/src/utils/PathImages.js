import Home from "../assets/images/home.svg";
import BgHome from "../assets/images/bg-home.svg";
import Circle from "../assets/icons/circle.svg";
import Onboarding1 from "../assets/images/onboarding_1.svg";
import Onboarding2 from "../assets/images/onboarding_2.svg";
import Onboarding3 from "../assets/images/onboarding_3.svg";
import Welcome from "../assets/images/welcome.svg";
export class PathImages {
  // png
  static user = require("../assets/images/user.png");

  // svg
  static home = (<Home />);
  static circle = (<Circle />);
  static bgHome = (
    <BgHome
      width={391}
      height={460}
      style={{ position: "absolute", top: 100 }}
    />
  );
  static onboarding1 = (
    <Onboarding1
      width={"100%"}
      style={{ flex: 0.4, justifyContent: "center" }}
    />
  );
  static onboarding2 = (
    <Onboarding2
      width={"100%"}
      style={{ flex: 0.4, justifyContent: "center" }}
    />
  );
  static onboarding3 = (
    <Onboarding3
      width={"100%"}
      style={{ flex: 0.4, justifyContent: "center" }}
    />
  );
  static welcome = (
    <Welcome width={"100%"} style={{ flex: 0.4, justifyContent: "center" }} />
  );
}