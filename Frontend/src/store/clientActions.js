
import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE } from "./clientActionTypes";

// USER
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// ROLES
export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

// THEME
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

// LANGUAGE
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
