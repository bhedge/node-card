#!/usr/bin/env node

const colors = require('colors');
const box = require("cli-box");

const boxOptions = {
  marks: {
  },
  text: '',
  hAlign: 'left',
  vAlign: 'center'
};

const picture = `77777!^. ::^~!!7?YYYYYYY5555555555YY5YYYYY?!~!~!!!!!~~~~~~~~!!!!!!!!!!!!!!!!!!!!
7777~::. ::^~!7?JYYYYY555555555555555555555Y!~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!
777~     :~~!7??JYYYY55555555555555555555555Y~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!
77!.     .^~!!77JYYYY5555555555YYYYYY555555557~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!
77~      :^^~!77JYYYY5YYYYYYYYYYYYYYYYY555555?~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!
77:     .^~7JJYYYY5Y55555YY5555PPGGGGGP555555J~~~~~~~~~~~~~~~~~~~~~~~~~~!!~~!!!!
7!.     ^7Y5GBBGGPP55555555PPPGGBBBBBGGGP5YY5Y~~~~~~~~~~~~~~~~~~~~~~~~~~!~~~!!!!
!!.   .^~!?Y5PPPPPPP555Y5PPPPGGGGGGGGGPPGP5YY5~~~~~~~~~~~~~~~~~~~~~~~~~~!~!!!!!!
!:   .^^^~7J5PGBBBBG5YJY55PPGBBBBGGGGGGPPP5YY57~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!
Y^  .~777~7Y5PG##&BGP?7Y55PPGBBBGGB##BBGP55YYYP?~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!
?^. :!7?!!7Y5PGGGGPPJ^!Y55PPPGGGGGGGGPPPP55YY5G?~~~~~~~~~~~~~~~~~~~~~~~~~!~~!!!!
^7.  :~7?JY5PPPPP5J7^.!Y555PP5PPPPPP55555YYYY55!~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!
:!.   ~7JYY555555J!^:^?Y5555555555555YYYYYYYYPY~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!
::.  .~7JYY55PPPPJ!..!JYYYY5PPPP5555YYYYJJYYY5Y~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!
^..  .~?JY55PPPPJ^^:^7Y5555555PPPP5555YYJYYYY5J~~~~~~~~~~~~~~~~~~~~~!!!!~~~!!!!!
7!:.::~7J55PPPP5Y?Y5YJJPPPGGGPPPPGPP555Y55YY557~~~~~~~~~~~~~~~~~~~~!!!!!~~~~!!!!
77::^:~?5GGPP55YY555PGPGGGGGPPP55PGGP55555555J~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!
77^:~^!5GGBGPYJJYY5PPPGGGGPPPPPPPPPGGP55555557~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!
77~:!!~YPPGGGGP5YJYY55PPPPPPPPPGGGGPGP5Y5P555!~~~~~~~~~~~777777777777?!!!!!!!!!!
777^^77!JPPGYJYYYY55YY5PPPGGBBBBBBGGP5555555J~~~~!~!77777777!~!!!!!777777777!!!!
7777:^7?77?Y5?7~^~J5PPPPPGPPP5555PPP55PP55P5!~!!!!!!77777777!~!!!!!777777777!!!!
77777^^!77~~?Y?!~!J5PPPGPGPP555555PPPPPPPP57~!!!!!!!!~~~!777777777777?7!!!!!!!!!
777777::^~~:^7YY?7?5PPGGGPP5555555PPPPPPPY!~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
777777^ .::::^!JJ??YY5PPPP55PPP555PPPPPPJ~^7PJ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
777777!  ..:::^!?JY55PPP5P555PPPPPGPPPY7~~~?B#P7!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
777777~....::::^!J55PPGGPPPPPPPGGGPY?!~~~75B###P?!77!!!!!!!!!!!!!!!!!!!!!!!!!!!!
777777:^..::^^^~~!?Y55PPPPPGPPP5Y?7!~~~75B######BY7!77!!!!!!!!!!!!!!!!!!!!!!!!77
77777!.!:.:^^^~!7?JYY55PPPP5YJ77!!!!!75B##########GJ7!!!777!!!!!!!!!!!!!7!!77777
77777! ~?^::^^!7????JYYJJ?77!!!!!!!7YB###########BBBGP5J7!!777777!77!77777777777
Y555P!^777^~77??7JY7^~!!!!!!!!!!!7JG#&##################BPJ7!!777777777777777777
PP5PG~J?7!7?JYY5GGGB5!!!!!!!!!77?5#&######################BGY?7!!777777777777777
55G#?!J!!7?YYYPG5PPBBGJ!!!!!77?YG#####################&###BBBBG5?7!!!!7777777777
PB#Y~Y7!!J5YPGGPGGBGGP5J!!!77?P######################&####BBBBBBBG55YJ?77!!77777
#G?7J7~!5P5GGGBBBGPY??JJJ7!7JG##############&&&&&&&&&########BBBBB####BGP5J?77!!
#Y!^:.!5PPBBBBBP5J777????J?YB################&&&&&&&###BBB####BBBBBBBBBBBBBBGGPY
?:   ~YGGGBBBP?77!77????JJP################BBB##&&&#BBBBBBBBB###########BBBBB###
.  .7JGGPGGGBJ~~!!77?????P#######BBB#####BBBBBBB#&&#BGGGBBBBBB##################
  :7J5GPPBGBGJ~~!!7?????G######BBBBBBBBBBBBBBB#&&&&#GGGGGGBBBBB#################
 :J55GPGGGGGGY7~!7???7?GB#####BBBBBBBBBBBBBBB#&&&&#GGGGGGGGGBBB############&&&&#
:?J5PGPGBGBGGY!!???77JGB####BBBBBBBBBBBBBBB#&&&&&#BGPPPGGGGGGBBBBBBBB#BBGYYYYYYB
7YYPGGGBGGGGP7!?7777?GB###BBBBBBBBBGGBBBB#&&&&&##BGPPPPGGGGGGBBBBBBBBBBGP???77?B`.inverse;

