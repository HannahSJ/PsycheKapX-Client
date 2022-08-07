export function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    const mm = month > 9 ? month : "0" + month;
    const dd = day > 9 ? day : "0" + day;
    const yyyy = date.getFullYear();
  
    return `${mm}/${dd}/${yyyy}`;
  }