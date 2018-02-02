import React from 'react';
import './Agreement.less'

export default class Agreement extends React.Component {
    render() {
        return <div className="Agreement_container">
            <div className="Agreement_container_mainBox">
                <p>
                    隐私条款
                </p>
                <br/>
                <p>
                    个人信息
                </p>
                <br/>
                <p>
                    一般情况下，您无须提供您的姓名或其它个人信息即可访问我们的站点。但有时我们可能需要您提供一些信息，例如为了处理订单、与您联系、提供预订服务或处理工作应聘。我们可能需要这些信息完成以上事务的处理或提供更好的服务。
                </p>
                <br/>
                <p>
                    用途
                </p>
                <br/>
                <p>
                    供我们网站交易和沟通等相关方使用，以满足您的订单等购物服务；
                </p>
                <br/>
                <p>
                    用于与您保持联系，以开展客户满意度调查、市场研究或某些事务的处理；
                </p>
                <br/>
                <p>
                    用于不记名的数据分析（例如点击流量数据）；
                </p>
                <br/>
                <p>
                    帮助发展我们的业务关系（如果您是我们网站的业务合作伙伴或批发商）；
                </p>
            </div>
        </div>
    }
}