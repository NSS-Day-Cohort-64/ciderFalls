import { getAreaServices, getAreas, getServices } from "./database.js"

const services = getServices()
const areaServices = getAreaServices()
const areas = getAreas()


export const areaServicesList = () => {
    let servicesHTML = `<span>Park Services:</span>`;
    let isFirst = true;
    for (const service of services) {
        const comma = isFirst ? '' : ',';
        servicesHTML += `<span data-type="services" data-id="${service.id}" data-name="${service.service}">${comma} ${service.service}</span>`;
        isFirst = false;
    }
    servicesHTML += "."
    return servicesHTML;
};

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let clickedId = parseInt(itemClicked.dataset.id)
        let clickedName = itemClicked.dataset.name
        let answer = []

        if (itemClicked.dataset.type === "services") {
            for (const areaService of areaServices) {
                if (clickedId === areaService.servicesId) {
                    for (const area of areas) {
                        if (areaService.areaId === area.id) {
                            answer.push(area.trailName)
                        }
                    }
                }
            }
            window.alert(`${clickedName} is avaliable in ${answer.join(", ")}`)
        }
    }
)