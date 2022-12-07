import React, {useContext, useEffect, useState} from "react";
import {AppRouter} from "./components";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./services";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    },[user])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

  return (
    <div>
        <AppRouter/>
    </div>
  );
});

export default App;
