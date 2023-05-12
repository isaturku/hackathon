import DynamicGrid from './dynamic-grid'
import './style.css'


const obj = {
  layout: {
    columns: ['Name', 'Surname', 'Email', 'Gender', 'Age'],
  },
  rows: [
    ['Timmy', 'Snasdell', 'tsnasdell0@senate.gov', 'Male', 58],
    ['Caleb', 'Nisen', 'cnisen1@xing.com', 'Male', 21],
    ['Bil', 'Ohrt', 'bohrt2@opensource.org', 'Male', 58],
    ['Barry', 'Perelli', 'bperelli3@scientificamerican.com', 'Male', 48],
    ['Roderigo', 'Itzkovsky', 'ritzkovsky4@redcross.org', 'Male', 60],
    ['Devland', 'Crothers', 'dcrothers5@netlog.com', 'Agender', 50],
    ['Cletus', 'John', 'cjohn6@state.gov', 'Male', 30],
    ['Bailie', 'Skune', 'bskune7@naver.com', 'Male', 51],
    ['Phyllys', 'Carnell', 'pcarnell8@woothemes.com', 'Female', 35],
    ['Tricia', 'Ibel', 'tibel9@scientificamerican.com', 'Female', 53],
    ['Alf', 'Truett', 'atruetta@moonfruit.com', 'Male', 52],
    ['Myer', 'Yuryshev', 'myuryshevb@hc360.com', 'Genderfluid', 33],
    ['Pen', 'Gierck', 'pgierckc@storify.com', 'Male', 34],
    ['Duncan', 'Lamzed', 'dlamzedd@instagram.com', 'Non-binary', 19],
    ['Cristabel', 'Robertucci', 'crobertuccie@national.com', 'Female', 47],
    ['Orly', 'Copcote', 'ocopcotef@acquirethisname.com', 'Female', 49],
    ['Britney', 'Krolle', 'bkrolleg@google.com', 'Female', 50],
    ['Elle', 'Broadhurst', 'ebroadhursth@joomla.org', 'Female', 39],
    ['Darcee', 'Leverette', 'dleverettei@people.com.cn', 'Non-binary', 42],
    ['Vaclav', 'Caistor', 'vcaistorj@patch.com', 'Agender', 26],
    ['Stace', 'Roy', 'sroyk@sakura.ne.jp', 'Agender', 31],
    ['Yolanthe', 'Morville', 'ymorvillel@sun.com', 'Female', 19],
    ['Ahmad', 'Ghidotti', 'aghidottim@shutterfly.com', 'Male', 39],
    ['Bobina', 'Baudts', 'bbaudtsn@globo.com', 'Female', 57],
    ['Consolata', 'Wheelhouse', 'cwheelhouseo@shareasale.com', 'Female', 50],
    ['Jordon', 'Elstone', 'jelstonep@miitbeian.gov.cn', 'Male', 52],
    ['Theodosia', 'Hansell', 'thansellq@drupal.org', 'Female', 30],
    ['Orsa', 'Faers', 'ofaersr@typepad.com', 'Female', 20],
    ['Xenos', 'Mangan', 'xmangans@techcrunch.com', 'Genderqueer', 35],
    ['Tresa', 'Harmes', 'tharmest@amazon.de', 'Agender', 54],
    ['Rosabelle', 'Godsil', 'rgodsilu@github.com', 'Female', 29],
    ['Radcliffe', 'Esh', 'reshv@comcast.net', 'Male', 48],
    ['Travis', 'Piburn', 'tpiburnw@ow.ly', 'Male', 45],
    ['Lucila', 'Burwell', 'lburwellx@gravatar.com', 'Female', 21],
    ['Dorthea', 'Rawlence', 'drawlencey@reddit.com', 'Female', 28],
    ['Erroll', 'Barnsdall', 'ebarnsdallz@aol.com', 'Male', 25],
    ['Augustus', 'Kliemann', 'akliemann10@yale.edu', 'Male', 39],
    ['Silvan', 'Drennan', 'sdrennan11@accuweather.com', 'Agender', 46],
    ['Jodie', 'Coaten', 'jcoaten12@fema.gov', 'Male', 21],
    ['Alyson', 'Mulhill', 'amulhill13@uiuc.edu', 'Female', 36],
    ['Rina', 'Kid', 'rkid14@arizona.edu', 'Female', 54],
    ['Sharai', 'Tingley', 'stingley15@oracle.com', 'Non-binary', 50],
    ['Lanette', 'Aicken', 'laicken16@shutterfly.com', 'Agender', 29],
    ['Marybeth', 'Dumblton', 'mdumblton17@skype.com', 'Female', 48],
    ['Andy', 'Skures', 'askures18@fotki.com', 'Female', 59],
    ['Dorette', 'Kamall', 'dkamall19@list-manage.com', 'Female', 57],
    ['Cordey', 'MacCulloch', 'cmacculloch1a@newsvine.com', 'Female', 48],
    ['Nickolaus', 'Bloan', 'nbloan1b@ycombinator.com', 'Male', 19],
    ['Grenville', 'Legon', 'glegon1c@de.vu', 'Male', 49],
    ['Sherlocke', 'Kurtis', 'skurtis1d@deliciousdays.com', 'Male', 52],
    ['Abeu', 'Dubock', 'adubock1e@opensource.org', 'Male', 56],
    ['Marlon', 'Pealing', 'mpealing1f@t-online.de', 'Male', 36],
    ['Carita', 'Sanper', 'csanper1g@vimeo.com', 'Agender', 34],
    ['Sibelle', 'Calfe', 'scalfe1h@eepurl.com', 'Female', 41],
    ['Arv', 'Colliard', 'acolliard1i@indiatimes.com', 'Male', 44],
    ['Fiona', 'McSporrin', 'fmcsporrin1j@flavors.me', 'Female', 60],
    ['Haily', 'Stoney', 'hstoney1k@livejournal.com', 'Female', 18],
    ['Mechelle', 'Scarlett', 'mscarlett1l@unc.edu', 'Female', 48],
    ['Donetta', 'Dwelly', 'ddwelly1m@thetimes.co.uk', 'Genderqueer', 59],
    ['Perren', 'Itzcovichch', 'pitzcovichch1n@arstechnica.com', 'Male', 38],
    ['Dietrich', 'Franken', 'dfranken1o@cargocollective.com', 'Male', 37],
    ['Catherine', 'Murrock', 'cmurrock1p@amazon.co.jp', 'Female', 37],
    ['Saba', 'Beany', 'sbeany1q@parallels.com', 'Female', 57],
    ['Cad', 'Davidofski', 'cdavidofski1r@biblegateway.com', 'Male', 47],
    ['Germaine', 'McAviy', 'gmcaviy1s@nifty.com', 'Male', 57],
    ['Gabbie', 'Somerfield', 'gsomerfield1t@multiply.com', 'Male', 55],
    ['Oralia', 'Raw', 'oraw1u@mac.com', 'Female', 42],
    ['Farand', 'Sexcey', 'fsexcey1v@indiegogo.com', 'Female', 52],
    ['Adolphus', 'Borell', 'aborell1w@simplemachines.org', 'Male', 24],
    ['Missy', 'Mouat', 'mmouat1x@shareasale.com', 'Female', 53],
    ['Derward', 'Stanworth', 'dstanworth1y@netscape.com', 'Male', 38],
    ['Betsy', 'Edgson', 'bedgson1z@wiley.com', 'Female', 32],
    ['Dev', 'Merriman', 'dmerriman20@un.org', 'Male', 58],
    ['Romain', 'Headings', 'rheadings21@cbc.ca', 'Male', 60],
    ['Lenora', 'McGookin', 'lmcgookin22@a8.net', 'Female', 25],
    ['Cate', 'Gallaccio', 'cgallaccio23@rambler.ru', 'Female', 23],
    ['Gunner', 'Stallwood', 'gstallwood24@yahoo.co.jp', 'Male', 31],
    ['Loraine', 'MacTeague', 'lmacteague25@wikispaces.com', 'Female', 25],
    ['Rubetta', 'McCleary', 'rmccleary26@bbc.co.uk', 'Female', 49],
    ['Hillier', 'Falvey', 'hfalvey27@addtoany.com', 'Male', 34],
    ['Brod', 'Howle', 'bhowle28@bloglines.com', 'Male', 22],
    ['Ellary', 'Paur', 'epaur29@telegraph.co.uk', 'Male', 39],
    ['Gordy', 'Carayol', 'gcarayol2a@who.int', 'Male', 40],
    ['Fedora', 'Burgoine', 'fburgoine2b@weebly.com', 'Female', 29],
    ['Nealy', 'Burde', 'nburde2c@gmpg.org', 'Male', 58],
    ['Valli', 'Fatscher', 'vfatscher2d@tripod.com', 'Female', 53],
    ['Roxine', 'Licas', 'rlicas2e@mac.com', 'Female', 48],
    ['Edward', 'Tytcomb', 'etytcomb2f@imdb.com', 'Male', 46],
    ['Gayle', 'Ferguson', 'gferguson2g@w3.org', 'Male', 47],
    ['Meir', 'Johanning', 'mjohanning2h@go.com', 'Male', 49],
    ['Wren', 'Corpes', 'wcorpes2i@ebay.com', 'Female', 41],
    ['Oona', 'Soitoux', 'osoitoux2j@elegantthemes.com', 'Female', 34],
    ['Ethelin', 'Ryles', 'eryles2k@slideshare.net', 'Female', 51],
    ['Ari', 'Mulhall', 'amulhall2l@newyorker.com', 'Male', 59],
    ['Reina', 'Earnshaw', 'rearnshaw2m@npr.org', 'Female', 20],
    ['Darrel', 'Antonsson', 'dantonsson2n@aboutads.info', 'Male', 35],
    ['Glenden', 'Rowatt', 'growatt2o@yelp.com', 'Male', 20],
    ['Roderich', 'Andrys', 'randrys2p@constantcontact.com', 'Male', 60],
    ['Erena', 'McLevie', 'emclevie2q@bravesites.com', 'Polygender', 48],
    ['Franky', 'Iacovides', 'fiacovides2r@cbsnews.com', 'Female', 47],
  ],
};

const grid = new DynamicGrid(obj,document.getElementById("grid") as HTMLDivElement);

grid.on("add",console.log);
grid.on("change",console.log);
grid.on("remove",console.log);

const addPopUp = document.getElementById("add-popup");

obj.layout.columns.forEach((col)=>{
  const colInputDiv = document.createElement("div");
  colInputDiv.className = "newRowInputContainer";
  const label = document.createElement("label");
  label.innerText = col+": ";
  const input = document.createElement("input");
});





