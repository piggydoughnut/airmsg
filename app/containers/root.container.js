/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput,
    ListView,
    View,
    StatusBarIOS,
    Navigator,
    AlertIOS,
    TouchableOpacity
    } from 'react-native';

var Routes = require('../config/routes');

/** Pages for navigation **/
var CreateMsg = require('./createMsg.container');
var MessageMap = require('./messageMap.container');
var MessageDetail = require('./messageDetail.container');

var Profile = require('./profile.container');

var MyMessages = require('./myMessages.container');
var MainContainer = require('./main.container');
var ImageDetail = require('./imageDetail.container');

var ObjectGallery = require('./objectGallery.container');
var Register = require('./register.container');

class Root extends Component {

    renderScene(route, navigator) {
        var routeId = route.id;
        switch (routeId) {
            case Routes.mainContainer:
                return (<MainContainer navigator={navigator}/>);
            case Routes.createMsg:
                return (<CreateMsg navigator={navigator} route={route}/>);
            case Routes.messageMap:
                return (<MessageMap navigator={navigator}/>);
            case Routes.profile:
                return (<Profile navigator={navigator}/>);
            case Routes.messages:
                return (<MyMessages navigator={navigator}/>);
            case Routes.imageDetail:
                return (<ImageDetail navigator={navigator}/>);
            case Routes.messageDetail:
                return (<MessageDetail navigator={navigator} route={route}/>);
            case Routes.objectGallery:
                return (<ObjectGallery navigator={navigator}/>);
            case Routes.register:
                return (<Register navigator={navigator}/>);
        }
        return this.noRoute(navigator);
    }

    noRoute(navigator) {
        return (
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => navigator.pop()}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>No such route</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        StatusBarIOS.setStyle('light-content', true);
        return (
            <Navigator
                initialRoute={{id: Routes.mainContainer }}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.PushFromRight;
                }}
            />
        );
    }
}

module.exports = Root;

