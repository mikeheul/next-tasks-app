"use client";
import React from 'react'
import GlobalStyleProvider from './GlobalStyleProvider';

interface Props {
    children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return <GlobalStyleProvider>{children}</GlobalStyleProvider>
}

export default ContextProvider