export function getTime(){
  let date = new Date();

  let hours = date.getHours();
  if( hours > 12 ){
    hours -= 12;
  }else if( hours === 0){
    hours = 12;
  }
  let minutes = ("00" + date.getMinutes()).substr(-2);

  return hours+':'+minutes;
}
