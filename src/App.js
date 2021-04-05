import './App.css';
import "antd/dist/antd.css";
import AppHeader from './components/common/Header'

import { Layout } from 'antd';

const {Header } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
    </Layout>
  );
}

export default App;
