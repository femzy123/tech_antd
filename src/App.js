import './App.css';
import "antd/dist/antd.css";
import AppHeader from './components/common/Header'
import AppFooter from "./components/common/Footer";
import Home from './views/Home'

import { Layout } from 'antd';

const {Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
