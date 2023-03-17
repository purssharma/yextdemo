import * as React from "react";


type props = {
site:any;
};

const Header = (props: any) => {
//console.log(props);
  const {site } = props;
  return (
      <header className="site-header">
        <div className="container-lg">
            <img src={site.c_logo.url} />
            <ul className="header-menu">            
            {site.c_headerMenuList.map((menuList: any) => {
                 // console.log(menuList.link);
                  return (    <li><a href={menuList.link}> {menuList.label}</a></li>)
            })}
            </ul>
        </div>
      </header>
  );
};
export default Header;