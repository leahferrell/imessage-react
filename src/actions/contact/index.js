export const SET_CONTACT = 'SET_CONTACT';

export function setContact(initials, name){
  return {
    type: SET_CONTACT,
    initials,
    name
  }
}
