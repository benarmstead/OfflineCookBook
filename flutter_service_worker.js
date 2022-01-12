'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js": "727126b36f10156ef93eacdc75412f06",
"version.json": "4ed177a36c222170becea1a69741c859",
"manifest.json": "876d3d48338f224f507a3b99756c8030",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/NOTICES": "3d2f68ed6f09aeb09e492592f4f8eba9",
"assets/AssetManifest.json": "7264801020d3c74ecd35dd33d32d578d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/recipes/markdown/challah-bread.md": "2b65ee39284edef60e46da6a33cc4616",
"assets/assets/recipes/markdown/glutenfree-pfannkuchen.md": "7e57c30887eb27fd9129e9925089cc85",
"assets/assets/recipes/markdown/ragu-napoletano.md": "bca616b46f28f45648fe2bb36715cb0d",
"assets/assets/recipes/markdown/shrimp-and-grits.md": "663ed1ff65152fae60c846666c27bfe6",
"assets/assets/recipes/markdown/spanish-tortilla.md": "d064906dc3d9d3b0362c8c6720a97ca0",
"assets/assets/recipes/markdown/bloody-mary-mix.md": "1492a5f2cef54da2cbbc5d826c764048",
"assets/assets/recipes/markdown/naan-bread.md": "e2882fd7067159ff07b939fb398a2daf",
"assets/assets/recipes/markdown/ketchup.md": "b84e957a615f28b99d811d348d94953e",
"assets/assets/recipes/markdown/chocolate-chip-cookies.md": "57de974ea30fabc3b0fa6b52d448591c",
"assets/assets/recipes/markdown/chimichanga.md": "b925ce475f9b25188bbc1d5c4e1aaaec",
"assets/assets/recipes/markdown/creamy-mashed-potatoes.md": "d72c677752aaebd444db76b396bb541b",
"assets/assets/recipes/markdown/turkish-yogurt-soup.md": "fa441aa0d2fe35fc094310776593231c",
"assets/assets/recipes/markdown/eggroll-in-a-bowl.md": "d723e2f4b4edc1e1fbd710517a56934a",
"assets/assets/recipes/markdown/yogurt.md": "2573dae2a9e6cac49280607f26174d0d",
"assets/assets/recipes/markdown/pozharskiye-cutlets.md": "c60d719a4a8a8f04ee8617ed0318404a",
"assets/assets/recipes/markdown/ravioli.md": "543e63a9b6b3d5aabf41cea7b5855527",
"assets/assets/recipes/markdown/country-skillet.md": "4ce576faa91dd3884800c7cd0dce530c",
"assets/assets/recipes/markdown/classic-bechamel-sauce.md": "fc3c941ab1404f170aac883bc799d1ed",
"assets/assets/recipes/markdown/italian-bread.md": "9b74b95660c1faa16c67133fcfdb1246",
"assets/assets/recipes/markdown/banana-bread.md": "ab80c1e4e0a953b1d7718f738628a426",
"assets/assets/recipes/markdown/loaded-mexican-rice.md": "b595535bf127f769d4a160bdea75e95d",
"assets/assets/recipes/markdown/diannes-southwest-salad.md": "58fef1a59de6305231c1307cce387e2c",
"assets/assets/recipes/markdown/beef-stew.md": "c48eeffa5c54fc71bbb31136dcbdf8dc",
"assets/assets/recipes/markdown/chicken-in-red-wine-vinegar-sauce.md": "f3d498c6c54878c71f0fe9c09f83e257",
"assets/assets/recipes/markdown/hoisin-pork-belly.md": "87eeb6f8651c139f5090570dcefd149e",
"assets/assets/recipes/markdown/pan-seared-chicken.md": "49fe602e29436e242a1195b7f662b12a",
"assets/assets/recipes/markdown/bolognese-sauce.md": "dafe33965066aeaca4d4d83926b8e7ee",
"assets/assets/recipes/markdown/curry-sauce.md": "812a676756f1ce749b8c6d135e13a802",
"assets/assets/recipes/markdown/nashville-chicken.md": "a8e3896a532bb93432899f77e4f05566",
"assets/assets/recipes/markdown/aelplermagronen.md": "6ce4459f609877c09fdbd5efddabf9d7",
"assets/assets/recipes/markdown/fried-anglerfish-fillet.md": "9bf840d920bdb27abe1b4234dc96b338",
"assets/assets/recipes/markdown/garlic-toast.md": "3ce71510fffc407774218c67d37ae059",
"assets/assets/recipes/markdown/francesinha.md": "640b905a6a3dae59cec70a35ca8cfbdf",
"assets/assets/recipes/markdown/chicken-stock-bone-broth.md": "1ca969b1f50ae6738e62f2449c6fd51e",
"assets/assets/recipes/markdown/chicken-tenders-airfried.md": "a97d82c2544c0c957487febab94689b2",
"assets/assets/recipes/markdown/roasted-chicken-breast.md": "bfcd2ce75322443fe6de438530c97f6b",
"assets/assets/recipes/markdown/banana-muffins-with-chocolate.md": "f7b6e343ea454472f1085a44114b98ca",
"assets/assets/recipes/markdown/pho-soup.md": "18946dd4b80acaadc5c304779e9e10f5",
"assets/assets/recipes/markdown/lenten-chili.md": "4e228e7348f03ee124a91e2430957540",
"assets/assets/recipes/markdown/oats.md": "fee7255be0c7600d79626286bd8eae2b",
"assets/assets/recipes/markdown/simple-sauce.md": "5d84583b145e01f3144a60d613dd0326",
"assets/assets/recipes/markdown/hellfire-steak.md": "3734b2e6e46bf542a0ab07d1020b7ab0",
"assets/assets/recipes/markdown/hamburger-patties-all-beef.md": "0e05b1c780b1f33067ee80740bc7199a",
"assets/assets/recipes/markdown/ginataang-kalabasa.md": "5f578b5ecd14c8432e7c52d05db735ee",
"assets/assets/recipes/markdown/lentejas.md": "388a8a75cbe254ed623bbb096d6a0303",
"assets/assets/recipes/markdown/aljotta.md": "0e3ccd8bda5198b20a578d8d9c64a0e7",
"assets/assets/recipes/markdown/yibin-burning-noodles.md": "b161a915d27104a44152c1154e44ef7f",
"assets/assets/recipes/markdown/frittata.md": "acd22ebf2cb6d0005e916418fa5124fb",
"assets/assets/recipes/markdown/turkey-smoked.md": "506525dd4f36ac9ddd4e343f6cbd9333",
"assets/assets/recipes/markdown/russian-1000-islands-sauce.md": "c32a57e88ba29895039048ab9047f075",
"assets/assets/recipes/markdown/miso-soup.md": "6dc71a95737d85a134425521c634346c",
"assets/assets/recipes/markdown/stoemp.md": "175ac995560c3522c801e5afd48b8e9d",
"assets/assets/recipes/markdown/cooked-chickpeas.md": "76ae7fbbe491509bbbb77726c0282ac3",
"assets/assets/recipes/markdown/asian-style-chicken-sticky-sauce.md": "27928f3e63e19ce7f212cbfe1a095d3b",
"assets/assets/recipes/markdown/quarkbaellchen.md": "d8cf8d36c0f72fa3e851409311114303",
"assets/assets/recipes/markdown/danish-pancake.md": "b77e9b1c62e384370abfa9b565f11c54",
"assets/assets/recipes/markdown/sweet-potato-fries.md": "437cbdedd41cf7c65bc40cfa088a5eeb",
"assets/assets/recipes/markdown/sourdough-potato-bread.md": "f34179e77b071e5e07d407d1f4149dfa",
"assets/assets/recipes/markdown/pork-based-chili-con-carne.md": "eb8f9c26a595361f00d5e613d0f9b844",
"assets/assets/recipes/markdown/zopf.md": "2ea86887f6aae768a258f459964a6d7a",
"assets/assets/recipes/markdown/lobster-bisque.md": "14d8f88f936629820253920d9f3c2926",
"assets/assets/recipes/markdown/pork-carnitas.md": "aa64f396edea565664358d7de151e91a",
"assets/assets/recipes/markdown/basic-meatballs.md": "f837a8b2bfe3708af9c3b59249918863",
"assets/assets/recipes/markdown/collard-greens-with-smoked-duck-and-parnips.md": "ff115a70bef46857f6ae14bfe74df014",
"assets/assets/recipes/markdown/baked-mostaccioli.md": "92ad9f8671bc12a0da5efd96ea947d12",
"assets/assets/recipes/markdown/hummus.md": "f9f2ce5c949480d8a91df0581840967c",
"assets/assets/recipes/markdown/almeirim-stone-soup.md": "dde4ac9a1dc8a3de21b0db209569e1dd",
"assets/assets/recipes/markdown/yorkshire-puddings.md": "4f29b70e741b28fbb38c29a8a5c5074a",
"assets/assets/recipes/markdown/breakfast-wrap.md": "afb7814b437b561ddb17896ff4e4d613",
"assets/assets/recipes/markdown/tortellini.md": "febb420223b2766b16c33f3dfa099165",
"assets/assets/recipes/markdown/greek-easter-cookies.md": "b8c39ad5b55b32faa366e5b34a6ac499",
"assets/assets/recipes/markdown/eggs.md": "d6b51a7f883db80bb350600543475179",
"assets/assets/recipes/markdown/portuguese-steak-with-beer-sauce.md": "5ab4c4d9d2d85b6a3a1347353a641113",
"assets/assets/recipes/markdown/spicy-mayo.md": "aa5be271edf0602d9c692c07d7c47ef2",
"assets/assets/recipes/markdown/kvass.md": "e772ac41ce2c71f561b03940c87e2fcf",
"assets/assets/recipes/markdown/pan-pizza.md": "81346d3bb83022ffb99380688a060d46",
"assets/assets/recipes/markdown/salsa-verde.md": "0ca8cf27eb436ecb0bf3f3fd051b717a",
"assets/assets/recipes/markdown/merchants-buckwheat.md": "40e8ee9108576c9bc946d42a5aced2a5",
"assets/assets/recipes/markdown/fried-potatoes.md": "823bb75f1f4b6c46edf80155dd33f600",
"assets/assets/recipes/markdown/hamburger-patties.md": "795d9714eb0133fd4e0e428693c34944",
"assets/assets/recipes/markdown/pancake.md": "42dd9b8dc29955817bef7c80da654863",
"assets/assets/recipes/markdown/pepper-sauce.md": "009e4a7c16834d03de0c087ea177f511",
"assets/assets/recipes/markdown/liverpate.md": "3112bbe0cd2a7962834f89efebd185ab",
"assets/assets/recipes/markdown/chicharrones.md": "f7481327e87b8381ab22efafb3a855b3",
"assets/assets/recipes/markdown/schnitzel.md": "4a151c3d9d69c77b91561b7a23ca9a2a",
"assets/assets/recipes/markdown/lebanese-lentil-soup.md": "208699fb07da2840848b8be26ef1a09f",
"assets/assets/recipes/markdown/babas-feta-pasta.md": "9253f5114b5a50fa65baf3575d5ed2bb",
"assets/assets/recipes/markdown/hearty-breakfast-oatmeal.md": "e336b90548c78e030c1dbbdf5bac952b",
"assets/assets/recipes/markdown/cinque-pi.md": "0691b08b31bf7391cc5eb672e4e3b220",
"assets/assets/recipes/markdown/french-onion-soup.md": "76532bf31939d24a0a75b7439108c3f2",
"assets/assets/recipes/markdown/spatchcock-chicken.md": "679c55d4ec724ab0017c16d4e8e6c234",
"assets/assets/recipes/markdown/southern-biscuits.md": "0dd55c30eaf7a9163fcfb7f101cc7dad",
"assets/assets/recipes/markdown/chicken-biscuit-potpie.md": "052d74d94846c4e4c45437cf3e233096",
"assets/assets/recipes/markdown/swedish-pancakes.md": "2e3aa24f337781b3c2eae372b566ea38",
"assets/assets/recipes/markdown/tuna-salad.md": "b7fcff897cc5b75d6de131af243d181b",
"assets/assets/recipes/markdown/oatmeal-pancakes.md": "536bd1fe5a5cd4daefed96a79570d3d9",
"assets/assets/recipes/markdown/sticky-porkchops.md": "62a084f15ea458d62afac230ffd31233",
"assets/assets/recipes/markdown/maque-choux.md": "0cccd4de266452af6c23b4b33019b1e1",
"assets/assets/recipes/markdown/mayonnaise-or-aioli.md": "c05b831ed45c49ad151e358e44d9d612",
"assets/assets/recipes/markdown/parmesan-potatoes.md": "862df241d94341d6748de8396a8f0b1e",
"assets/assets/recipes/markdown/tomato-flavored-hamburger-macaroni.md": "7dbb1fd0cf35a8a1550073aae2ef3221",
"assets/assets/recipes/markdown/fajita-seasoning.md": "a3c0ac1b5e9e70e3f3a2e434630b4e4c",
"assets/assets/recipes/markdown/bolinhos-de-coco.md": "a1dea1572f6ceffb6866de90c09e4d53",
"assets/assets/recipes/markdown/roesti.md": "5415353e14df7130fdd5864d40d94ce2",
"assets/assets/recipes/markdown/cannellini-bean-salad.md": "ce1221e876b0f1629195d5ea15d11750",
"assets/assets/recipes/markdown/beef-tips.md": "33dbdf8f5061148745a7ec618416c3e0",
"assets/assets/recipes/markdown/stoofvlees.md": "496d86dd70345977c56da2b771403020",
"assets/assets/recipes/markdown/sunday-milkshake.md": "26b652dca26cf2d247eb9bb8ab3af3c6",
"assets/assets/recipes/markdown/gumbo-shrimp-and-sausage.md": "8bac2d621b50790e7b043be8c9f08433",
"assets/assets/recipes/markdown/torrijas.md": "fbd8a64ee64cf42909d7c828fe0d511d",
"assets/assets/recipes/markdown/italian-mulled-wine.md": "d9ea13aecba4616b6eba805c5ef51734",
"assets/assets/recipes/markdown/ukrainian-vareniki.md": "851394f8a8a47d23f9855d6303ca010a",
"assets/assets/recipes/markdown/corn-salsa.md": "58ad6fa231769fea3d275cb0700cc8d1",
"assets/assets/recipes/markdown/pasta-navy-style.md": "19cc29a7dd32ab9dc342953fdb1a528a",
"assets/assets/recipes/markdown/mushroom-stragonov.md": "64064f306d1b2f8b28f7a1c1d9c34026",
"assets/assets/recipes/markdown/french-mustard-sauce-porkchops.md": "7558fa75006870f721c72232f8f62314",
"assets/assets/recipes/markdown/chicken-soup.md": "687d82597322afc75027400eb26842ed",
"assets/assets/recipes/markdown/chicken-tacos.md": "9104a819dc5d779fbaf22b62698b33ba",
"assets/assets/recipes/markdown/carbonara.md": "867a07f95c09b20fd18edb5189325da4",
"assets/assets/recipes/markdown/tanzania-tea-with-milk.md": "e6feb6b63a77f304a93fb30a40549b34",
"assets/assets/recipes/markdown/beef-jerky.md": "df8927274b1fc07d89cb7e32e1f272b2",
"assets/assets/recipes/markdown/cheesy-meatballs.md": "da0d6248856a15c1c87d5d9200ca95a9",
"assets/assets/recipes/markdown/baked-salmon.md": "3372fe3d9497a5c70c8c8bf6b01091cf",
"assets/assets/recipes/markdown/zarangollo.md": "50b0f4ff4a8b6cf29e8deffa72aa7307",
"assets/assets/recipes/markdown/stir-fried-chicken-with-an-orange-sauce.md": "f17d9169dd30da4316ad5907ab99840e",
"assets/assets/recipes/markdown/potato-leek-soup.md": "4068d8f9bb7a91d811bbc205d6bb0584",
"assets/assets/recipes/markdown/sourdough-starter.md": "6eed90595ff3a79d2d866f0460f7f81f",
"assets/assets/recipes/markdown/spaghetti-alla-puttanesca.md": "edbe4d52a71c718c511b68d8157519be",
"assets/assets/recipes/markdown/kalderetang-manok.md": "367389bef58107bd4c61a2ce34e2e3e6",
"assets/assets/recipes/markdown/oaty-pancakes.md": "ee6544d37cb4b0654c35934eb86c434f",
"assets/assets/recipes/markdown/french-toast.md": "af34b9185974052672fefca2f8a1daf5",
"assets/assets/recipes/markdown/potato-and-eggplant-curry.md": "93bcfc8ef418082c8b989f5d28135711",
"assets/assets/recipes/markdown/meatloaf.md": "3e8d90b3eb28b673118d776d598ed784",
"assets/assets/recipes/markdown/apple-pie.md": "07c654b1abd8f1445fa9f620b2b9269f",
"assets/assets/recipes/markdown/scandinavian-coffee-cake.md": "826ce17230401ba42cbb73e45058c632",
"assets/assets/recipes/markdown/limoncello.md": "11b1770d06753aede8e6100e9c86bdf1",
"assets/assets/recipes/markdown/country-crisp-cereals.md": "380182c457dc7f617c783aa4bf17dddc",
"assets/assets/recipes/markdown/simple-pasta-cream-sauce.md": "3d37e150a3307dc293b90a2590e08bea",
"assets/assets/recipes/markdown/aglio-e-olio.md": "255faadcf766bad07c7b07569764a6c9",
"assets/assets/recipes/markdown/chicken-pasta-casserole.md": "fe16e28665f7b4392e6bbd0124db9063",
"assets/assets/recipes/markdown/coconut-oil-coffee.md": "2907cc38e13b2a44a3293d874ec8422a",
"assets/assets/recipes/markdown/shepherds-pie.md": "a621a7b9d0e210b53acce74620bc449b",
"assets/assets/recipes/markdown/chicken-parmesan.md": "f6db818c87a20450f43ba5bda23c756b",
"assets/assets/recipes/markdown/rice.md": "db427fb5982c24c8d3f9876330256ac1",
"assets/assets/recipes/markdown/irish-coffee.md": "07178694d34a558bb52f488c21eabd58",
"assets/assets/recipes/markdown/shakshouka.md": "07d45ec4bfd3b977aa77867c794ebf4a",
"assets/assets/recipes/markdown/french-crepes.md": "f073275fe1cfbd05bbc3bb9b85c99c99",
"assets/assets/recipes/markdown/pickled-onions.md": "1f1d59a6b306723d5071c7b336873cdb",
"assets/assets/recipes/markdown/tuhu.md": "bbf0c80133917b1e090867c9a4c0e5a7",
"assets/assets/recipes/markdown/drunken-beans.md": "874f8c3a61989de4a95d0a4ff792a3b6",
"assets/assets/recipes/markdown/mapo-tofu.md": "f6f30c4155ec37c6a7b3cb1889dafc9e",
"assets/assets/recipes/markdown/pizza-sauce.md": "294b428f5ca67d4ff8395d969399817f",
"assets/assets/recipes/markdown/paneer-tikka-masala.md": "481111ead509e46d92f4b6a3172fe9a2",
"assets/assets/recipes/markdown/tofu-stir-fry.md": "0e4cbf72dcf965e89bbaaa6adf05a490",
"assets/assets/recipes/markdown/no-knead-bread.md": "be231217b842f06ddd5d1cd5b95b054a",
"assets/assets/recipes/markdown/spaghetti-all-amatriciana.md": "a6ea69dd4e652102118b5c4d8f860d0d",
"assets/assets/recipes/markdown/guacamole.md": "659c5fddfc174b7caee62271886f2b67",
"assets/assets/recipes/markdown/refried-beans.md": "f9a0fae173c74f923a053870045264d8",
"assets/assets/recipes/markdown/ginger-garlic-broccoli.md": "792aaadc15ca4d49a18aae64293f498d",
"assets/assets/recipes/markdown/ricotta-lasagna-filling.md": "25fa6c9438e5a667ba407139fa74ce7b",
"assets/assets/recipes/markdown/cheesy-pasta-bake.md": "ce696ad522a9e13be39f5ff33fc68191",
"assets/assets/recipes/markdown/butter-chicken-masala.md": "e10faaf78744122af20e96f1f4ca2f83",
"assets/assets/recipes/markdown/pasta-alla-norma.md": "680174c500d6cf644acc5e18134d8903",
"assets/assets/recipes/markdown/brown-sauce.md": "d8c05201bd09ff18dc9259253e195932",
"assets/assets/recipes/markdown/banana-pancakes.md": "25578dcd1510aadba4bdf58af18635c2",
"assets/assets/recipes/markdown/coleslaw.md": "ff6f8a28cddc5b7df2018ed13858bb1a",
"assets/assets/recipes/markdown/broiled-trevally.md": "30d84f2bf15b2d6fce7846e99ac61d44",
"assets/assets/recipes/markdown/chicken-wings.md": "21c0aa40e62a7a37f939dfa4e0e6773d",
"assets/assets/recipes/markdown/chorizo-and-chickpea-soup.md": "449ca701aa2a4692b879897e8ba211ab",
"assets/assets/recipes/markdown/mushroom-risotto.md": "7d43b3121bd0fd801dd81ca15b8e5a42",
"assets/assets/recipes/markdown/brigadeiro.md": "a310c7231154a1221ec3ec8a1fc980b9",
"assets/assets/recipes/markdown/sourdough-loaf.md": "323cd3a751b470a34c99392819f4ab89",
"assets/assets/recipes/markdown/bread.md": "198e78760d177363c5d5b498ea34519a",
"assets/assets/recipes/markdown/pizza-dough.md": "0abc459417c97e7d34de65ed45e05665",
"assets/assets/recipes/markdown/pilaf.md": "13a96c96cbef1959c54625294fb17418",
"assets/assets/recipes/markdown/ukrainian-borscht.md": "5f555fd6e97a8f48cf7db58c845b511f",
"assets/assets/recipes/markdown/ragu.md": "bedd41768cd01503dd257ac91d6b4888",
"assets/assets/recipes/markdown/aussie-snags.md": "25106dbc16db3922de651be86892487a",
"assets/assets/recipes/markdown/bolo-do-caco.md": "f7a9cfeadea93fe0227688f2e4848481",
"assets/assets/recipes/markdown/quesadilla.md": "c1a14ac584230a10dcc59782a275ecd6",
"assets/assets/recipes/markdown/gnocchi.md": "425e28e813e15d11f891a2f225605a5d",
"assets/assets/recipes/markdown/fish-curry.md": "cfd532dacb078ca226bb4568d1b2fb63",
"assets/assets/recipes/markdown/red-sauce.md": "af144eb323b0ff379251251b60296af8",
"assets/assets/recipes/markdown/flammkuchen.md": "3fc061c16d04ecb007909dcd520b136a",
"assets/assets/recipes/markdown/miso-ginger-pork.md": "000136dec7a96678f9a03fe13b1fc10c",
"assets/assets/recipes/markdown/quickbreakfastspaghetti.md": "c31a62ab907ff4b74104de80db66c632",
"assets/assets/recipes/markdown/baked-pasta-with-broccoli.md": "ab77e34475b05ea2eade299111d0c553",
"assets/assets/recipes/markdown/chili-con-carne.md": "6e88498d6151a773635c154d3ac12bad",
"assets/assets/recipes/markdown/dried-tomato-plum-spread.md": "02ba2db13dc05fbdceee89d8e36d70a2",
"assets/assets/recipes/markdown/cheesy-potatoe-bake.md": "c7a1020f3c23d72c9ef60294e29ea5f9",
"assets/assets/recipes/markdown/onion-raitha.md": "eeca4a633d7381ecf6c0928b4b8d79e3",
"assets/assets/recipes/markdown/taco-meat.md": "53bdf9a3c0e22c68a02bb018b5b3f034",
"assets/assets/recipes/markdown/tuna-sub.md": "717384316811a92db397e03618d466d0",
"assets/assets/recipes/markdown/tiroler-groestl.md": "3934590bb1056d3b3dcda2a9466886bc",
"assets/assets/recipes/markdown/simple-chicken-curry.md": "c8a8e68fb2d86e981108863f5b139e2e",
"assets/assets/recipes/markdown/lemon-juice-salad-dressing.md": "993a94d2167907b26361209bebbac870",
"assets/assets/recipes/markdown/gluehwein.md": "2e1c538850a1c4e07aecf7d92d6d63bc",
"assets/assets/recipes/markdown/burger-dressing.md": "3c405fdf878cfe03e44cb8da4398f427",
"assets/assets/recipes/markdown/lenten-lentil-curry.md": "fb0df2c4030b1385fb24c8feb686c29a",
"assets/assets/recipes/markdown/honey-garlic-chicken.md": "594d0fa030d8acbe3a4ede6bc4d78add",
"assets/assets/recipes/markdown/carbonade.md": "697bd4741d9c093fe6828a41180a8fc9",
"assets/assets/recipes/markdown/party-mimosa.md": "729a611e0cb5a0f811a6529dff53a4b4",
"assets/assets/recipes/markdown/lemon-and-oregano-chicken-traybake.md": "06f6e151cf2b4c07db6df4a7fc496ed0",
"assets/assets/recipes/markdown/dominican-spaghetti.md": "0a0b52f5ca11a2ede631f8e72249616b",
"assets/assets/recipes/markdown/tuscan-style-pork-roast.md": "a042e846eb27188b271b0d7f9cbd34dd",
"assets/assets/recipes/markdown/erwtensoep.md": "293a53bc47b9a273a192b5c97b58220e",
"assets/assets/recipes/markdown/orange-glorious.md": "cce0757a3031dbdb989964b258143cf0",
"assets/assets/recipes/markdown/sausage-rolls.md": "b81350e2ebf9b3db876f7767cbee9111",
"assets/assets/recipes/markdown/peanut-butter.md": "ea0f8e1a1a3f2f3de5a1c9a3cbba4a51",
"assets/assets/recipes/markdown/mazurek.md": "acb4e123fe0d5126d02a4078d6fb79a0",
"assets/assets/recipes/markdown/tomato-and-grilled-paprika-soup.md": "92545796c16b3fdf7b5940332b8cf0d5",
"assets/assets/recipes/markdown/beef-kidney.md": "441cce980a79ff8f4d0742794610b437",
"assets/assets/recipes/markdown/demi-glace.md": "2ef2026f29b4f2448faf724c6caeb996",
"assets/assets/recipes/markdown/coriander-chicken.md": "a97ec1a46f4b270d50b0caf9b4eadfba",
"assets/assets/recipes/markdown/soleier.md": "d7572b90bb7597f3454d2fcd37b5472f",
"assets/assets/recipes/markdown/marinated-pork-steaks.md": "818771c754e37fbf6e26524bda63a14a",
"assets/assets/recipes/markdown/sauerkraut.md": "38885505eee24ecc67e5fb741095b949",
"assets/assets/recipes/markdown/instant-tom-yam-kung-noodle-soup.md": "da45f48ebee9462d96004ffeb2606716",
"assets/assets/recipes/markdown/pasta-sauce.md": "c6bc71cb55e78fa92313ac272e7e07a4",
"assets/assets/recipes/markdown/beef-goulash.md": "abc6ed0e28a48a9dc2835ab6e291cebb",
"assets/assets/recipes/markdown/savory-squash.md": "e9007ccea6674ce9d1b1a4df58c9b62a",
"assets/assets/recipes/markdown/orange-jam.md": "e74677016b3fc81cbb2c7b9a9a80104f",
"assets/assets/recipes/markdown/arroz-chaufa.md": "faa01542c1bd3a1e47b762fd5643a8bf",
"assets/assets/recipes/markdown/matcha-cookies.md": "b2156547b714f7f37c1d39bb717f3de7",
"assets/assets/recipes/markdown/garam-masala.md": "390a735631dfce0aff6382047a2500c5",
"assets/assets/recipes/markdown/pasta.md": "aab3025ff13a2ee36a1ea5cd4798b116",
"assets/assets/recipes/markdown/crab-salad.md": "7f13474b36e7059b57b18c56ce1dd3f7",
"assets/assets/recipes/markdown/fondue.md": "d6176636ff758537eba30ac2df4bb2e6",
"assets/assets/recipes/markdown/omelet.md": "b6a4a1e097117a01a2a51cf0ab2f150c",
"assets/assets/recipes/markdown/assam-tea.md": "74d3733a0136d9fb2619e9373d0b4ac0",
"assets/assets/recipes/markdown/chicken-tomato-spinach-curry.md": "5445f5afa899ceefd9e32d62d5267c28",
"assets/assets/recipes/markdown/breton-crepes.md": "8e8d8bf565f0105107ee219ff789e898",
"assets/assets/recipes/markdown/japanese-noodle-soup.md": "ad4f3ee0fc737c90432cf58c92651d4e",
"assets/assets/recipes/markdown/croutons.md": "48aa15b70cf9794433b7860825a9908f",
"assets/assets/recipes/markdown/lamb-biriyani.md": "f0edf0d72c26b4d9f5aebb7cfdc8d7f9",
"assets/assets/recipes/markdown/okonomiyaki.md": "f7199d8be530ecc0eaac06afaebd3514",
"assets/assets/recipes/markdown/lasagna.md": "686f8d39d8f4e76ff63bd2883ca799b8",
"assets/assets/recipes/markdown/stroganoff.md": "9bc81302bfb4cc269b9ba3ba9823baf2",
"assets/assets/recipes/markdown/caesar-salad.md": "dc4e079748ff46ca7dc158110f92bc64",
"assets/assets/recipes/markdown/cacio-e-pepe.md": "9a27c99ff8628ab5c1ce63a5788fe836",
"assets/assets/recipes/markdown/stuffed-round-squash.md": "91da9f7f0594c27a91d46a72c401aab1",
"assets/assets/recipes/markdown/apple-strudel.md": "aa12d04a30cf5c8a8d4ee525f20dc6b8",
"assets/assets/recipes/markdown/hangover-eggs.md": "3bac7aac12b068a8f4eb548e8a026fcb",
"assets/assets/recipes/markdown/pate-chinois.md": "042f145c14b97a80501e296aaf9648d5",
"assets/assets/recipes/markdown/no-knead-pizza-dough.md": "55173393c3f6961ab394b4ff676b346d",
"assets/assets/recipes/markdown/sourdough-bread-with-seeds-and-grains.md": "958b40d1b7b8d998eda2954ab82caf9f",
"assets/assets/recipes/markdown/schinkenfleckerl-gratinated.md": "d5a52865e1734c86e4835fb1bb5866fc",
"assets/assets/recipes/markdown/belgian-pear-syrup.md": "a4f06330f1e5d8629f49ca5415eb5711",
"assets/assets/recipes/markdown/spaghetti-and-meatballs.md": "3076184cd93fb6564136fbda91480c58",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "a949004ed641c2365c593322ea64a676",
"/": "a949004ed641c2365c593322ea64a676",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
