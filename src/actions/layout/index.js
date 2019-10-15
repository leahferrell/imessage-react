export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const SET_LOADED = 'SET_LOADED';

export function toggleSettings(isSettings){
  return {
    type: TOGGLE_SETTINGS,
    isSettings
  }
}

export function loaded(){
  return {
    type: SET_LOADED
  }
}
