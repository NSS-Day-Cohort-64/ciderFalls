import { areaList } from "./areas.js";
import { guestList } from "./guests.js";
import { areaServicesList } from "./services.js";

const mainContainer = document.querySelector(".main");

const applicationHTML = `
<section class="left-aligned">

<article class="areaServices">
${areaServicesList()}
</article>

<article class="areas">
${areaList()}
</article>
</section>

<section class="right-aligned">
<article class="guests">
<h2 class="guest-header">Current Guests</h2>
${guestList()}
</article>
</section>
`;

mainContainer.innerHTML = applicationHTML;
