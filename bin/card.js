#!/usr/bin/env node

const colors = require('colors');
const box = require("cli-box");

const boxOptions = {
  marks: {
  },
  text: '',
  hAlign: 'left',
  vAlign: 'left'
};

const picture = `7777777!^. :::^~~!!7?JYYYYYYYY5555555555Y55YY55YYYYYJ7~~!!~!!!!!!~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!!!!!
77777!^::. .::^~!!77?JYYYYY555555555555555555YY55555Y5?~~~~~~~!!~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!!!
7777!. ..  .^^~~!7??JYYYYYY5555555555555555555555555555?~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!
7777:      .^~~!!77?JYYYYY5555555555555555555555555555557~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!
777~       .:^~~!!77?JYYYY55555555555YYYYYYYYYY555555555J~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!
777:       .:^^^~!77JYYYYY5YYYYYYYYYYYYYYYYYYYYYY5555555Y~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!~!!!!
77!.       :^~!77??JJYYYYY55555YYYYYY55555PPPPPP5Y5Y55555!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!~!!!!!!
77~       .^!?Y5PPPPPP55555555555555PPGBBB###BBGGP555YY55!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!~~!!!!!
77^      .^!J5PGGGGGGGPPPP5555555PPPGGGGGGGGGGGGGGG55YYY57~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!
~!:     .^~!7?Y555PPPPPPP555YY55PPPPGGGGGGGGGGGPPPPP5YYYP?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!~!!!!!!!!
!:.    :^^::~7J5PPGBBBBGG5YJJYY55PPGGBBBBGGGGPPGGPPPP5YY5?!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!~!!!
Y7    :!!7?7!JYPPPB&&&&BGPY7?Y55PPGGB#BBGGGB#BBBBGPP55YY55P!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!
J!   .!???!^^!Y5PPGBBBBGP5?^?555PPPGBBBGGPGB#BGGGGPP55YYYPG7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!~~~~!!!!!!
!^~  .~!7?77?J55PPPPGPP5Y?^:7YY5PPPPPPGGGGGGPPPPPPP55YYY5PP!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!~~!!!!!
:7!   .:~7?JY55PPPPP55Y?!^.^7Y5555PP55PPPP5555555YYYYYYY5PJ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!
:7~    :!7?YYY5555555Y?~^::!?YY5555555555555555YYYYYYYYY5P?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!
::^    ^!7?JYY55555P5Y?~..~?YYYYY555PP555555YYYYYYYJYYYY55?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!
: .    ^!?JYY555PPPP5?!^  !?YYYYYY555PPPP55555YYYYJJYYYY5YJ~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!
!^.   .^!?JY55PPPPPPJ:^!!~7J55PP5PP555PPGPP55555YYYYYYYY55?~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!~~~~!!!!!!
77!..:::!?JY5PPPP5555JYPPP5?YPPPGGGGGPPPPGGPP5555Y555YY55?~~~~~~~~~~~~~~~~~~~~~~~~!~!!!!!!~~~~~!!!!!
77!.:^:^!J5PGGPP55YYYY555PGGPGGGGGGPPP5555PGGPP5555555555!~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!
77!.^~^~?5GBBGG5YJYYY555PPGGGGGGGGPPPPPPPPPPGGPP55555555Y~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!
777::!~^7PGPGBGBGYJ??JYY555PPPPPPPPPPPPPPGGPPGGP5Y5PP555?~~~~~~~~~~~~~~!777777777777777!!!!!!!!!!!!!
777~.~7!~JPPPGG5PGBGPY5J5YY5PPPGPGGGGGGGGBGGPGP55Y555555!~~~~~~!~~~~~~~7?!!!!!!!!!!!!!7?!!!!!!!!!!!!
7777^:~?7!755PP5J????J55P5Y55PPPPGGBBBBGBBGPGP555555555J~~~~~~!~!77777777777~!!!!!!777777777777!!!!!
77777::~7?77?J55J77~^^7YPPPGGPPGGPPPP5555PPP555PPP555P5!~!!!!!!!!7777777777!!!!!!!!!77777777777!!!!!
777777^:~!77!^!JY?7!~~7J5PPPPPPPPP55555555PPPPPPPPP5P57~!!!!!!!!!!~~~~~7?7!!77!77777!77?!!!!!!!!!!!!
7777777~:^~!!^:~7YY?77?J5PGGGGGGPPP55555555PPPPPPPPPY!~!!!!!!!!!!!!!!!!!777777777777777!!!!!!!!!!!!!
7777777!..:^^^::~7YYJ??JY5PPPPPPP555P555555PPPPPPPPY!^!7!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
77777777: .::::::^7JJ??JYY555PPPP55PPP5555PPPPPPP5?~~~?BP?!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
77777777~ ....::::^!?JJ555PPPP5P55555PPPPPGGPPP5J!~~~~?B#BY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
77777777~ ....:::::^!?Y55PPPGGPPPPPPP5PPGGGPPY?!~~~~75B####57!77!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
7777777!::...:::^^^^~!?Y5PPGGGGGPPPPPPGGP5Y?!~~~~!75B#######GJ!!777!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!77
7777777^:! .:::^^^~~!!7?JYJY55PPPPGGP5YJ7!!!!!!!7YB&#########BP?!77777!!!!!!!!!!!!!!!!!!!7!!!!!!!!77
7777777:.7^..:^^^~!7??JJYY55PPPPP5YJ77!!!!!!!!?YB############B#B577!!!7777!!!!!!!!!!!!!!!777!7777777
777777?: ~J!:::^^~!7???JJJYYYJJ?777!!!!!!!!!?YG###############BBBBGPY?7!!777777777!77!77777777777777
JY5555Y ^!!7~^~!!!?777??~^~!!!!!!!!!!!!!!!7JP#&#################BB####G5J7!!777777777777777777777777
GGP5PB?~5??7!!!JYYYY5GGGP?~!!!!!!!!!!!!77?5B############################BGY?!!!777777777777777777777
P55PBG~JJ!!7!?5YJ55PGPPGBB57!!!!!!!!!77?YG#########################&####BBBBPY?7!7777777777777777777
55PB#!~J77~!?JJ5YPGG5PPPGBGBY!!!!!!77?J5B##########################&####BBBBBBBGY?7!!!!7777777777777
5G#B?~YJ~~!7Y555GGPPGGBBGGP55J!~!!77?YG###########################&######BBBBBBBBBGP5YJJ?77!77777777
B#5!7JJ!!!YP5PGGGBGGBBGPY???JYJ7!!7?5B##################&&&&&&&&&&&#########BBBBBBBB###BBGPYJ77!!!!7
&G?J7~^:!J5PPGBBBGBGP5J777?????J?7JG###################&&&&&&&&&&############BBBBBBBBBBBBBBBBBGP5Y?7
PJ~.   ~YGBPBBBGBG5Y?7777??????JJYB######################&&&&&&&##BBBBBBBB######BBBBBBBBBBBBBBBBBBBB
!.   .~J5PGGBBBBP7!!!!777????JJ?YB###################BBBBB##&&&##BBBBBBBBBBB########################
:   :??PBPPGGGGB5~~~!!777??????5B#########BBBB#####BBBBBBBBB#&&&#BGGGGGBBBBBB#######################
   :7?YGGPP#BPBGP!~~!!!7??????P########BBBBBBBBBBBBBBBBBBB#&&&&&#GGGGGGGBBBBBB######################
  ^YYYPGGGPGGPBPP7!!~!7????7?PBB#####BBBBBBBBBBBBBBBBBBBB#&&&&&#GGGGGGGGGGBBBBB#####################
 :?5Y5GGPG#GGBGGPJ!~7???7?7?GBB#####BBBBBBBBBBBBBBBBBBB#&&&&&&#BGPPPGGGGGGGBBBBBBB#BB###########&##B
:JYJPPGGPGGGG#GPP~~7???7?7?GBB####BBBBBBBBBBBBBBBBBBB#&&&&&&&#BGGPPPPGGGGGGGBBBBBBB#BBB#BGP7!!!!!!?#
!YJYGGBGBBGGPPGPJ!77777?7?GBB####BBBBBBBBBBBGGGBGBB#&&&&&&&##BGGPPPPPGGGGGGGBBBBBBBBBBBBBGGYJYJ?JJ5#
`.inverse;

