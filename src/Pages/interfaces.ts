import React from 'react';
import { Theme } from '@mui/material/styles';

export interface RouterProps {
    setTheme:  React.Dispatch<React.SetStateAction<Theme>>
}

export interface PagesProps extends RouterProps {
    theme: Theme;
}

export * from './About/interfaces';
export * from './Main/interfaces';
export * from './Projects/interfaces';