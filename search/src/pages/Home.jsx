import React, { useState } from "react";
import UserSearch from "../components/UserSearch";
import UserList from "../components/UserList";
import { tralnslationLang } from "../translations/languages";

function Home() {
  const [language, setLanguage] = useState(tralnslationLang.en);

  const switchLanguage = () => {
    if (language === tralnslationLang.en) {
      setLanguage(tralnslationLang.da);
    } else setLanguage(tralnslationLang.en);
  };
  return (
    <div className="container">
      <header>
        <div className="mt-2 d-md-flex justify-content-md-end">
          <button className="btn btn-dark" onClick={switchLanguage}>
            {language.languageSwitcher}
          </button>
        </div>
      </header>
      <UserSearch language={language} />
      <UserList language={language} />
    </div>
  );
}

export default Home;
