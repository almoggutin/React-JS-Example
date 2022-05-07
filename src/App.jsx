import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthContextProvider from './contexts/Auth.context';
import TasksContextProvider from './contexts/Tasks.context';

import Loader from './components/shared/loader/Loader.component';
import PrivateRoute from './routes/PrivateRoute.component';

import * as storageUtils from './utils/storage.utils';

const Header = lazy(() => import('./components/shared/header/Header.component'));
const Footer = lazy(() => import('./components/shared/footer/Footer.component'));
const HomePage = lazy(() => import('./pages/home-page/HomePage.component'));
const PageNotFound = lazy(() => import('./pages/page-not-found/PageNotFound.component'));
const LoginPage = lazy(() => import('./pages/login-page/LoginPage.component'));
const SignupPage = lazy(() => import('./pages/signup-page/SignupPage.component'));
const TasksPage = lazy(() => import('./pages/tasks-page/TasksPage.component'));

const App = () => {
    useEffect(() => {
        storageUtils.createUsersCollectionOnSessionStorage();
        storageUtils.createTasksCollectionOnSessionStorage();
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <AuthContextProvider>
                <TasksContextProvider>
                    <Header />

                    <Routes>
                        <Route exact path="/" element={<HomePage />} />

                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route
                            path="/tasks"
                            element={
                                <PrivateRoute redirectPath="/login">
                                    <TasksPage />
                                </PrivateRoute>
                            }
                        />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>

                    <Footer />
                </TasksContextProvider>
            </AuthContextProvider>
        </Suspense>
    );
};

export default App;
