import { Layout, Menu, Tooltip } from "antd";
import type { MenuProps } from "antd";
import { decks } from "@assets";

import "./styles.scss";
import { useState } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import TipsModal from "../TipsModal";
import ProjectIcon from "../ProjectIcon";
import ProjectText from "../ProjectText";

type MenuItem = Required<MenuProps>["items"][number];

export default (props: TopBarProps) => {
    const { Header } = Layout;
    const [modal, openModal] = useState<boolean>(false);

    const items: MenuItem[] = [
        {
            key: 0,
            label: (
                <button
                    onClick={() => openModal(true)}
                >
                    <ProjectIcon component={QuestionCircleOutlined} />
                </button>
            ),
        },
        ...decks.map((deck, index) => ({
            key: index + 1,
            label: (
                <Tooltip placement="bottom" title={deck.name}>
                    <a href={`#chapter-${index + 1}`}>Cap {index + 1}</a>
                </Tooltip>
            ),
        })),
    ];

    const [current, setCurrent] = useState("1");

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Header>
            <ProjectText headerLevel={3}>{props.title}</ProjectText>
            <Menu
                mode="horizontal"
                onClick={onClick}
                selectedKeys={[current]}
                items={items}
            />
            <TipsModal open={modal} onOk={() => openModal(false)} />
        </Header>
    );
};

interface TopBarProps {
    title: string;
}
