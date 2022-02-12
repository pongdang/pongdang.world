import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { contentContainer } from "../../style/theme";
import Search from "../../components/Search";
import { NavLink } from "react-router-dom";
import { usePostTitleList } from "./../../hooks/post-title-list";
import { useTitle } from "./../../hooks/title";

export default function ListPage() {
  const title = useTitle();
  const postList = usePostTitleList();

  return (
    <WrapperDiv>
      <h1 hidden={true}>{title.toUpperCase()}</h1>
      <Search />
      <nav>
        <ul>
          {postList.map((post, i) => (
            <li key={`post-${i + 1}`}>
              <NavLink css={navLinkStyle} to={`${i + 1}`}>
                {post}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${contentContainer};
`;

const navLinkStyle = css`
  background-color: white;
  border: 3px solid #d0d0d0;
  margin: 20px 0;
  display: block;
  padding: 20px 0;
`;