let dimensaoX = 0;
let dimensaoY = 0;

let x = 0;
let y = 0;

const NORTE = 'N';
const SUL = 'S';
const LESTE = 'L';
const OESTE = 'O';

const FRENTE = 'F';
const ATRAS = 'T';
const ESQUERDA = 'E';
const DIREITA = 'D';

let orientacaoAtual = '';

function deslocarParaFrente() {
  switch (orientacaoAtual) {
    case NORTE:
      if (y < dimensaoY) y = Math.abs(y + 1);
      break;
    case SUL:
      if (y > 0 && y < dimensaoY) y = Math.abs(y - 1);
      break;
    case LESTE:
      if (x < dimensaoX) x = Math.abs(x + 1);
      break;
    case OESTE:
      if (x > 0 && x < dimensaoX) x = Math.abs(x - 1);
      break;
  }
}

function deslocarParaAtras() {
  switch (orientacaoAtual) {
    case NORTE:
      if (y > 0 && y < dimensaoY) y = Math.abs(y - 1);
      break;
    case SUL:
      if (y < dimensaoY) y = Math.abs(y + 1);
      break;
    case LESTE:
      if (x > 0 && x < dimensaoX) x = Math.abs(x - 1);
      break;
    case OESTE:
      if (x < dimensaoX) x = Math.abs(x + 1);
      break;
  }
}

function obterOrientacaoQuandoGirarParaDireita() {
  switch (orientacaoAtual) {
    case NORTE:
      orientacaoAtual = LESTE;
      break;
    case SUL:
      orientacaoAtual = OESTE;
      break;
    case LESTE:
      orientacaoAtual = SUL;
      break;
    case OESTE:
      orientacaoAtual = NORTE;
      break;
  }
}

function obterOrientacaoQuandoGirarParaEsquerda() {
  switch (orientacaoAtual) {
    case NORTE:
      orientacaoAtual = OESTE;
      break;
    case SUL:
      orientacaoAtual = LESTE;
      break;
    case LESTE:
      orientacaoAtual = NORTE;
      break;
    case OESTE:
      orientacaoAtual = SUL;
      break;
  }
}

function movientarRobo(deslocamento) {
  switch (deslocamento) {
    case FRENTE:
      deslocarParaFrente();
      break;
    case ATRAS:
      deslocarParaAtras();
      break;
    case DIREITA:
      obterOrientacaoQuandoGirarParaDireita();
      break;
    case ESQUERDA:
      obterOrientacaoQuandoGirarParaEsquerda();
      break;
  }
}

function executarTesteCaso(limiteX, limiteY, deslocamentos) {
  dimensaoX = limiteX;
  dimensaoY = limiteY;

  x = 0;
  y = 0;

  orientacaoAtual = 'N';

  for (let deslocamento of deslocamentos.split('')) {
    movientarRobo(deslocamento);
  }

  const saida = orientacaoAtual + ' ' + x + ' ' + y;

  console.log(saida);

  const div = document.createElement('div');
  div.append(saida);

  document.getElementById('app').append(div);
  document.getElementById('app').append(document.createElement('br'));
}

console.clear();

document.getElementById('app').innerHTML = null;

executarTesteCaso(10, 10, 'FFFFFFFFFDFFFFFFFFFDFFFFFFFFFDFFFFFFFFF');

executarTesteCaso(5, 5, 'FDFEFDFEFDFEFDF');

executarTesteCaso(1232, 1232, 'TTTTTTTTTTTTT');

executarTesteCaso(15, 36, 'FFFFFFFFFFFFFFFFDFETTTTTTTTTTTTTTTT');

