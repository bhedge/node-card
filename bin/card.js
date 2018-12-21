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

const picture = `'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''.''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''-/oydmNNNNmdy+-''''''''''''''''''''''''''''''
''''''''''''''''''''''''''.+ymmdhdddddmmmNNNNmy:'''''''''''''''''''''''''''
''''''''''''''''''''''''-ymNho//+ooosyyhhhyyyhmNdo.''''''''''''''''''''''''
'''''''''''''''''''''''+mms/::::://++oossssssooohmm/'''''''''''''''''''''''
''''''''''''''''''''''/Nh/---::::/://+ooossssoo++ohm/''''''''''''''''''''''
''''''''''''''''''''''dh/------::::://+ooossooo+++ohh''''''''''''''''''''''
'''''''''''''''''''''/do:-......--:://+oossssoo++++sd-'''''''''''''''''''''
'''''''''''''''''''''os/-.....---:::/+++ossssso+///+y/'''''''''''''''''''''
'''''''''''''''''''''s+:.......--:///+//+ooooo+///:/sy'''''''''''''''''''''
'''''''''''''''''   .s/-....-----://////+osyyhhso/::oh.''''''''''''''''''''
''''''''''''''     '.o+----/syhhysssoosyhdmNNNNmhyoohyo''''''''''''''''''''
''''''''''''       .o+hhysyyhdmNNmmdhhdmNNNNNNmdhyyNhsd.'''''''''''''''''''
''''''''           'y/+yy-:os+dNmNhyNmNMNNmmNmhyys+h/ys''''''''''''''''''''
''''                -/+:y--:::sddhsh+/yNNmddmdhyyoyo/yo''''''''''''''''''''
'                   '++-++:/+osssos+./symmdddhhhhys//yo' ''''''''''''''''''
'                    :+-.-:/+osys+:..:ossdmmhyyyso/:/h+     '''''''''''''''
'                    '+:...-:/syy/:--/ssosdmdhyyso/:+do'     ''''''''''''''
'                    'ss--.-/ohs+/+osydmNmmddmdhyo+ohmy'       ''''''''''''
'                    'hds/::ymmhhhmmNNNNMMNNNNNmysydmNs'        '''''''''''
'                     ymmhs+hNNNNNmmdhmmNNNNNMMNddmNNN/          ''''''''''
'                     :mNmmdymNdo+oyhhddmdddmNNNmNNNNh'           '''''''''
'                     'sNNNNmdyo/:+shmmmmddhhdNNNMMNms'            ''''''''
'                     .sNNMMNmhs+oyhdNNNNmmdddNMMMMNh/               ''''''
'                 '.:+dNNNNMNNNmhhhdmNNNNmNNNNMMMMMMNy:.'             '''''
'            './ohmNNNNNNNmNNNNNhhydmNNNNNmNMMMMMNNNMMNmdy+-'          ''''
'       '':oymNMMMMNMMMMNNhyddddhhyymNNNmmmNNNNMNNddMMMMMMMNmho:.''     '''
' ''.-+shmMMMMMMMMMMMMMMMMNoyhsyyyyshdNNddddmmmNNNhmMMMMMMMMMMMMNmhyo/.''''
+yhmNMMMMMMMMMMMMMMMMMMMMMMh+hs+oyyyshdmmdhhhhdmNmsNMMMMMMMMMMMMMMMMMMNmhs/
MMMMMMMMMMMMMMMMMMMMMMMMMMMN/ydsoysyoshyyhhhyyhmdooMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMmo+ddhhsooso+syyyhdh:omMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMmoosmmdyysssssyhy+:sNMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNdsssossso+/::/yyydhMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNyyo+//:-.''.-yhso+dMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdsoo+://::.+dyo///NMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy+:////+:yys//::sMMMMMMMMMMMMMMMMMMMMMMMMMM
dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmo::::::os+/:::-hMMMMMMMMMMMMMMMMMMMMMMMMMd
`.inverse;

const blank = { label: '', value: '' }
const data = {
  name: {
    label: '',
    value: colors.grey(`${colors.white.bold('Brandon Hedge')} | ${colors.white('@bhedge')}`)
  },
  work: {
    label: '',
    value: colors.white(`Managing Engineer - Infrastructure @ ${colors.red('npm').bgWhite}      `)
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
    value: colors.blue(`https://twitter.com/${colors.white('hedgeb')}`)
  },
  linkedin: {
    label: 'LinkedIn 🔗',
    value: colors.blue(`https://linkedin.com/in/${colors.white('brandonhedge')}`)
  },
  keybase: {
    label: 'Keybase 🔒',
    value: colors.blue(`https://keybase.io/${colors.white('bhedge')}`)
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
  data.name,
  data.work,
  blank,
  data.npm,
  data.github,
  data.twitter,
  data.linkedin,
  data.keybase,
  blank,
  data.npx,
  data.source
];

const maxLabelLen = Object.values(data).reduce((m, d) => Math.max(m, d.label.length), 0);

const text = card
  .map(({ label, value }) => {
    const pad = ' '.repeat(maxLabelLen - label.length);
    return colors.grey(`${pad}${label}  ${value}`);
  })
  .join('\n');

boxOptions.text = text;

console.info(colors.white(box(`80x39`, picture)))
console.info(colors.white(box(`80x${card.length}`, boxOptions)));



