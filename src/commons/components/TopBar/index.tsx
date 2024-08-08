import { Layout, Menu, Tooltip } from "antd";
import type { MenuProps } from "antd";
import { decks } from "@assets";

import "./styles.scss";
import { useState } from "react";

type MenuItem = Required<MenuProps>['items'][number];

export default ((props: TopBarProps) => {
    const { Header } = Layout;

    const items: MenuItem[] = decks.map((deck, index) => ({
        key: index + 1,
        label: <Tooltip placement="bottom" title={deck.name}>
            <a href={`#chapter-${index + 1}`}>Cap {index + 1}</a>
        </Tooltip>,

    }))

    const [current, setCurrent] = useState('1');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Header>
        <h2>{props.title}</h2>
        <Menu mode="horizontal" onClick={onClick} selectedKeys={[current]} items={items} />
    </Header>
})


interface TopBarProps {
    title: string;
}