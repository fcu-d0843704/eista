import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const COLORS = {
  primaryDark: "#FFB200",
  primaryLight: "#555555"
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryDark};
  position: absolute;
  top: 2rem;
  right: 3.5rem;
  border-radius: 50%;
  height: 4.6rem;
  width: 4.6rem;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;

  @media screen and (max-width: 768px) {
    top: 1.5rem;
    right: 1rem;
    height: 3.6rem;
    width: 3.6rem;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 2rem;
  right: 3.5rem;
  background-image: linear-gradient(to top, #EBB600 0%, #E18500 100%);
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 6;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;

  @media screen and (max-width: 768px) {
    top: 1.5rem;
    right: 1rem;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 2rem;
  height: 2px;
  display: inline-block;
  margin-top: 2.3rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
  @media screen and (max-width: 768px) {
    margin-top: 1.8rem;
    width: 1.6rem;
    &::before,
    &::after {
      width: 1.6rem;
    }
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 22%;
  left: 6%;
  text-align: left;
  width: 100%;
`;

const ItemLink = styled.a`
  display: inline-block;
  font-size: 3rem;
  font-weight: 400;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1.2rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

function HamburgerMenu({isTeacher}) {
  const [click, setClick] = useState(false);
  const [teacherList, setTeacherList] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    setTeacherList(isTeacher);
  }, [isTeacher]);

  // const renderStudentList = () => {
  //   return (
  //     <>
  //       <li>
  //         <ItemLink>
  //           Courses
  //         </ItemLink>
  //       </li>
  //       <li>
  //         <ItemLink>
  //           Schedule
  //         </ItemLink>
  //       </li>
  //     </>
  //   )
  // }

  // const renderTeacherList = () => {
  //   return (
  //     <>
  //       <li>
  //         <ItemLink>
  //           Courses
  //         </ItemLink>
  //       </li>
  //       <li>
  //         <ItemLink>
  //           Create new course
  //         </ItemLink>
  //       </li>
  //       <li>
  //         <ItemLink>
  //           Make Announcement
  //         </ItemLink>
  //       </li>
  //     </>
  //   )
  // }

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>
      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink href="/">
                <a>認識我們</a>
            </ItemLink>
          </li>
          <li>
            <ItemLink href="/team">
              <a>關於團隊</a>
            </ItemLink>
          </li>
          {/* {teacherList ? renderTeacherList() : renderStudentList()}  */}
          <li>
            <ItemLink href="/team">
              <a>媒體報導</a>
            </ItemLink>
          </li>
          <li>
            <ItemLink href="/team">
              <a>社會影響</a>
            </ItemLink>
          </li>
          <li>
            <ItemLink href="/team">
              <a>常見問題</a>
            </ItemLink>
          </li>
          <li>
            <ItemLink href="/team">
              <a>聯絡我們</a>
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;