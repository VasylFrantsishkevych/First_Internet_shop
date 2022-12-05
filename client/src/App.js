import React, {useContext, useEffect, useState} from "react";
import {AppRouter} from "./components";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./services";

const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    },[])
  return (
    <div>
        <AppRouter/>
    </div>
  );
});

export default App;
