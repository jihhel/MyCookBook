import React, {useState, useEffect} from 'react';
import './MenuScreen.css';

import Menu from '../../Types/Menu';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, {DayValue, utils} from 'react-modern-calendar-datepicker'

export default function MenuScreen() {

  const [menus, setMenus] = useState<Menu[]>([]);
  const [menuDay, setMenuDay] = useState<DayValue>(utils("en").getToday());
  const [menuContent, setMenuContent] = useState("");

  // Load menus on page load
  useEffect(() => {
    const json = localStorage.getItem("menus");

    if (!json) return;

    const savedMenus = JSON.parse(json);

    if (!!savedMenus) {
      setMenus(savedMenus);
    }
  }, [])

  // Save menus when modified
  useEffect(() => {
    const json = JSON.stringify(menus);
    localStorage.setItem("menus", json);
  }, [menus])

  function printMenus() {
    if (menus.length === 0) {
      return (
        <span>Aucun menu créé pour le moment !</span>
      );
    } else {
      return (
        <div className="menus">
          {menus.map(menu => {
            console.log("menu", menu);
            return (
              <div className="menu" key={menu.recipe.toString()}>
                {/* <span>Date : {menu.date}</span>*/}
                <span>Recette : {menu.recipe}</span>
              </div>
            );
          })}
        </div>
      );
    }
  }

  function createMenu() {
    const menu = new Menu(menuDay, menuContent);
    menus.push(menu)
    setMenus(menus);
  }

  return (
    <div className="mainContainer">
      <div className="desktopCentralColumn">
        <header className="header">
          <span className="mainTitle">
            On fait son menu
          </span>
        </header>
        <div className="addMenu">
          <DatePicker value={menuDay} onChange={date => setMenuDay(date)} />
          <input type="text" className="menuInput" onChange={e => setMenuContent(e.target.value)} value={menuContent}/>
          <button className="createMenuButton" onClick={createMenu}>Créer</button>
        </div>
        {printMenus()}
      </div>
    </div>
  );
}
