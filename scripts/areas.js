import {
  getAreaServices,
  getAreas,
  getGuests,
  getServices,
} from "./database.js";

const areas = getAreas();
const areaServices = getAreaServices();
const services = getServices();
const guests = getGuests();

export const areaList = () => {
  let areaHtml = `<ul class="areaUl">`;
  //debugger
  for (const area of areas) {
    areaHtml += `<li class="area" data-type="area" data-id="${area.id}" data-name="${area.trailName}"> <aside class="section"> ${area.section} </aside> <br> ${area.trailName}<br>`;
    for (const areaService of areaServices) {
      if (area.id === areaService.areaId) {
        for (const service of services) {
          if (areaService.servicesId === service.id) {
            areaHtml += `${service.service}<br>`;
          }
        }
      }
    }
    areaHtml += `</li>`;
  }
  areaHtml += `</ul>`;
  return areaHtml;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let counter = 0;
  if (itemClicked.dataset.type === "area") {
    let clickedId = itemClicked.dataset.id;

    for (const guest of guests) {
      if (parseInt(clickedId) === guest.areaId) {
        counter++;
      }
    }
    window.alert(
      `${itemClicked.dataset.name} has ${counter} guests in the area`
    );
  }
});
