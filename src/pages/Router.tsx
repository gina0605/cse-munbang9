import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { HomePage } from './HomePage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
