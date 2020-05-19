import React from 'react'
import { TabBar } from 'antd-mobile';

import Lao from '../pages/lao/lao'
import Ju from '../pages/ju/ju'
import Hui from '../pages/hui/hui'
class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'lao',
            hidden: false,
            fullScreen: true,
        };
    }

    // renderContent(pageText) {
    //     return (
    //         <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
    //             <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
    //             <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
    //                 onClick={(e) => {
    //                     e.preventDefault();
    //                     this.setState({
    //                         hidden: !this.state.hidden,
    //                     });
    //                 }}
    //             >
    //                 Click to show/hide tab-bar
    //     </a>
    //             <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
    //                 onClick={(e) => {
    //                     e.preventDefault();
    //                     this.setState({
    //                         fullScreen: !this.state.fullScreen,
    //                     });
    //                 }}
    //             >
    //                 Click to switch fullscreen
    //     </a>
    //         </div>
    //     );
    // }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="老"
                        key="lao"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(./static/images/lao.png) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(./static/images/lao.png) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'lao'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'lao',
                            });
                        }}
                        data-seed="logId"
                    >
                        {/* {this.renderContent('Life')} */}
                        <Lao/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(./static/images/ju.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(./static/images/ju.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="菊"
                        key="ju"
                        badge={'new'}
                        selected={this.state.selectedTab === 'ju'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'ju',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {/* {this.renderContent('Koubei')} */}
                        <Ju/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(./static/images/hui.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(./static/images/hui.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="会"
                        key="hui"
                        dot
                        selected={this.state.selectedTab === 'hui'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'hui',
                            });
                        }}
                    >
                        {/* {this.renderContent('Friend')} */}
                        <Hui/>
                    </TabBar.Item>
                   
                </TabBar>
            </div>
        );
    }
}

// ReactDOM.render(<TabBarExample />, mountNode);
export default TabBarExample