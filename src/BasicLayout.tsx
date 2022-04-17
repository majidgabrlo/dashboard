import { Col, Menu, Row } from "antd";
import { AiFillHome, AiFillSetting, AiOutlineBook } from "react-icons/ai";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { SETTING_ROUTE, HOME_ROUTE } from "./Routes";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <Layout className="h-screen" style={{ direction: "rtl" }}>
      <Header className="!bg-slate-50">
        <Row className="flex items-center my-3">
          <Col span={4}>
            <div className="flex items-center gap-x-2 p-0">
              <AiOutlineBook size={30} />
              <div className="font-bold text-2xl">TESTMAKER</div>
            </div>
          </Col>        
        </Row>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="vertical"
            className="!bg-slate-50 !pt-5 sidebar-nav"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, direction: "rtl" }}
          >
            <Menu.Item icon={<AiFillHome />}>
              <NavLink to={HOME_ROUTE}>خانه</NavLink>
            </Menu.Item>
            <Menu.Item icon={<AiFillSetting />}>
              <NavLink to={SETTING_ROUTE}>تنظیمات</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="!bg-slate-50" style={{ padding: "0 24px 24px" }}>
          <Content
            className="!bg-slate-50"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
