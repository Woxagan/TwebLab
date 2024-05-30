import {Breadcrumb, theme} from "antd";
import {Layout} from "antd";
import React from "react";
import {items} from "./MyHeader";
import MyUser from "../User/MyUser";
import UserInfo from "../User/SignUpUser";
import UpdateUsername from "../User/UserChangeData"
const {Content} = Layout;

interface MyContentProps {
    selectedItem: string;
}

const MyContent = ({ selectedItem }: MyContentProps) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const selectedCard = items.find((item) => item.key.toString() === selectedItem);

    return(
        <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Store</Breadcrumb.Item>
                <Breadcrumb.Item>site</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 290,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >{selectedItem === 'data'? (
                    <UpdateUsername/>
                ):
                selectedItem === 'local'? (
                    <UserInfo/>
                ):
                selectedItem === 'user'? (
                <MyUser/>
                ):
                 (
                <>
                    <h2>Number of card: {selectedCard?.date.NumberOfCard}</h2>
                    <p>Date of Expire: {selectedCard?.date.DateOfExpire}</p>
                    <p>Name of Owner: {selectedCard?.date.NameOfOwner}</p>
                    <p>CVC: {selectedCard?.date.CVC}</p>
                </>
            )}
            </div>
        </Content>
    );
}
export default MyContent;
