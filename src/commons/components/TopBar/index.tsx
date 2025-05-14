import { Layout, Menu, Tooltip } from "antd";
import type { MenuProps } from "antd";

import "./styles.scss";
import { useContext, useState } from "react";
import {
  QuestionCircleOutlined,
  TrademarkCircleOutlined,
} from "@ant-design/icons";
import TipsModal from "../TipsModal";
import ProjectIcon from "../ProjectIcon";
import ProjectText from "../ProjectText";
import { StudentContext } from "@context";
import CreditsModal from "@components/CreditsModal";

type MenuItem = Required<MenuProps>["items"][number];

export default (props: TopBarProps) => {
  const { Header } = Layout;
  const [modal, openModal] = useState<boolean>(false);
  const [trademarkModal, openTrademarkModal] = useState<boolean>(false);
  const { chapters } = useContext(StudentContext);

  const items: MenuItem[] = chapters
    ? [
        {
          key: 0,
          label: (
            <button onClick={() => openTrademarkModal(true)}>
              <ProjectIcon component={TrademarkCircleOutlined} />
            </button>
          ),
        },
        {
          key: 1,
          label: (
            <button onClick={() => openModal(true)}>
              <ProjectIcon component={QuestionCircleOutlined} />
            </button>
          ),
        },
        ...chapters.map((chapter, index) => ({
          key: index + 2,
          label: (
            <Tooltip placement="bottom" title={chapter.name}>
              <a href={`#chapter-${index + 1}`}>Cap {index + 1}</a>
            </Tooltip>
          ),
        })),
      ]
    : [];

  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header>
      <ProjectText headerLevel={3}>{props.title}</ProjectText>
      {!props.hideOptions && chapters && (
        <Menu
          mode="horizontal"
          onClick={onClick}
          selectedKeys={[current]}
          items={items}
        />
      )}
      <CreditsModal
        open={trademarkModal}
        onOk={() => openTrademarkModal(false)}
      />
      <TipsModal open={modal} onOk={() => openModal(false)} />
    </Header>
  );
};

interface TopBarProps {
  title: string;
  hideOptions?: boolean;
  showBackButton?: boolean;
}
