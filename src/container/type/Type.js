import React from 'react';
import "../../common/LIstCommon.less";
import "./types.less";
import "../../common/NavCommon.less";
import "../../common/index.less";

import Cake from "./class/Cake";
import Coffee from "./class/Coffee";
import Ice from "./class/Ice";
import Gift from "./class/Gift";
import Normal from "./class/Normal";
import Patch from "./class/Patch";
import NavTCommon from "../../component/NavTCommon";
import ListCommon from "../../component/ListCommon";
export default class Type extends React.Component {
  render() {
    return (
      <div>
        <NavTCommon/>
        <div className="types">
          <Cake/>
          {/*<ListCommon/>*/}
        </div>
      </div>

    )
  }
}