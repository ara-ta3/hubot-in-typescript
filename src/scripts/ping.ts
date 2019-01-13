// Description:
//   Misc
// Commands:
//   hubot ping - pong
//

import * as hubot from "hubot";

type HubotRobot = hubot.Robot<any>;
type HubotResponse = hubot.Response<HubotRobot>;

module.exports = (robot: HubotRobot) => {
  robot.respond(/ping$/, (res: HubotResponse) => {
    res.send("pong");
  });
};
