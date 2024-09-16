
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateUserPage, EmpleadoPage, EmpleadosPage, HomePage, LoginPage, NotFoundPage } from "../pages";
import { PrivateLayout, PublicLayout } from "../layouts";
import PrivateRoute from "./PrivateRoute";



const AppRouter = () => {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/create-user" element={<CreateUserPage/>}/>
                </Route>


                <Route 
                    path="/" 
                    element={
                        <PrivateRoute>
                            <PrivateLayout />
                        </PrivateRoute>
                }>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/empleados" element={ <EmpleadosPage />} />
                    <Route path="/empleado/:id" element={ <EmpleadoPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;