const blank = { label: '', value: '' }
const line = { label: '----------', value: '------------------------------------------------------------------' }
const data = {
  name: {
    label: '',
    value: `${colors.white.bold('Brandon Hedge')}`  
  },
  company: {
    label: '',
    value: `${colors.white('CTO @')} ${colors.blue('Lineage Bank')}`
  },
  link: {
    label: '',
    value: `${colors.white('https://www.lineagebank.com')}`
  },
  npm: {
    label: 'npm 📦',
    value: colors.blue(`https://npmjs.com/~${colors.white('bhedge')}`)
  },
  github: {
    label: 'github 🐙',
    value: colors.blue(`https://github.com/${colors.white('bhedge')}`)
  },
  twitter: {
    label: 'twitter 🐦',
    value: colors.blue(`https://twitter.com/${colors.white('0x4845444745')}`)
  },
  linkedin: {
    label: 'linkedIn 🔗',
    value: colors.blue(`https://linkedin.com/in/${colors.white('brandonhedge')}`)
  },
  keybase: {
    label: 'keybase 🔒',
    value: colors.blue(`https://keybase.io/${colors.white('bhedge')}`)
  },
  npx: {
    label: '$',
    value: colors.white(`npx ${colors.gray('bhedge')}`)
  },
  source: {
    label: '',
    value: colors.black(`Sourced from @bitandbang & @buzuli -- thanks!`)
  },
  previous: {
    label: 'history 💻',
    value: colors.red(`[ ${colors.red(' npm ').bgWhite} ${colors.blue(' Elastic ').bgWhite},${colors.yellow(' LeanKit ').bgWhite},${colors.cyan(' LifePoint Health ').bgWhite},${colors.gray(' and more... ').bgWhite} ]`)
  },
};

const card = [
  blank,
  data.name,
  data.company,
  data.link,
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

console.info(colors.white(box(`80x39`, picture)))
console.info(colors.white(box(`80x${card.length}`, boxOptions)));



