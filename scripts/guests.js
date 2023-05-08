import { getGuests } from "./database.js";

const guests = getGuests()

export const guestList = () => {
    let guestHTML = `<ul>`

    for(const guest of guests){
    guestHTML += `<li data-type="guests" data-id="${guest.id}" data-name="${guest.name}" data-areaid="${guest.areaId}">${guest.name}</li>`
} 
guestHTML += `</ul>`

return guestHTML
}