executarTesteCaso(
  50,
  50,
  `
TTFFDTTETDEDTTDDFFDEFDTEFTTDDEDEFFTEETEDTTEE
DDEFFFTEDFDFTTDDDTTTTTFDEFDFFTEDTEDEFTDTETETF
DFTDTFEFDTFTTEEFEEFEDDTFTEDFFTTDTTTFDETETDDTE
DDTFEDFDEFDDTTDEFEFTDTTDFFEDDTDFDETTDDFFTEED
FFTTTDETFTFDTETTTTDEFFETFTDFDTEEDFTEFTEFFFTDE
EDDTTEFDFETDFEEETTDFTTTEEEEEDTETFETTETDEEFTTD
DDFFTFDDEFDEFTTTEDFFFTEEDTDDTTDFDEETTDETETDD
ETTTDEFEETTETDEDTEFTTDDEEFDFDTEEEDEDTDDTEEEE
EDTFEDEDDDTTTFFDETFFDDTFDTEFFFDDFEEFEFDDFDTT
ETTDTDTTTDEDFTTDDDTTTTTDTEDFEFDTFFETEEEFFFEFD
TTDETTFFETTDEETFEDTEFFDEEFEEDTTFFTEEETDTEEEFT
FFEFEFDFFEFTFEDEEDFDDDFDFEFEDDDTEETTETFTTFDT
DEFTFEEDEFTEFETFEEEFDETEDFFTFDFFTFDTFEFDEDTTT
FEDEFTTDDEEFDTFTEEDTETEFEFFEEEFFTFEETEDDFFFTF
DETFDEFETDTFDDFFTFDTFTTFTTFDFDDEDEFFFETTTTFFF
FTDEEEFTDFDDFTFETDDEDFFFEFFDDDTTDEFETFDEFDED
ETDFEETEDTFETTTFEEEFTETFFTDFDFEDFTDDTEFTFFEFE
EFTTTFEEFTDDDEEDTFTFDTTDFDEETFFTDFDEDEEFFDTFE
TEDEETTEFFFDETTTFTEETFDTEFFEEFFDEDFFDTTEFDETD
DETDDDTDFETTTETEEEFDFTEETDTEDETTEDETFEEEFTFFE
EDTFFFTEDDFDDFDDTTEDEETETEEFDDDTTTTTEEFEFFFTE
FEDEFEFEFEDDFFEEEFEETTFDFEEDDTTTTETDTEDEFFDFT
TFFTDTEDEDEDDFEFT
`
);

executarTesteCaso(
  1000,
  1000,
  `
EDFFEDFTTEDFTETEFDTFDTDTDTFDFTDEDTFFTFTDDDETF
TFEFETEFEEEDFTTEFEEDFTFFTFTDTTDFDDDTFTTTDDEET
DDFTDFFETTDTTTFEEFFTDTFETDEFEDEFDFDTTEFDEEDTT
DDETTDEDTTEEEFFEEDDDETDFDTEDEDFTFFEEDEDDFEDE
DFDDFEDEETTFTETFTTTEETTFDDTTEFDDEDTDEDEDDFTF
EFTDFEFFDTETFFFTDTFTEFFFEDETFETTFETDFFFDEETETF
EFFTFETFEFFTEETDETDEFEFTFDEEFDEEDTEDEFEFTEETT
TTFEEFTDTDDFDEDFEDDDDTEDDDTFDDDEEEEDTTDFEDT
DETFTFTFDFTFTDFEDEFDEEEDDETEEEDDTEFEFFFDTEFTF
FEETETEDDDDEFTEEDDEDDTTDTTEDFEFETFTDTFTFEEDE
FEDTEFDEEDEDEFDTEDEETEDEDEDDEDTDTDDFFEFDEET
TEDDEFFTFDEFEFFDFDDTFEFTTDDDTDTDDFDEEDETDDDF
EFTEDEFEEFDETEFTDFTFDDFTFEEDEEEEEDDDTEDDFTDF
DFFFDTETTTDETTEDETEDDETETDEEFTTFTDDFDEEEFFDE
DTEDFTEETTEFDDFTFEFEEEETFTEFTEDFTFFEEEDFDETTE
FDTFFDDDFFDTEEFETDTETFDFTDEDTFFFFEETTFDFDDFTD
TTDFFTFDDDTDTDDFDDEETETTFETTEFDTTFEDDFDTEDET
TTEDTDEFFEFFFTDTEDTTTEFFTTTTDFTDFTETDDFDEEFEF
TEFTTDDDTEFEFETDDDDTETTTETEEDEETTDDFTDTETTFTF
FTEFFEEDEEEFTTDEEEEFEDTEEEDEEDDDTETEFEFDDDED
EFEFTTDFDTTDEDFTFDDTDTFDDDDEFEEEDEDDTTTDDTED
TEDDTDTDDTFETDTDTDFDDDTTEEEFEDTEFFDEEDTTEFTD
EDTDDETEFEFEFFTTTEEFDEF
`
);
