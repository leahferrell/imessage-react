export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

export function toggleSettings(isSettings){
  return {
    type: TOGGLE_SETTINGS,
    isSettings
  }
}
