/* eslint-disable prettier/prettier */
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

interface auth {
  isAuth: boolean;
}

export const ProtectRoute = (auth: auth) => {
  if (!auth.isAuth) return <Navigate to="/login" replace />;
  return (
    <>
      <Outlet />
    </>
  );
};