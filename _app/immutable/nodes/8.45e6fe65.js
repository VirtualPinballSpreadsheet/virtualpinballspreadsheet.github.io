import{s as i,f as r,g as l,Z as h,j as p,i as c,r as o,d}from"../chunks/scheduler.c1c84dbf.js";import{S as u,i as f}from"../chunks/index.64b0efba.js";function b(s){let e,a=`<div class="text-4xl font-bold">About VPS</div> <p>VPS is community maintained database for Virtual Pinball related files and infos.</p> <p>Through the site you can search new &amp; old releases of pinball tables and additional files you
		might need to run them.</p> <p>VPS does NOT distribute any files itself. It is only a collection of what is out there and where
		to find it.</p> <h1 class="text-4xl font-bold pt-8">Search</h1> <p>Use the search to find stuff! On the right side of the searchbar, you can change what type of
		file you are looking for.</p> <h1 class="text-xl font-bold pt-4">Filter</h1> <p>Click the filter icon to the right of the search box to open the filter section. The filter
		allows you to refine your search and restrict it to certain types of features, creators,
		manufacturers or themes.</p> <h1 class="text-4xl font-bold pt-8">Tools</h1> <h1 class="text-xl font-bold">CSV Export</h1> <p>On the top right in the &quot;Tools&quot; menu, you will find the CSV export. Here you can generate CSV
		files for both Popper and PinballX.</p> <p>The export is based on your current search and filter input! If you f.ex. want to export a CSV
		file that only contains VR tables, set the filter to VR and export. You should see it change in
		the preview as you go.</p> <p>The &quot;Format Name&quot; options let you adjust the generated tablesnames to a desired format.</p> <h1 class="text-xl font-bold pt-4">Bookmarks</h1> <p>Maybe you are setting up a new library and want to browse through all of VPS. Maybe you want to
		remember a couple of files to download them later. That is what bookmarks are for.</p> <p>You can right click on any type of file and add it to your bookmarks. They will be saved in your
		local browser and persist throughout sessions. If you wanna work through a list, you can also
		check them off to keep track.</p> <h1 class="text-4xl font-bold pt-8">API</h1> <p>VPS is open source and hosted completely on github. Our &quot;database&quot; consists of one json file
		that is exposed publicly. Images are hosted on github aswell and exposed to the public. The URLs
		to the respective images is listed in the database json.</p> <p>If you want to use the database in your own application you can fetch it through this url:</p> <code>https://virtualpinballspreadsheet.github.io/vps-db/db/vpsdb.json</code> <p>The database is rebuilt regulary on every change. If you want to save on excess calls you can
		fetch this file first to get the timestamp of the latest release:</p> <code>https://virtualpinballspreadsheet.github.io/vps-db/db/lastUpdated.json</code> <p>If your version is outdated, you might fetch the latest.</p> <p>With every update, a full new pupLookup.csv is generated aswell in case you want to update yours
		on a regular basis.</p> <code>https://virtualpinballspreadsheet.github.io/vps-db/db/puplookup.csv</code> <h1 class="text-4xl font-bold pt-8">Contact</h1> <p>You can find us in <a class="text-primary-400 font-bold" href="https://discord.gg/virtual-pinball-chat-652274650524418078">Discord</a>
		in the VPS channel or on
		<a class="text-primary-400 font-bold" href="https://www.facebook.com/VPSheet">Facebook</a>. Feel
		free to contact us if you have troubles or an idea!</p> <h1 class="text-4xl font-bold pt-8">Contribute</h1> <p>If you want to contribute to either the content of the site or actual coding, feel free to
		contact us on discord in the VPS thread!</p> <a class="text-primary-400 font-bold" href="https://discord.gg/WRhR5v59">Join the Virtual Pinball Chat!</a> <p>We appreciate every little help we can get!</p> <h1 class="text-xl font-bold pt-4">Software architecture</h1> <p>The site is written in svelte and hosted on github pages. The &quot;backend&quot; is one big json file
		that is generated via a github action.</p> <code>https://github.com/VirtualPinballSpreadsheet/vps-frontend</code> <code>https://github.com/VirtualPinballSpreadsheet/vps-db</code> <p>The goal for this architecture was to be completely free and untied to anybody in particular. We
		might not be around forever in the scene and it would be shame to let the project die because
		one of us could not maintain it anymore (as seen before in the VPin scene...). This software
		stack runs completely free and is completely transferable, no personal accounts or credit cards
		involved. There were lots of challanges that could have been prevented easily with a proper
		backend. This way though the site can continue to run until github closes its doors.</p>`;return{c(){e=r("div"),e.innerHTML=a,this.h()},l(t){e=l(t,"DIV",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-122pwau"&&(e.innerHTML=a),this.h()},h(){p(e,"class","flex flex-col gap-4")},m(t,n){c(t,e,n)},p:o,i:o,o,d(t){t&&d(e)}}}class m extends u{constructor(e){super(),f(this,e,null,b,i,{})}}export{m as component};