const blank = { label: '', value: '' }
const line = { label: '------------', value: '---------------------------------------------------------------------------------' }
const data = {
  name: {
    label: '',
    value: colors.grey(`${colors.white.bold('Brandon Hedge')} ${colors.white('| CTO @')} ${colors.blue('Lineage Bank')} - ${colors.white('https://www.lineagebank.com')}`)  
  },
  npm: {
    label: 'npm 📦',
    value: colors.blue(`https://npmjs.com/~${colors.white('bhedge')}`)
  },
  github: {
    label: 'Github 🐙',
    value: colors.blue(`https://github.com/${colors.white('bhedge')}`)
  },
  twitter: {
    label: 'Twitter 🐦',
    value: colors.blue(`https://twitter.com/${colors.white('0x4845444745')}`)
  },
  linkedin: {
    label: 'LinkedIn 🔗',
    value: colors.blue(`https://linkedin.com/in/${colors.white('brandonhedge')}`)
  },
  keybase: {
    label: 'Keybase 🔒',
    value: colors.blue(`https://keybase.io/${colors.white('bhedge')}`)
  },
  previous: {
    label: '  History 👨‍💻',
    value: colors.red(` [ ${colors.red('npm').bgWhite}, ${colors.blue('Elastic').bgWhite}, ${colors.yellow('LeanKit').bgWhite}, ${colors.cyan('LifePoint Health').bgWhite}, ${colors.gray('and many more...').bgWhite}]`)
  },
  npx: {
    label: '$',
    value: colors.white(`npx ${colors.gray('bhedge')}`)
  },
  source: {
    label: '',
    value: colors.black(`Sourced from @bitandbang & @buzuli -- thanks!`)
  }
};

const card = [
  blank,
  data.name,
  blank,
  line,
  blank,
  data.npm,
  data.github,
  data.twitter,
  data.linkedin,
  data.keybase,
  data.previous,
  blank,
  data.npx,
  blank,
];

const maxLabelLen = Object.values(data).reduce((m, d) => Math.max(m, d.label.length), 0);

const text = card
  .map(({ label, value }) => {
    const pad = ' '.repeat(maxLabelLen - label.length);
    return colors.grey(`${pad}${label}${value}`);
  })
  .join('\n');

boxOptions.text = text;

console.info(colors.white(box(`100x39`, picture)))
console.info(colors.white(box(`100x${card.length}`, boxOptions)));



