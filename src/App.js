import './App.css';
import YbCoreNavBar from "@yb-core-nav-bar";

function App() {
  return (
    <>
      <YbCoreNavBar
          componentType='Web'
          items={items}
          leftIcon={leftIcon}
          logoIcon={logoIcon}
          searchStyle={{width: 180, height: 32, paddingLeft: 13}}
          onChangeSearchText={(text) => console.log('Search ', text)}
          notificationCount={88}
          onClickNotification={() => console.log('On click notification')}
          userName="Test User"
          userMenuItems={avatarMenuItems}
          userPicURI={SAMPLE_ICON}
          styleConnector={styleConnector}
      />
    </>
  );
}

export default App;
