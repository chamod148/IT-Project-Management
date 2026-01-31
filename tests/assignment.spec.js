const { test, expect } = require('@playwright/test');

const scenarios = [
    { 
        id: 'Pos_Fun_0001', 
        input: 'eyaa ennee naehae', 
        expected: 'එයා එන්නේ නැහැ' 
    },
    { 
        id: 'Pos_Fun_0002', 
        input: 'oyaa laeesthidha?', 
        expected: 'ඔයා ලෑස්තිද?' 
    },
    { 
        id: 'Pos_Fun_0003',
        input: 'oyaa laptop eka On karanna.', 
        expected: 'ඔයා laptop එක On කරන්න.' 
    },
    { 
        id: 'Pos_Fun_0004', 
        input: 'mama rupiyal 5,000k gevvaa', 
        expected: 'මම රුපියල් 5,000ක් ගෙව්වා' 
    },
    { 
        id: 'Pos_Fun_0005', 
        input: 'mata salli naehae.', 
        expected: 'මට සල්ලි නැහැ.' 
    },
    { 
        id: 'Pos_Fun_0006', 
        input: 'adha nam harima avul dhavasak, bus eka Full velaa thibuNa nisaa mata eekata naegaganna baeriva epaa vuNaa', 
        expected: 'අද නම් හරිම අවුල් දවසක්, bus එක Full වෙලා තිබුණ නිසා මට ඒකට නැගගන්න බැරිව එපා වුණා' 
    },
    { 
        id: 'Pos_Fun_0007', 
        input: 'meeting eka 12 venidhaadha 15 venidhaadha kiyalaa dhan naehae.', 
        expected: 'meeting එක 12 වෙනිදාද 15 වෙනිදාද කියලා දන් නැහැ.' 
    },
    { 
        id: 'Pos_Fun_0008', 
        input: 'mama adha office giyee naethi nisaa Meeting eka mis vuNaa.', 
        expected: 'මම අද office ගියේ නැති නිසා Meeting එක මිස් වුණා.' 
    },
    { 
        id: 'Pos_Fun_0009', 
        input: 'mama online Shopping site ekakin sapaththu dhekak order kaLaa, eeka delivery karana dhavasa WhatsApp ekata aavaa', 
        expected: 'මම online Shopping site එකකින් සපත්තු දෙකක් order කළා, ඒක delivery කරන දවස WhatsApp එකට ආවා' 
    },
    { 
        id: 'Pos_Fun_0010', 
        input: 'eeka harima loku thiiraNayak nisaa, mama ee gaena godak hithalaa balalaa thamayi passee uththarayak dhunnee .', 
        expected: 'ඒක හරිම ලොකු තීරණයක් නිසා, මම ඒ ගැන ගොඩක් හිතලා බලලා තමයි පස්සේ උත්තරයක් දුන්නේ .' 
    },
    { 
        id: 'Pos_Fun_0011', 
        input: 'campus ekee assignment ekak Submit karanna thibuNa nisaa, mama raee venakamma hoDHAta risarch karalaa noots tika laeesthi karagaththaa.', 
        expected: 'campus එකේ assignment එකක් Submit කරන්න තිබුණ නිසා, මම රෑ වෙනකම්ම හොඳට රිසර්ච් කරලා නෝට්ස් ටික ලෑස්ති කරගත්තා.' 
    },
    { 
        id: 'Pos_Fun_0012', 
        input: 'adha udhaeesana Campus eka laga kalabalayak  aethivunaa. police kiyanne accident ekak nisaa  road eka tika welwakata baagayak vahanna sidhu unaa. ehema unath buses saha private vehicles tikak slow vidhihata gaman kalaa. office yanna hadhapu minisunta loku apahasuvak vunaa. minissu vikalpa maarga Bhaavithaa kara ikmanin giyaa', 
        expected: 'අද උදෑසන Campus එක ලග කලබලයක්  ඇතිවුනා. police කියන්නෙ accident එකක් නිසා  road එක ටික wඑලwඅකට බාගයක් වහන්න සිදු උනා. එහෙම උනත් buses සහ private vehicles ටිකක් slow විදිහට ගමන් කලා. office යන්න හදපු මිනිසුන්ට ලොකු අපහසුවක් වුනා. මිනිස්සු විකල්ප මාර්ග භාවිතා කර ඉක්මනින් ගියා' 
    },
    { 
        id: 'Pos_Fun_0013', 
        input: 'adha dhina koLABA haa thadhasanna pradhesha vala thadha varshaavak pathitha viya haeki bava kaala gunavidhyaa dheparthamenthuva nivedhanaya kara thibee. visheesayenma rathnapura saha kaluthara dhisthrikka vala thavath kalabala kaari thaththvayak aethi viya haeki nisaa eya pilibadhava avadhaanayen sitina lesa janathaavaata dhenum dhee aetha. mita amatharava badhulla saha nuvara eli vaeni pradheesha vala manushyayanta kandha paath viimee avadhanamak pilibadhava rathu niveedhanayak nikuth kara thibee. nava thakshanaya haa upakarana yodhaganimin mee pilibadhava nitharama soyaa balana lesa adhaala nilaDhaariin upadhes dhii aetha', 
        expected: 'අද දින කොළඹ හා තදසන්න ප්‍රදෙශ වල තද වර්ශාවක් පතිත විය හැකි බව කාල ගුනවිද්යා දෙපර්තමෙන්තුව නිවෙදනය කර තිබේ. විශේසයෙන්ම රත්නපුර සහ කලුතර දිස්ත්‍රික්ක වල තවත් කලබල කාරි තත්ත්වයක් ඇති විය හැකි නිසා එය පිලිබදව අවදානයෙන් සිටින ලෙස ජනතාවාට දෙනුම් දේ ඇත. මිට අමතරව බදුල්ල සහ නුවර එලි වැනි ප්‍රදේශ වල මනුශ්යයන්ට කන්ද පාත් වීමේ අවදනමක් පිලිබදව රතු නිවේදනයක් නිකුත් කර තිබේ. නව තක්ශනය හා උපකරන යොදගනිමින් මේ පිලිබදව නිතරම සොයා බලන ලෙස අදාල නිලධාරීන් උපදෙස් දී ඇත'
    },
    { 
        id: 'Pos_Fun_0014', 
        input: 'adha api havasa gamanak yanna idhiyaa namuth tika tika vaessa nisaa api kohevath giyee naehae . tika vealaavakin apita dhaenaganna laebuna sulikunaatuvak aevith kiyalaa . ee hindha api sathutu venavaa api ee gamana nogiya eka gaena . api me thathvaya adu venekan kohevath yan naethuva inna okkoma yaaLuvoo thiranaya karaa .', 
        expected: 'අද අපි හවස ගමනක් යන්න ඉදියා නමුත් ටික ටික වැස්ස නිසා අපි කොහෙවත් ගියේ නැහැ . ටික වේලාවකින් අපිට දැනගන්න ලැබුන සුලිකුනාටුවක් ඇවිත් කියලා . ඒ හින්ද අපි සතුටු වෙනවා අපි ඒ ගමන නොගිය එක ගැන . අපි මෙ තත්වය අඩු වෙනෙකන් කොහෙවත් යන් නැතුව ඉන්න ඔක්කොම යාළුවෝ තිරනය කරා .' 
    },
    { 
        id: 'Pos_Fun_0015', 
        input: 'magee vaeda tika mama yaaluvekta  dhunnaa . eyaata mata vadaa vaeda  pilibadava loku dhaenumak thiyenavaa. ee hindhaa mama hithanthva eya eka mata vada hodhata karayi kiylaa .  mona hari  prashnayak  tiyenava  nm oyaata puluvan eyaava contact kara ganna . eyaa oyaata udhav karayi oyaagee    vaeda tika kara ganna .', 
        expected: 'මගේ වැඩ ටික මම යාලුවෙක්ට  දුන්නා . එයාට මට වඩා වැඩ  පිලිබඩව ලොකු දැනුමක් තියෙනවා. ඒ හින්දා මම හිතන්ත්ව එය එක මට වඩ හොදට කරයි කිය්ලා .  මොන හරි  ප්‍රශ්නයක්  ටියෙනව  න්ම් ඔයාට පුලුවන් එයාව contact කර ගන්න . එයා ඔයාට උදව් කරයි ඔයාගේ    වැඩ ටික කර ගන්න .' 
    },
    { 
        id: 'Pos_Fun_0016', 
        input: 'mama adha udheema 5.45ta naegitalaa, laeesthi velaa bas ekee tavun ekata giyaa. ehee gihin mulinma baeQQkuvata gihillaa ekavunt ekata salli tikak diposit kaLaa. iita passee laeptop eken ofis iimeel chek karalaa, supervisor ekkath call ekak gaththaa. havas vedhdhii traefik eka vaediyen thibuNa nisaa gedhara edhdhii tikak parakku vuNaa, eeth dhavasee vaeda tika nam hari lassanata ivara karagaththaa', 
        expected: 'මම අද උදේම 5.45ට නැගිටලා, ලෑස්ති වෙලා බස් එකේ ටවුන් එකට ගියා. එහේ ගිහින් මුලින්ම බැංකුවට ගිහිල්ලා එකවුන්ට් එකට සල්ලි ටිකක් ඩිපොසිට් කළා. ඊට පස්සේ ලැප්ටොප් එකෙන් ඔෆිස් ඊමේල් චෙක් කරලා, supervisor එක්කත් call එකක් ගත්තා. හවස් වෙද්දී ට්‍රැෆික් එක වැඩියෙන් තිබුණ නිසා ගෙදර එද්දී ටිකක් පරක්කු වුණා, ඒත් දවසේ වැඩ ටික නම් හරි ලස්සනට ඉවර කරගත්තා' 
    },
    { 
        id: 'Pos_Fun_0017', 
        input: 'oyaata puLuvandha karuNaakaralaa magee PIN eka dhaalaa, aapahu Login venna balanna? haebaeyi oyaata eeka karanna apahasuyi nam mata kiyanna', 
        expected: 'ඔයාට පුළුවන්ද කරුණාකරලා මගේ PIN එක දාලා, ආපහු Login වෙන්න බලන්න? හැබැයි ඔයාට ඒක කරන්න අපහසුයි නම් මට කියන්න' 
    },
    { 
        id: 'Pos_Fun_0018', 
        input: 'kohomadha oyaata? samahara velaavata WiFi hariyata naehae, ehema venavaa nam Meeting eka kal dhaanna  puLuvandha kiyalaa ahanavaa.', 
        expected: 'කොහොමද ඔයාට? සමහර වෙලාවට WiFi හරියට නැහැ, එහෙම වෙනවා නම් Meeting එක කල් දාන්න  පුළුවන්ද කියලා අහනවා.' 
    },
    { 
        id: 'Pos_Fun_0019', 
        input: 'mata nidhimathayi, namuth adha udhee 7.30ta meeting ekak thiyenavaa. passee office enna parakku vuNa nisaa nidhahasata karuNak Excuse ekak idhiripath karanna oonee.', 
        expected: 'මට නිදිමතයි, නමුත් අද උදේ 7.30ට meeting එකක් තියෙනවා. පස්සේ office එන්න පරක්කු වුණ නිසා නිදහසට කරුණක් Excuse එකක් ඉදිරිපත් කරන්න ඕනේ.' 
    },
    { 
        id: 'Pos_Fun_0020', 
        input: 'anee machQQ, eLa Idea ekak thiyenavaa .TikTok  kantent ekak hadhamu. kantent plan eka, Caption , Hashtags saha aplood karana velaava thiiraNaya karamu', 
        expected: 'අනේ මචං, එළ Idea එකක් තියෙනවා .TikTok  කන්ටෙන්ට් එකක් හදමු. කන්ටෙන්ට් plan එක, Caption , Hashtags සහ අප්ලෝඩ් කරන වෙලාව තීරණය කරමු' 
    },
    { 
        id: 'Pos_Fun_0021', 
        input: 'mata eeka karanna baehae kiyalaa ahapu gaman, oyaa kiyalaa thiyennee ehema neveyi. oyaagee udhavvak thiyenavaa nam vitharak mama eeka karannam', 
        expected: 'මට ඒක කරන්න බැහැ කියලා අහපු ගමන්, ඔයා කියලා තියෙන්නේ එහෙම නෙවෙයි. ඔයාගේ උදව්වක් තියෙනවා නම් විතරක් මම ඒක කරන්නම්' 
    },
    { 
        id: 'Pos_Fun_0022', 
        input: 'api passee kathaa karamu kiyalaa vaeda ayin karalaa thibbath, adha bas eka parakku vuNa nisaa vaeda tika Work from home ivara karanna oonee.', 
        expected: 'අපි පස්සේ කතා කරමු කියලා වැඩ අයින් කරලා තිබ්බත්, අද බස් එක පරක්කු වුණ නිසා වැඩ ටික Work from home ඉවර කරන්න ඕනේ.' 
    },
    { 
        id: 'Pos_Fun_0023', 
        input: 'mama iiyee gedhara giya nisaa, ee Documents scan karalaa email Attach kaLaa. Recipient ikmaninma  piLithurak balaaporoththu venavaa', 
        expected: 'මම ඊයේ ගෙදර ගිය නිසා, ඒ Documents scan කරලා email Attach කළා. Recipient ඉක්මනින්ම  පිළිතුරක් බලාපොරොත්තු වෙනවා' 
    },
    { 
        id: 'Pos_Fun_0024', 
        input: 'reply ekak dhenna', 
        expected: 'reply එකක් දෙන්න' 
    },
     { 
        id: 'Pos_Fun_0025', 
        input: 'adha udheema', 
        expected: 'අද උදේම' 
    },
    { 
        id: 'Neg_Fun_0001', 
        input: 'meeting eka udhee 9.30ta patan gaththaa, mama rupiyal 250k gevalaa bus tikat eka gaththaa.', 
        expected: ' meeting එක උදේ 9.30ට පටන් ගත්තා, මම රුපියල් 250ක් ගෙවලා බස් ටිකට් එක ගත්තා.' 
    },
    { 
        id: 'Neg_Fun_0002', 
        input: 'oyaata heta havas velaa apita hambavenna puLuvandha kiyalaa mata dhaenaganna oonee, mokadha mata ee velaava laeesthi karaganna  oona nisaa', 
        expected: 'ඔයාට හෙට හවස් වෙලා අපිට හම්බවෙන්න පුළුවන්ද කියලා මට දැනගන්න ඕනේ, මොකද මට ඒ වෙලාව ලෑස්ති කරගන්න  ඕන නිසා.' 
    },
     { 
        id: 'Neg_Fun_0003', 
        input: ' oyaata podi velaavak thibuNoth mata call ekak dhenna, haebaeyi busy nam passee kool kaLath kamak naehae.', 
        expected: 'ඔයාට පොඩි වෙලාවක් තිබුණොත් මට call එකක් දෙන්න, හැබැයි busy නම් පස්සේ කෝල් කළත් කමක් නැහැ' 
    },
    { 
        id: 'Neg_Fun_0004', 
        input: 'karuNaakaralaa mee form eka hariyata fil karalaa, oyaagee visthara pariikShaa karalaa balalaa sabmit karanna. mokadha podi vaeradhiimak vuNath prashna aethi venna puLuvan', 
        expected: 'කරුණාකරලා මේ form එක හරියට ෆිල් කරලා, ඔයාගේ විස්තර පරීක්ෂා කරලා බලලා සබ්මිට් කරන්න. මොකද පොඩි වැරදීමක් වුණත් ප්‍රශ්න ඇති වෙන්න පුළුවන්.' 
    },
    { 
        id: 'Neg_Fun_0005', 
        input: 'karuNaakaralaa obata puLuvannam magee mee Project Report eka pariikShaa karalaa ee gaena adhahasak labaa dhenna. mama pasugiya sathiya puraama bohoo parYeeShaNa karalaa saha udhaaharaNa kihipayak aethuLath karalayi meya sakas kaLee. obagee adhahas samaGA meya thavath dhiyuNu kiriimata haeki nam mama ithaamath sathutu venavaa. mata miiLaGA Presentation eka ithaama hoDHAin idhiripath kiriimata avashYA nisayi mama mesee illaa sitinnee.', 
        expected: 'කරුණාකරලා ඔබට පුළුවන්නම් මගේ මේ Project Report එක පරීක්ෂා කරලා ඒ ගැන අදහසක් ලබා දෙන්න. මම පසුගිය සතිය පුරාම බොහෝ පර්යේෂණ කරලා සහ උදාහරණ කිහිපයක් ඇතුළත් කරලයි මෙය සකස් කළේ. ඔබගේ අදහස් සමඟ මෙය තවත් දියුණු කිරීමට හැකි නම් මම ඉතාමත් සතුටු වෙනවා. මට මීළඟ Presentation එක ඉතාම හොඳින් ඉදිරිපත් කිරීමට අවශ්‍ය නිසයි මම මෙසේ ඉල්ලා සිටින්නේ.' 
    },
     { 
        id: 'Neg_Fun_0006', 
        input: 'giya sathi anthayee mama pavulee ayath ekka trip ekak yanna plan kaLaa. senasuraadhaa udheema baeeg paek karalaa kaar eka laeesthi karagena api 7.00 vedhdhii gedharin pitath vuNaa. ehee gihin muhudha ayinee thibuNa hootalayakata check-in velaa podi viveekayak gaththaa. havas kaalayee muhudhee lassana balana gaman photo gaththaa, raeeta resturant eken raee kaeema kaeevaa. iiLaGA dhavasee udhee Swimming gihin mama Google Maps paavichchi karalaa avata thiyena thaen balanna giyaa. mee trip eka mata harima sathutu mathakayak vuNaa vageema magee hithee thibuNa Stress godak adu vuNaa.', 
        expected: 'ගිය සති අන්තයේ මම පවුලේ අයත් එක්ක trip එකක් යන්න ප්ලෑන් කළා. සෙනසුරාදා උදේම බෑග් පැක් කරලා කාර් එක ලෑස්ති කරගෙන අපි 7.00 වෙද්දී ගෙදරින් පිටත් වුණා. එහේ ගිහින් මුහුද අයිනේ තිබුණ හෝටලයකට check-in වෙලා පොඩි විවේකයක් ගත්තා. හවස් කාලයේ මුහුදේ ලස්සන බලන ගමන් photo ගත්තා, රෑට රෙස්ටුරන්ට් එකෙන් රෑ කෑම කෑවා. ඊළඟ දවසේ උදේ Swimming ගිහින් මම Google Maps පාවිච්චි කරලා අවට තියෙන තැන් බලන්න ගියා. මේ ට්‍රිප් එක මට හරිම සතුටු මතකයක් වුණා වගේම මගේ හිතේ තිබුණ Stress ගොඩක් අඩු වුණා.'
    },
    { 
        id: 'Neg_Fun_0007', 
        input: 'adha mama gedhara iDHAgena saeehenna vaeda godak kaLaa. udheema kussiyata velaa ammata kaeema hadhanna udhav karalaa badu tikath piLiveLak karalaa dhunnaa. iita passee podi velaavak tiivii eka balalaa nivus tikath ahagena hitiyaa. havas velaa onlayin aep ekak paavichchi karalaa Groceries oodar ekak dhaalaa kaad eken peemant ekath kaLaa. dilivari eka aavata passee badu tika chek karalaa frij ekata dhaalaa piLiveLak karalaa mama podi rest ekak gaththaa. ee vidhihata adha dhavasa harima sarala vuNath mata sathutu hithena dhavasak vuNaa.', 
        expected: 'අද මම ගෙදර ඉඳගෙන සෑහෙන්න වැඩ ගොඩක් කළා. උදේම කුස්සියට වෙලා අම්මට කෑම හදන්න උදව් කරලා බඩු ටිකත් පිළිවෙළක් කරලා දුන්නා. ඊට පස්සේ පොඩි වෙලාවක් ටීවී එක බලලා නිවුස් ටිකත් අහගෙන හිටියා. හවස් වෙලා ඔන්ලයින් ඇප් එකක් පාවිච්චි කරලා Groceries ඕඩර් එකක් දාලා කාඩ් එකෙන් පේමන්ට් එකත් කළා. ඩිලිවරි එක ආවට පස්සේ බඩු ටික චෙක් කරලා ෆ්‍රිජ් එකට දාලා පිළිවෙළක් කරලා මම පොඩි රෙස්ට් එකක් ගත්තා. ඒ විදිහට අද දවස හරිම සරල වුණත් මට සතුටු හිතෙන දවසක් වුණා.' 
    },
    { 
        id: 'Neg_Fun_0008', 
        input: 'mata heta Zoom Meeting ekak thibenavaa. adhaaLa Documents siyalla Attach karalaa, WhatsApp eken miitin link eka evanna kiyalaa manager  paNividayak yavanna.', 
        expected: 'මට හෙට Zoom Meeting එකක් තිබෙනවා. අදාළ Documents සියල්ල Attach කරලා, WhatsApp එකෙන් මීටින් ලින්ක් එක එවන්න කියලා manager  පණිවිඩයක් යවන්න.' 
    },
    { 
        id: 'Neg_Fun_0009', 
        input: 'api Kandy trip ekak yanavaa. eekata Hotel booking, bus tikat saha rupiyal 5000ka mudhalak laeesthi kaLaa. api passee trip  ekee vaedasatahana  email karamu.', 
        expected: 'අපි Kandy ට්‍රිප් එකක් යනවා. ඒකට Hotel booking, bus ටිකට් සහ රුපියල් 5000ක මුදලක් ලෑස්ති කළා. අපි පස්සේ trip  එකේ වැඩසටහන  email කරමු.' 
    },
    { 
        id: 'Neg_Fun_0010', 
        input: 'oyaalaa enavaadha kiyalaa ahapu gaman, Label tika hariyata dhaalaa, QR code eka saha URL eka test karanna. naethnam Users Confuse venna puLuvan', 
        expected: 'ඔයාලා එනවාද කියලා අහපු ගමන්, Label ටික හරියට දාලා, QR code එක සහ URL එක ටෙස්ට් කරන්න. නැත්නම් Users Confuse වෙන්න පුළුවන්' 
    },
     { 
        id: 'Neg_Fun_0011', 
        input: 'phone eka on karanna', 
        expected: 'phone එක ඔන් කරන්න' 
    },
    { 
        id: 'Neg_Fun_0012', 
        input: 'mama baeQQkuvee Account ekak open kaLaa, ee vageema onlayin baeQQku seevaavath Activate karagaththaa', 
        expected: ' මම බැංකුවේ Account එකක් open කළා, ඒ වගේම ඔන්ලයින් බැංකු සේවාවත් Activate කරගත්තා' 
    },
];

test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(2000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(5000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});


